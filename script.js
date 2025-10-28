// Modal Functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalPlatform = document.getElementById('modal-platform');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.watch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.content-item');
        modalTitle.textContent = item.dataset.title;
        modalPlatform.textContent = `Available on: ${item.dataset.platform}`;
        modalDescription.textContent = `Description: A captivating story...`; // Placeholder
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Search Functionality
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-bar').value.toLowerCase();
    document.querySelectorAll('.content-item').forEach(item => {
        const title = item.dataset.title.toLowerCase();
        item.style.display = title.includes(query) ? 'block' : 'none';
    });
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.add
})
