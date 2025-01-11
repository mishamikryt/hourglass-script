<script>
window.inactivityHandler = {
    timer: null,
    timeoutDuration: 30000,

    showHourglass: function() {
        const hourglass = document.getElementById('hourglass');
        if (hourglass) {
            hourglass.style.display = 'block';
        }
    },

    hideHourglass: function() {
        const hourglass = document.getElementById('hourglass');
        if (hourglass) {
            hourglass.style.display = 'none';
        }
    },

    resetTimer: function() {
        if (this.timer) {
            window.clearTimeout(this.timer);
        }
        this.hideHourglass();
        this.timer = window.setTimeout(this.showHourglass.bind(this), this.timeoutDuration);
    },

    init: function() {
        const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
        events.forEach((event) => {
            document.addEventListener(event, this.resetTimer.bind(this));
        });
        this.resetTimer();
    }
};

document.addEventListener('DOMContentLoaded', function() {
    window.inactivityHandler.init();
});
<script>
