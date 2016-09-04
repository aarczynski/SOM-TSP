App.Controllers = {
    CanvasController: {
        registerDrawPointListener: function() {
            App.Views.CanvasView.getCanvas().click(function (e) {
                var position = App.Utils.Mouse.getRelativeClickPosition(e, 'tsp');
                var canvas = App.Views.CanvasView.getCanvas();
                var x = position.x / canvas.width();
                var y = position.y / canvas.height();
                App.TSP.addTown({x, y});
                App.Controllers.CanvasController.handleDrawPointEvent(e);
            });
        },
        handleDrawPointEvent: function(e) {
            var pos = App.Utils.Mouse.getRelativeClickPosition(e, 'tsp');
            App.Views.CanvasView.drawPoint(pos.x, pos.y);
        }
    }
}

$(document).ready(function() {
    App.Controllers.CanvasController.registerDrawPointListener();
});