app.select = {
    name: 'select',
    description: 'your script description',
    init() {
        const selects = document.querySelectorAll('.select');

        if (!selects.length) return;

        selects.forEach((select) => {
            const selectToggle = select.querySelector('.select__toggle');
            const selectToggleText = selectToggle.querySelector('.select__toggle-text');
            const selectLabels = select.querySelectorAll('.select__label');

            selectToggle.addEventListener('click', () => {
                if ('active' === select.getAttribute('data-state')) {
                    select.setAttribute('data-state', '');
                    selectToggle.setAttribute('aria-expanded', false);
                } else {
                    select.setAttribute('data-state', 'active');
                    selectToggle.setAttribute('aria-expanded', true);
                }
            });
        
            selectLabels.forEach((label) => {
                label.addEventListener('click', (e) => {
                    selectToggleText.textContent = e.target.textContent;
                    select.setAttribute('data-state', '');
                    selectToggle.setAttribute('aria-expanded', false);
                });
            });
        });

        document.addEventListener('mouseup', (e) => {
            if (!e.target.classList.contains('select__toggle') && !e.target.classList.contains('select__toggle-text') && !e.target.classList.contains('select__toggle-arrow')) {
                const activeSelect = document.querySelector('[data-state="active"]');

                if (!activeSelect) return;

                const activeSelectToggle = activeSelect.querySelector('.select__toggle');

                activeSelect.setAttribute('data-state', '');
                activeSelectToggle.setAttribute('aria-expanded', false);
            }
        });
    },
};
