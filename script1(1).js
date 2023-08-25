document.addEventListener("DOMContentLoaded", function () {
    var counter1 = 1;
    setInterval(function () {
        document.getElementById('R' + counter1).checked = true;
        counter1++;
        if (counter1 > 3) {
            counter1 = 1;
        }
    }, 3000);
});