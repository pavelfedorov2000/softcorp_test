app.rangeSlider = {
    name: 'rangeSlider',
    description: 'your script description',
    init() {
        const rangeSlider = document.getElementById('range-slider');

        if (!rangeSlider) return;

        noUiSlider.create(rangeSlider, {
            start: [75],
            range: {
                'min': [0],
                'max': [100]
            }
        });

        rangeSlider.noUiSlider.on('update', function (values, handle) {
            const rangeValue = rangeSlider.closest('.range').querySelector('.range__value');

            if (!rangeValue) return;

            rangeValue.innerHTML = `${Math.floor(values[handle])}%`;
        });
    },
};
