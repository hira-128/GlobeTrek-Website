const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const destinationSearch = document.getElementById('destinationSearch');
const destBoxes = document.querySelectorAll('.dest-box');

destinationSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    destBoxes.forEach(box => {
        const keyword = box.getAttribute('data-keyword');
        if (keyword.includes(query)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
});