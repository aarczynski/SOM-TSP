App.Controllers.GUIController = {
    registerStartListener: function () {
        $('#start').click(function() {
            App.main.init();
            update();

            function update() {
                for (var i = 0; i < 50; i++) {App.main.step();}
                App.Controllers.HUDController.refresh();
                App.Controllers.CanvasController.refresh();
                requestAnimationFrame(update);
            }
        });
    }
}

$(document).ready(function() {
    App.Controllers.GUIController.registerStartListener();
});