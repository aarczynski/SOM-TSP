App.Controllers.CanvasController = {
    registerDrawPointListener: function() {
        App.Views.CanvasView.getCanvas().click(function (e) {
            var position = App.Utils.Mouse.getRelativeClickPosition(e, 'tspCanvas');
            var canvas = App.Views.CanvasView.getCanvas();
            var x = position.x / canvas.width();
            var y = position.y / canvas.height();

            App.TSP.towns.push({x: x, y: y});
            App.Views.CanvasView.repaint(App.TSP.towns, App.Network.neurons);
            App.Views.GUIView.resetSampleSelect();
        });
    },
    unregisterDrawPointListener: function() {
        App.Views.CanvasView.getCanvas().unbind('click');
    },
    refresh: function() {
        App.Views.CanvasView.repaint(App.TSP.towns, App.Network.neurons);
    }
}

$(document).ready(function() {
    App.Controllers.CanvasController.registerDrawPointListener();
});