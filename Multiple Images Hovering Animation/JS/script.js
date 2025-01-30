var elem = document.querySelectorAll('.elem');
var img = document.querySelectorAll('.elem>img');

elem.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
        val.childNodes[3].style.opacity = "1";
        console.log(val.childNodes);
    });

    val.addEventListener("mouseleave", function () {
        val.childNodes[3].style.opacity = "0";
    });

    val.addEventListener("mousemove", function (dets) {
        val.childNodes[3].style.left = dets.x + "px";
    });
});