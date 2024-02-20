$(document).ready(function () {
    var rect = $(".Main-Banner")[0].getBoundingClientRect();
    var mouse = { x: 0, y: 0, moved: false };

    $(".Main-Banner").mousemove(function (e) {
        mouse.moved = true;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    // Ticker event will be called on every frame
    TweenLite.ticker.addEventListener("tick", function () {
        if (mouse.moved) {
            parallaxIt(".baby", -320);
            parallaxIt(".baby", -250);
        }
        if (mouse.moved) {
            parallaxIt(".baby2", -100);
            parallaxIt(".baby2", -60);
        }
        if (mouse.moved) {
            parallaxIt(".baby3", -150);
            parallaxIt(".baby3", -100);
        }
        mouse.moved = false;
    });

    function parallaxIt(target, movement) {
        TweenMax.to(target, 0.5, {
            x: ((mouse.x - rect.width / 2) / rect.width) * movement,
            y: ((mouse.y - rect.height / 2) / rect.height) * movement
        });
    }

    $(window).on("resize scroll", function () {
        rect = $(".Main-Banner")[0].getBoundingClientRect();
    });
});