/* ═══════════════════════════════════════════
   THE BIBLIOTHECA — Vintage Library JS
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // ── 1. Staggered card entrance animation ──
    const cards = document.querySelectorAll('.book-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.07}s`;
    });

    // ── 2. Sort dropdown logic (homepage only) ──
    const sortDropdown = document.getElementById('sort-dropdown');
    const cardsGrid = document.getElementById('cards-grid');

    if (sortDropdown && cardsGrid) {
        sortDropdown.addEventListener('change', () => {
            const value = sortDropdown.value;
            const cardArray = Array.from(cardsGrid.querySelectorAll('.book-card'));

            // Add sorting class for opacity fade
            cardsGrid.classList.add('sorting');

            setTimeout(() => {
                // Sort cards
                cardArray.sort((a, b) => {
                    if (value === 'ranking') {
                        return parseInt(a.dataset.rank) - parseInt(b.dataset.rank);
                    } else if (value === 'rating-desc') {
                        return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
                    } else if (value === 'title-az') {
                        return a.dataset.title.localeCompare(b.dataset.title);
                    }
                    return 0;
                });

                // Re-append in new order
                cardArray.forEach((card, i) => {
                    card.style.animationDelay = `${i * 0.04}s`;
                    card.style.animation = 'none';
                    // Trigger reflow
                    card.offsetHeight;
                    card.style.animation = '';
                    cardsGrid.appendChild(card);
                });

                // Remove sorting class
                cardsGrid.classList.remove('sorting');
            }, 200);
        });
    }

    // ── 3. Pagination logic (homepage) ──
    const pageBtns = document.querySelectorAll('.page-btn');
    if (pageBtns.length > 0 && cardsGrid) {
        const allCards = Array.from(cardsGrid.querySelectorAll('.book-card'));
        const perPage = 10;
        const totalPages = Math.ceil(allCards.length / perPage);
        const showingCount = document.getElementById('showing-count');

        // Remove excess page buttons if fewer pages needed
        pageBtns.forEach((btn, i) => {
            if (i >= totalPages) {
                btn.style.display = 'none';
            }
        });

        function showPage(page) {
            const start = (page - 1) * perPage;
            const end = start + perPage;

            allCards.forEach((card, i) => {
                if (i >= start && i < end) {
                    card.style.display = '';
                    // Re-trigger animation
                    card.style.animation = 'none';
                    card.offsetHeight;
                    card.style.animation = '';
                    card.style.animationDelay = `${(i - start) * 0.07}s`;
                } else {
                    card.style.display = 'none';
                }
            });

            // Update showing count
            const shown = Math.min(end, allCards.length) - start;
            if (showingCount) {
                showingCount.textContent = shown;
            }

            // Update active button
            pageBtns.forEach(btn => btn.classList.remove('active'));
            pageBtns.forEach(btn => {
                if (parseInt(btn.dataset.page) === page) {
                    btn.classList.add('active');
                }
            });
        }

        pageBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const page = parseInt(btn.dataset.page);
                showPage(page);
                // Scroll to top of cards
                const target = document.querySelector('.filter-bar') || cardsGrid;
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        // Show first page on load
        showPage(1);
    }

    // ── 4. Rotating footer quotes ──
    const quotes = [
        '"A reader lives a thousand lives before he dies." — George R.R. Martin',
        '"So many books, so little time." — Frank Zappa',
        '"A room without books is like a body without a soul." — Marcus Tullius Cicero',
        '"The only thing you absolutely have to know is the location of the library." — Albert Einstein',
        '"I have always imagined that Paradise will be a kind of library." — Jorge Luis Borges',
        '"There is no friend as loyal as a book." — Ernest Hemingway',
        '"Books are a uniquely portable magic." — Stephen King',
        '"Reading is to the mind what exercise is to the body." — Joseph Addison'
    ];

    const footerQuote = document.getElementById('footer-quote');
    if (footerQuote) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        footerQuote.innerHTML = `<em>${randomQuote}</em>`;
    }
});
