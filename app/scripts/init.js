document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-section]').forEach((link) => {
        link.addEventListener('click', () => {
            window.scrollTo({
                top: document.querySelector(`#${link.getAttribute('data-section')}`).offsetTop,
                behavior: "smooth"
            });
        });
    });

    /* $('input[type="file"]').on('change', function () {
        const $input = $(this);
        const fileName = this.files[0].name;
        const $placeholder = $input.closest('label').find('.placeholder');
        $placeholder.text(fileName);
    }); */

    /* const animatedItems = document.querySelectorAll('.animated');

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
        // root: по умолчанию window, но можно задать любой элемент-контейнер
        rootMargin: '0px 0px 75px 0px',
        threshold: 0,
    };

    const observer = new IntersectionObserver(callback, options);

    animatedItems.forEach((item) => observer.observe(item)); */

    // Custom js select
    let selectItem = document.querySelector('.select');
    let selectToggle = selectItem.querySelector('.select__toggle');
    let selectLabels = selectItem.querySelectorAll('.select__label');

    selectToggle.addEventListener('click', () => {
        if ('active' === selectItem.getAttribute('data-state')) {
            selectItem.setAttribute('data-state', '');
        } else {
            selectItem.setAttribute('data-state', 'active');
        }
    });

    selectLabels.forEach((label) => {
        label.addEventListener('click', (e) => {
            selectToggle.textContent = e.target.textContent;
            selectItem.setAttribute('data-state', '');
        });
    });

    /* document.addEventListener('mouseup', (e) => {
        if (searchForm != e.target && searchInput != e.target) {
            searchForm.classList.remove('search-form--active');
        }
    }); */
});