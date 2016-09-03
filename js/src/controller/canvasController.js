App.Controllers = {
    CanvasController: {
        registerDrawPointListener: function() {
            App.Views.CanvasView.getCanvas().click(function (e) {
               App.Controllers.CanvasController.handleDrawPointEvent(e);
            });
        },
        handleDrawPointEvent: function(e) {
            App.Views.CanvasView.drawPoint(getMousePos(e).x, getMousePos(e).y);

            function getMousePos(evt) {
                var rect = App.Views.CanvasView.getCanvas()[0].getBoundingClientRect();
                return {
                    x: evt.clientX - rect.left,
                    y: evt.clientY - rect.top
                };
            }
        }
    }
}

$(document).ready(function() {
    App.Controllers.CanvasController.registerDrawPointListener();
});