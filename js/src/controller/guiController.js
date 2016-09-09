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
            App.Views.GUIView.resetSampleSelect();
        });
    },
    registerSampleSelectListener: function() {
        $.each(App.Sample.getSamples(), function() {
            $('#sampleSelect')
                .append($("<option></option>")
                    .text(this.name)
                );
        });

        $('#sampleSelect').change(function() {
            App.TSP.towns = [];
            App.Network.neurons = [];
            var id = $("#sampleSelect option:selected").index();
            if (id === 0) {
                App.Views.CanvasView.repaint(App.TSP.towns, []);
                App.Views.GUIView.setMomentum('8');
                App.Views.GUIView.setPhi('8');
                App.Views.GUIView.setTheta('9995');
            } else {
                var sample = App.Sample.getSamples()[id - 1];
                sample.initTowns();
                App.Views.GUIView.setMomentum(sample.params.momentum);
                App.Views.GUIView.setPhi(sample.params.phi);
                App.Views.GUIView.setTheta(sample.params.theta);
            }
            App.Views.CanvasView.repaint(App.TSP.towns, []);
            App.Views.HUDView.clearCanvas();
        });
    }
}

$(document).ready(function() {
    App.Controllers.GUIController.registerStartListener();
    App.Controllers.GUIController.registerClearListener();
    App.Controllers.GUIController.registerSampleSelectListener();
});