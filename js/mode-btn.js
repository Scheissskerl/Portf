let btnMode = document.querySelector('.header__btn-mode');

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnMode.classList.add('dark-mode--active');
    document.body.classList.add('dark');
};

if (localStorage.getItem('darkMode') === 'dark') {
    btnMode.classList.add('dark-mode--active');
    document.body.classList.add('dark');
};

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    let colorScheme = event.matches ? "dark" : "light";
    if (colorScheme === 'dark') {
        btnMode.classList.add('dark-mode--active');
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');
    } else {
        btnMode.classList.remove('dark-mode--active');
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'light');
    }
});

btnMode.addEventListener('click', () => {
    btnMode.classList.toggle('dark-mode--active');
    let isDark = document.body.classList.toggle('dark');
    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');
    }
});