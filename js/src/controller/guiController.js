App.Controllers.GUIController = {
    registerStartListener: function () {
        window.main = function () {
            setInterval(function() {
                App.Controllers.HUDController.refresh();
                App.Controllers.CanvasController.refresh();
            }, 1);
        };

        $('#start').click(function() {
            App.main.init();
            main();
            update();

            function update() {
                for (var i = 0; i < 50; i++) {App.main.step();}
                setTimeout(update, 1)
            }
        });
    }
}

$(document).ready(function() {
    App.Controllers.GUIController.registerStartListener();
});