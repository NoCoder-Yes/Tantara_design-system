/**
 * TANTARA Shared Navigation & Shell Controller
 * Coordinates sidebar navigation, "Drafts & Documents" dropdown, and user profile session
 */

(function () {
  function initNavigation() {
    // 1. Detect current page
    const currentPath = window.location.pathname;

    // 2. Drafts & Documents dropdown toggle
    const draftsToggle = document.getElementById('nav-drafts-toggle');
    const draftsSubmenu = document.getElementById('nav-drafts-submenu');
    const draftsIcon = document.getElementById('nav-drafts-icon');

    // Check if on a sub-page of Drafts & Documents
    const isDraftsChild = currentPath.includes('tantara_document_upload_ai_read') ||
                          currentPath.includes('tantara_ai_case_drafts') ||
                          currentPath.includes('tantara_smart_autofill');

    if (draftsToggle && draftsSubmenu) {
      // By default open if current path is one of the 3 child pages
      if (isDraftsChild) {
        draftsSubmenu.classList.remove('hidden');
        if (draftsIcon) draftsIcon.textContent = 'expand_less';
      }

      draftsToggle.addEventListener('click', function (e) {
        e.preventDefault();
        const isHidden = draftsSubmenu.classList.contains('hidden');
        if (isHidden) {
          draftsSubmenu.classList.remove('hidden');
          if (draftsIcon) draftsIcon.textContent = 'expand_less';
        } else {
          draftsSubmenu.classList.add('hidden');
          if (draftsIcon) draftsIcon.textContent = 'expand_more';
        }
      });
    }

    // 3. User Profile Dropdown & Logout
    const profileTrigger = document.getElementById('user-profile-trigger');
    const profileMenu = document.getElementById('user-profile-menu');

    if (profileTrigger && profileMenu) {
      profileTrigger.addEventListener('click', function (e) {
        e.stopPropagation();
        profileMenu.classList.toggle('hidden');
      });

      document.addEventListener('click', function (e) {
        if (!profileMenu.contains(e.target) && !profileTrigger.contains(e.target)) {
          profileMenu.classList.add('hidden');
        }
      });
    }

    // 4. Header Global Search "Ask TANTARA" handler
    const globalSearchInput = document.getElementById('global-search-input');
    const globalAiBtn = document.getElementById('global-ai-btn');

    if (globalSearchInput) {
      globalSearchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && this.value.trim() !== '') {
          // If on dashboard, forward to prompt handler
          const dashPromptInput = document.getElementById('tantara-ai-input');
          if (dashPromptInput) {
            dashPromptInput.value = this.value;
            dashPromptInput.focus();
            const sendBtn = document.getElementById('tantara-send-btn');
            if (sendBtn) sendBtn.click();
          } else {
            // Redirect to dashboard with query
            window.location.href = '../tantara_dashboard/code.html';
          }
        }
      });
    }

    if (globalAiBtn && globalSearchInput) {
      globalAiBtn.addEventListener('click', function () {
        globalSearchInput.focus();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }
})();
