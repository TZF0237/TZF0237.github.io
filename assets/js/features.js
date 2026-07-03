/* ===========================================
   Custom features: TOC, reading progress,
   back-to-top, tag filtering
   =========================================== */
(function () {
  'use strict';

  // =====================
  // Table of Contents
  // =====================
  function buildTOC() {
    var tocNav = document.getElementById('toc');
    if (!tocNav) return;

    var content = document.querySelector('.page__content');
    if (!content) return;

    var headings = content.querySelectorAll('h2, h3');
    if (headings.length < 2) {
      tocNav.parentElement.style.display = 'none';
      return;
    }

    var list = document.createElement('ul');
    list.className = 'toc__list';

    headings.forEach(function (heading, index) {
      // Generate id if missing
      if (!heading.id) {
        heading.id = 'heading-' + index;
      }

      var li = document.createElement('li');
      li.className = 'toc__item toc__item--' + heading.tagName.toLowerCase();

      var a = document.createElement('a');
      a.href = '#' + heading.id;
      a.textContent = heading.textContent;
      a.className = 'toc__link';

      a.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById(heading.id);
        if (target) {
          var offset = 80; // fixed header offset
          var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });

      li.appendChild(a);
      list.appendChild(li);

      // Add anchor link to heading
      var anchor = document.createElement('a');
      anchor.href = '#' + heading.id;
      anchor.className = 'heading-anchor';
      anchor.innerHTML = '<i class="fas fa-link"></i>';
      anchor.setAttribute('aria-hidden', 'true');
      heading.appendChild(anchor);
    });

    tocNav.appendChild(list);

    // Highlight active heading on scroll
    var tocLinks = tocNav.querySelectorAll('.toc__link');
    var headingEls = [];

    tocLinks.forEach(function (link) {
      var id = link.getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if (el) headingEls.push({ el: el, link: link });
    });

    if (headingEls.length > 0) {
      window.addEventListener('scroll', function () {
        var scrollPos = window.scrollY + 120;
        var current = null;

        headingEls.forEach(function (item) {
          if (item.el.offsetTop <= scrollPos) {
            current = item;
          }
        });

        tocLinks.forEach(function (link) { link.classList.remove('active'); });
        if (current) current.link.classList.add('active');
      });
    }
  }

  // =====================
  // Reading Progress Bar
  // =====================
  function initProgressBar() {
    var fill = document.getElementById('reading-progress-fill');
    if (!fill) return;

    window.addEventListener('scroll', function () {
      var winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height <= 0) return;
      var scrolled = (winScroll / height) * 100;
      fill.style.width = scrolled + '%';
    });
  }

  // =====================
  // Back to Top Button
  // =====================
  function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
      }
    });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =====================
  // Tag Filter on Blog Page
  // =====================
  function initTagFilter() {
    var filterBar = document.querySelector('.tag-filter');
    if (!filterBar) return;

    var buttons = filterBar.querySelectorAll('.tag-filter__btn');
    var items = document.querySelectorAll('.archive__item-container');

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var tag = this.getAttribute('data-tag');

        // Update active button
        buttons.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');

        // Filter items
        items.forEach(function (item) {
          if (tag === 'all') {
            item.style.display = '';
          } else {
            var itemTags = item.getAttribute('data-tags') || '';
            if (itemTags.split(',').indexOf(tag) !== -1) {
              item.style.display = '';
            } else {
              item.style.display = 'none';
            }
          }
        });
      });
    });
  }

  // =====================
  // Code Copy Button
  // =====================
  function initCodeCopy() {
    var blocks = document.querySelectorAll('.page__content pre.highlight, .page__content pre:not(.highlight)');
    if (blocks.length === 0) return;

    blocks.forEach(function (pre) {
      // Avoid duplicate buttons
      if (pre.querySelector('.code-copy-btn')) return;

      var wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      var btn = document.createElement('button');
      btn.className = 'code-copy-btn';
      btn.setAttribute('aria-label', 'Copy code');
      btn.innerHTML = '<i class="fas fa-copy"></i>';
      wrapper.appendChild(btn);

      btn.addEventListener('click', function () {
        var code = pre.querySelector('code') || pre;
        var text = code.textContent || '';
        navigator.clipboard.writeText(text).then(function () {
          btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
          btn.classList.add('copied');
          setTimeout(function () {
            btn.innerHTML = '<i class="fas fa-copy"></i>';
            btn.classList.remove('copied');
          }, 2000);
        }).catch(function () {
          // Fallback for older browsers
          var textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          try { document.execCommand('copy'); } catch (e) {}
          document.body.removeChild(textarea);
          btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
          btn.classList.add('copied');
          setTimeout(function () {
            btn.innerHTML = '<i class="fas fa-copy"></i>';
            btn.classList.remove('copied');
          }, 2000);
        });
      });
    });
  }

  // =====================
  // Image Lightbox
  // =====================
  function initLightbox() {
    var content = document.querySelector('.page__content');
    if (!content) return;

    var images = content.querySelectorAll('img:not(.certificate-img):not(.archive__item-teaser img)');
    if (images.length === 0) return;

    // Create lightbox overlay once
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = '<div class="lightbox-inner"><img src="" alt="" /><button class="lightbox-close" aria-label="Close">&times;</button></div>';
    document.body.appendChild(overlay);

    var lightboxImg = overlay.querySelector('img');

    function open(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      overlay.classList.add('is-visible');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      overlay.classList.remove('is-visible');
      document.body.style.overflow = '';
    }

    // Make images clickable
    images.forEach(function (img) {
      if (img.closest('.lightbox-overlay') || img.closest('a')) return;
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function () {
        open(img.src, img.alt);
      });
    });

    // Close on click outside image
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
        close();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-visible')) {
        close();
      }
    });
  }

  // =====================
  // Emoji Reactions
  // =====================
  function initEmojiReactions() {
    var container = document.querySelector('.emoji-reactions');
    if (!container) return;

    var pageUrl = container.getAttribute('data-page-url');
    var storageKey = 'reactions_' + pageUrl;
    var saved = {};
    try {
      saved = JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch (e) {}

    // Load counts from localStorage (simulated - in production use a backend)
    var counts = {};
    try {
      var allCounts = JSON.parse(localStorage.getItem('reactions_counts')) || {};
      counts = allCounts[pageUrl] || {};
    } catch (e) {}

    var buttons = container.querySelectorAll('.emoji-reaction');
    buttons.forEach(function (btn) {
      var emoji = btn.getAttribute('data-emoji');
      var countSpan = btn.querySelector('.emoji-count');

      // Set initial count
      counts[emoji] = counts[emoji] || 0;
      countSpan.textContent = counts[emoji];

      // Highlight if already reacted
      if (saved[emoji]) {
        btn.classList.add('reacted');
        btn.disabled = true;
      }

      btn.addEventListener('click', function () {
        if (saved[emoji]) return; // already reacted

        // Mark as reacted
        saved[emoji] = true;
        btn.classList.add('reacted');
        btn.disabled = true;
        try { localStorage.setItem(storageKey, JSON.stringify(saved)); } catch (e) {}

        // Increment count (local only)
        counts[emoji] = (counts[emoji] || 0) + 1;
        countSpan.textContent = counts[emoji];
        try {
          var allCounts = JSON.parse(localStorage.getItem('reactions_counts')) || {};
          allCounts[pageUrl] = counts;
          localStorage.setItem('reactions_counts', JSON.stringify(allCounts));
        } catch (e) {}

        // Brief animation
        btn.style.transform = 'scale(1.3)';
        setTimeout(function () { btn.style.transform = ''; }, 200);
      });
    });
  }

  // =====================
  // Init on DOM ready
  // =====================
  function init() {
    buildTOC();
    initProgressBar();
    initBackToTop();
    initTagFilter();
    initCodeCopy();
    initLightbox();
    initEmojiReactions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
