/* ===========================================
   Site Search - Simple client-side search
   Works with all languages (Chinese, English, etc.)
   =========================================== */

(function () {
  'use strict';

  var searchOverlay = document.getElementById('search-overlay');
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var toggleBtn = document.getElementById('search-toggle-btn');
  var closeBtn = document.getElementById('search-close-btn');

  var docs = [];
  var loaded = false;
  var searchTimeout = null;

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

  // --- load index ---
  function loadIndex() {
    loaded = true;
    fetch('/search.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        docs = data;
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
    if (!loaded) return;

    // Debounce for performance
    if (searchTimeout) clearTimeout(searchTimeout);
    searchTimeout = setTimeout(function () {
      if (query.length === 0) {
        searchResults.innerHTML = '<p class="search-hint">Type to search posts and pages...</p>';
        return;
      }
      doSearch(query);
    }, 150);
  });

  function doSearch(query) {
    var q = query.toLowerCase();
    var results = [];

    docs.forEach(function (doc) {
      var score = 0;
      var title = (doc.title || '').toLowerCase();
      var excerpt = (doc.excerpt || '').toLowerCase();
      var content = (doc.content || '').toLowerCase();
      var tags = (doc.tags || []).join(' ').toLowerCase();
      var categories = (doc.categories || []).join(' ').toLowerCase();

      // Substring matching (works for all languages)
      if (title.indexOf(q) !== -1) score += 10;
      if (tags.indexOf(q) !== -1) score += 8;
      if (categories.indexOf(q) !== -1) score += 6;
      if (excerpt.indexOf(q) !== -1) score += 4;
      if (content.indexOf(q) !== -1) score += 2;

      // Multi-word: boost if all words match somewhere
      var words = q.split(/\s+/).filter(function (w) { return w.length > 0; });
      if (words.length > 1) {
        var allWordsMatch = words.every(function (w) {
          return title.indexOf(w) !== -1 || excerpt.indexOf(w) !== -1 || content.indexOf(w) !== -1;
        });
        if (allWordsMatch) score += 5;
      }

      if (score > 0) {
        results.push({ doc: doc, score: score });
      }
    });

    // Sort by score (highest first)
    results.sort(function (a, b) { return b.score - a.score; });

    if (results.length === 0) {
      searchResults.innerHTML = '<p class="search-no-results">No results found for "<strong>' + escapeHtml(query) + '</strong>".</p>';
      return;
    }

    var html = '<ul class="search-results-list">';
    results.slice(0, 20).forEach(function (r) {
      var doc = r.doc;
      var title = doc.title || 'Untitled';
      var excerpt = doc.excerpt || doc.content || '';
      if (excerpt.length > 150) excerpt = excerpt.slice(0, 150) + '...';

      // Highlight matching terms
      var titleHighlighted = highlight(title, query);
      var excerptHighlighted = highlight(excerpt, query);

      html += '<li class="search-result-item">';
      html += '<a href="' + doc.url + '" class="search-result-link">';
      html += '<span class="search-result-title">' + titleHighlighted + '</span>';
      if (doc.date) {
        html += '<span class="search-result-date">' + doc.date + '</span>';
      }
      html += '<span class="search-result-excerpt">' + excerptHighlighted + '</span>';
      html += '</a>';
      html += '</li>';
    });
    html += '</ul>';
    searchResults.innerHTML = html;
  }

  function highlight(text, query) {
    if (!text) return '';
    var escaped = escapeHtml(text);

    // Highlight each word in the query
    var terms = query.split(/\s+/).filter(function (t) { return t.length > 0; });
    terms.forEach(function (term) {
      // Escape regex special chars
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
