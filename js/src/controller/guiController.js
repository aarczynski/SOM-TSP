App.Controllers.GUIController = {
    registerStartListener: function () {
        var running = false;
        $('#startButton').click(function() {
            if(!running) {
                App.Views.GUIView.disable();
                App.Controllers.CanvasController.unregisterDrawPointListener();
                running = true;
                App.main.init(getInitParams());
                update();
            } else {
                running = false;
                App.Views.GUIView.enable();
                App.Controllers.CanvasController.registerDrawPointListener();
            }

            function update() {
                for (var i = 0; i < 50; i++) {
                    App.main.step();
                }
                App.Controllers.HUDController.refresh();
                App.Controllers.CanvasController.refresh();
                if (running) {
                    requestAnimationFrame(update);
                }
            }
        });
        
        function getInitParams() {
            var params = {
                theta: App.Views.GUIView.getTheta(),
                phi: App.Views.GUIView.getPhi(),
                momentum: App.Views.GUIView.getMomentum()
            };
            return params;
        }
    },
    registerClearListener: function() {
        $('#clearButton').click(function() {
            App.TSP.towns = [];
            App.Views.CanvasView.clearCanvas();
            App.Views.HUDView.clearCanvas();
        });
    }
}

$(document).ready(function() {
    App.Controllers.GUIController.registerStartListener();
    App.Controllers.GUIController.registerClearListener();
});