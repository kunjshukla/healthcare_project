document.addEventListener("DOMContentLoaded", function () {
    var incrementer = 1;
    setInterval(function () {
        document.getElementById('radio' + incrementer).checked = true;
        incrementer++;
        if (incrementer > 8) {
            incrementer = 1;
        }
    }, 1500);
});
