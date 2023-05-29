document.addEventListener('DOMContentLoaded', () => {
    app.menu.init();
    app.select.init();
    app.rangeSlider.init();

    const scrollBtns = document.querySelectorAll('[data-section]');

    if (!scrollBtns.length) return;

    scrollBtns.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            window.scrollTo({
                top: document.querySelector(`#${link.getAttribute('data-section')}`).offsetTop,
                behavior: "smooth"
            });

            const menu = link.closest('.header__menu');

            if (!menu || !menu.classList.contains('active')) return;

            document.querySelector('body').classList.remove('_lock');
            menu.classList.remove('active');
        });
    });

    const fileInputs = document.querySelectorAll('input[type="file"]');

    if (!fileInputs.length) return;

    fileInputs.forEach((input) => {
        input.addEventListener('change', function () {
            const label = input.closest('label').querySelector('.btn__text');
            const fileName = this.files[0].name;
            label.textContent = fileName;
        });
    });

    const animatedItems = document.querySelectorAll('.animated');

    if (!animatedItems.length) return;

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target)
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }

    const options = {
        rootMargin: '0px 0px 75px 0px',
        threshold: 0,
    };

    const observer = new IntersectionObserver(callback, options);

    animatedItems.forEach((item) => observer.observe(item));
});