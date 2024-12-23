document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('js-menu-button');
    const menuList = document.getElementById('js-menu');
    const sections = document.querySelectorAll('.first_column section');
    const navLinks = document.querySelectorAll('.menu__nav__list-item a');

    menuButton.addEventListener('click', () => {
        menuList.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');

            sections.forEach(section => {
                section.style.display = 'none';
            });

            document.getElementById(sectionId).style.display = 'block';
        });
    });

    sections.forEach((section, index) => {
        if (index !== 0) section.style.display = 'none';
    });
});