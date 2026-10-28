/**
 * TANTARA Rotating Quotes Carousel
 * Celebrated arbitration authorities, jurists & senior counsel
 */

(function () {
  const quotes = [
    {
      text: "“Arbitration is about resolving disputes with speed and integrity, not replicating the delays and technicalities of traditional courts.”",
      author: "Fali S. Nariman",
      cite: "Senior Advocate & Former ICCA President"
    },
    {
      text: "“The quality of justice depends upon the quality of the advocacy, and clarity of thought is the first duty of counsel.”",
      author: "Nani Palkhivala",
      cite: "Eminent Constitutional & Commercial Jurist"
    },
    {
      text: "“International arbitration provides the neutral, predictable, and expert forum that cross-border commerce fundamentally requires.”",
      author: "Gary Born",
      cite: "Leading International Arbitration Counsel & Author"
    },
    {
      text: "“Trust is the cornerstone of arbitration; every procedural step must reinforce impartiality, transparency, and institutional excellence.”",
      author: "Alexis Mourre",
      cite: "Former President, ICC International Court of Arbitration"
    },
    {
      text: "“Arbitration is not litigation in private; it is a consensual search for practical justice under the rule of law.”",
      author: "Lord Mustill",
      cite: "Lord of Appeal in Ordinary, Author of Mustill & Boyd"
    },
    {
      text: "“Dignity and the rights of individuals cannot be made to depend on algorithms or probabilities alone—precision and human judgment remain paramount.”",
      author: "Justice D.Y. Chandrachud",
      cite: "Former Chief Justice of India"
    }
  ];

  let currentIndex = 0;
  let intervalTimer = null;
  const ROTATE_INTERVAL_MS = 6000;

  function initQuotesCarousel() {
    const textEl = document.getElementById('quote-text');
    const authorEl = document.getElementById('quote-author');
    const citeEl = document.getElementById('quote-cite');
    const dotsContainer = document.getElementById('quote-dots');
    const prevBtns = document.querySelectorAll('.btn-quote-prev');
    const nextBtns = document.querySelectorAll('.btn-quote-next');
    const container = document.getElementById('quote-card-container');

    if (!textEl || !authorEl) return;

    // Render dot indicators
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      quotes.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = getDotClasses(idx === 0);
        dot.setAttribute('aria-label', 'Go to quote ' + (idx + 1));
        dot.addEventListener('click', () => {
          setQuote(idx);
          resetTimer();
        });
        dotsContainer.appendChild(dot);
      });
    }

    function getDotClasses(isActive) {
      return isActive
        ? 'w-6 h-1.5 rounded-full bg-[#1E1DC2] dark:bg-[#3B3FD8] transition-all duration-300'
        : 'w-2 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-500 transition-all duration-300 cursor-pointer';
    }

    function setQuote(index) {
      currentIndex = (index + quotes.length) % quotes.length;
      const q = quotes[currentIndex];

      // Fade out
      textEl.style.opacity = '0';
      textEl.style.transform = 'translateY(4px)';

      setTimeout(() => {
        textEl.textContent = q.text;
        authorEl.textContent = '— ' + q.author;
        if (citeEl) citeEl.textContent = q.cite;

        // Fade in
        textEl.style.opacity = '1';
        textEl.style.transform = 'translateY(0)';
      }, 180);

      // Update dots
      if (dotsContainer) {
        Array.from(dotsContainer.children).forEach((dot, idx) => {
          dot.className = getDotClasses(idx === currentIndex);
        });
      }
    }

    function prevQuote() {
      setQuote(currentIndex - 1);
      resetTimer();
    }

    function nextQuote() {
      setQuote(currentIndex + 1);
      resetTimer();
    }

    prevBtns.forEach(btn => btn.addEventListener('click', prevQuote));
    nextBtns.forEach(btn => btn.addEventListener('click', nextQuote));

    function startTimer() {
      if (intervalTimer) clearInterval(intervalTimer);
      intervalTimer = setInterval(nextQuote, ROTATE_INTERVAL_MS);
    }

    function resetTimer() {
      startTimer();
    }

    // Pause on hover
    if (container) {
      container.addEventListener('mouseenter', () => clearInterval(intervalTimer));
      container.addEventListener('mouseleave', startTimer);
    }

    // Set transition styles
    textEl.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

    // Initial render
    setQuote(0);
    startTimer();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuotesCarousel);
  } else {
    initQuotesCarousel();
  }
})();
