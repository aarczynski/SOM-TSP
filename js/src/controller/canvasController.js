App.Controller.CanvasController = {
    registerDrawPointListener: function() {
        App.View.CanvasView.getCanvas().click(function (e) {
            var position = App.Util.Mouse.getRelativeClickPosition(e, 'tspCanvas');
            var canvas = App.View.CanvasView.getCanvas();
            var x = position.x / canvas.width();
            var y = position.y / canvas.height();

            App.TSP.towns.push({x: x, y: y});
            App.View.CanvasView.repaint(App.TSP.towns, App.Network.neurons);
            App.View.GUIView.resetSampleSelect();

            if (App.TSP.towns.length > 1) {
                App.View.GUIView.enableStartButton();
            }
        });
    },
    unregisterDrawPointListener: function() {
        App.View.CanvasView.getCanvas().unbind('click');
    },
    getCanvasRect: function() {
        return App.View.CanvasView.getCanvasRect();
    }
}

$(document).ready(function() {
    App.Controller.CanvasController.registerDrawPointListener();
});