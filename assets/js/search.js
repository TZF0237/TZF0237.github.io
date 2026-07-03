/* ===========================================
   Site Search - powered by Lunr.js
   Requires: lunr.js (CDN)
   =========================================== */

(function () {
  'use strict';

  var searchOverlay = document.getElementById('search-overlay');
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var toggleBtn = document.getElementById('search-toggle-btn');
  var closeBtn = document.getElementById('search-close-btn');
  var searchHint = searchResults.querySelector('.search-hint');

  var idx = null;
  var docs = {};
  var loaded = false;

  // --- open / close ---
  function openSearch() {
    searchOverlay.classList.add('is-visible');
    searchInput.value = '';
    searchResults.innerHTML = '<p class="search-hint">Type to search posts and pages...</p>';
    setTimeout(function () { searchInput.focus(); }, 100);
    document.body.style.overflow = 'hidden';

    if (!loaded) {
      loadIndex();
    }
  }

  function closeSearch() {
    searchOverlay.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openSearch);
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  // Close with Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && searchOverlay.classList.contains('is-visible')) {
      closeSearch();
    }
    // Ctrl/Cmd+K to open
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
  });

  // --- build index ---
  function loadIndex() {
    loaded = true;
    fetch('/search.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        idx = lunr(function () {
          this.ref('id');
          this.field('title', { boost: 10 });
          this.field('tags', { boost: 5 });
          this.field('categories', { boost: 3 });
          this.field('excerpt');
          this.field('content');

          data.forEach(function (doc, i) {
            doc.id = i;
            this.add(doc);
            docs[i] = doc;
          }, this);
        });

        // re-run search if user already typed
        if (searchInput.value.trim().length > 0) {
          doSearch(searchInput.value);
        }
      })
      .catch(function () {
        searchResults.innerHTML = '<p class="search-error">Unable to load search index. Please try again later.</p>';
      });
  }

  // --- search handler ---
  searchInput.addEventListener('input', function () {
    var query = searchInput.value.trim();
    if (query.length < 2) {
      searchResults.innerHTML = '<p class="search-hint">Type at least 2 characters to search...</p>';
      return;
    }
    if (!idx) return;
    doSearch(query);
  });

  function doSearch(query) {
    var results = idx.search(query);
    if (results.length === 0) {
      searchResults.innerHTML = '<p class="search-no-results">No results found for "<strong>' + escapeHtml(query) + '</strong>".</p>';
      return;
    }

    var html = '<ul class="search-results-list">';
    results.slice(0, 20).forEach(function (r) {
      var doc = docs[r.ref];
      var title = doc.title || 'Untitled';
      var excerpt = doc.excerpt || doc.content || '';
      if (excerpt.length > 150) excerpt = excerpt.slice(0, 150) + '...';

      html += '<li class="search-result-item">';
      html += '<a href="' + doc.url + '" class="search-result-link">';
      html += '<span class="search-result-title">' + highlight(title, query) + '</span>';
      if (doc.date) {
        html += '<span class="search-result-date">' + doc.date + '</span>';
      }
      html += '<span class="search-result-excerpt">' + highlight(excerpt, query) + '</span>';
      html += '</a>';
      html += '</li>';
    });
    html += '</ul>';
    searchResults.innerHTML = html;
  }

  function highlight(text, query) {
    if (!text) return '';
    var escaped = escapeHtml(text);
    var terms = query.split(/\s+/).filter(function (t) { return t.length > 0; });
    terms.forEach(function (term) {
      var re = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      escaped = escaped.replace(re, '<mark>$1</mark>');
    });
    return escaped;
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
})();
