document.addEventListener("DOMContentLoaded", function () {
    var counter1 = 1;
    setInterval(function () {
        document.getElementById('R' + counter1).checked = true;
        counter1++;
        if (counter1 > 5) {
            counter1 = 1;
        }
    }, 2000);
});