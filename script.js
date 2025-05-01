
const searchInput = document.getElementById('searchInput');
const newsCards = document.querySelectorAll('.news-card');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  newsCards.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    const description = card.getAttribute('data-description').toLowerCase();
    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
