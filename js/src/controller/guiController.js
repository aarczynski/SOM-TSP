App.Controllers.GUIController = {
    registerStartListener: function () {
        window.main = function () {
            //window.requestAnimationFrame(main);
            setInterval(main, 10);
            App.main.step();
        };

        $('#start').click(function() {
            App.main.init();
            main();
        });
    }
}

$(document).ready(function() {
    App.Controllers.GUIController.registerStartListener();
});