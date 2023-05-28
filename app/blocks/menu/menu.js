app.menu = {
    name: 'menu',
    description: 'burger-btn and burger-menu logic',
    init() {
        const body = document.querySelector('body');
        const burgerBtn = document.querySelector('.burger-btn');
        const menu = document.querySelector('.header__menu');
        const menuClose = document.querySelector('.js-close-menu');

        if (!burgerBtn || !menu) return;

        burgerBtn.addEventListener('click', () => {
            body.classList.add('_lock');
            burgerBtn.classList.add('active');
            menu.classList.add('active');
        });

        if (!menuClose) return;
        
        menuClose.addEventListener('click', () => {
            body.classList.remove('_lock');
            burgerBtn.classList.remove('active');
            menu.classList.remove('active');
        });
    },
};
