App.Controllers = {
    CanvasController: {
        registerDrawPointListener: function() {
            App.Views.CanvasView.getCanvas().click(function (e) {
                var position = App.Controllers.CanvasController.getMousePosition(e);
                var canvas = App.Views.CanvasView.getCanvas();
                var x = position.x / canvas.width();
                var y = position.y / canvas.height();
                App.TSP.addTown({x, y});
                App.Controllers.CanvasController.handleDrawPointEvent(e);
            });
        },
        handleDrawPointEvent: function(e) {
            with(App.Controllers.CanvasController) {
                App.Views.CanvasView.drawPoint(getMousePosition(e).x, getMousePosition(e).y);
            }
        },
        getMousePosition: function(e) {
            var rect = App.Views.CanvasView.getCanvas()[0].getBoundingClientRect();
            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        }
    }
}

$(document).ready(function() {
    App.Controllers.CanvasController.registerDrawPointListener();
});