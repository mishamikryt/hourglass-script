<script>
window.inactivityHandler = {
    timer: null,
    timeoutDuration: 30000, // 30 секунд бездіяльності
    showHourglass: function() {
        const hourglass = document.getElementById('hourglass');
        if (hourglass) {
            hourglass.style.display = 'block';
            hourglass.style.opacity = '1'; // Анімація появи (додатково)
        }
    },
    hideHourglass: function() {
        const hourglass = document.getElementById('hourglass');
        if (hourglass) {
            hourglass.style.opacity = '0'; // Анімація зникнення (додатково)
            setTimeout(() => {
                hourglass.style.display = 'none';
            }, 300); // Час зникнення відповідно до CSS transition
        }
    },
    resetTimer: function() {
        if (this.timer) {
            clearTimeout(this.timer); // Очищення таймера
        }
        this.hideHourglass();
        this.timer = setTimeout(() => {
            this.showHourglass();
        }, this.timeoutDuration);
    },
    init: function() {
        const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
        events.forEach((event) => {
            document.addEventListener(event, () => this.resetTimer());
        });
        this.resetTimer(); // Запуск таймера при завантаженні
    }
};

// Ініціалізація після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    window.inactivityHandler.init();
});
</script>
