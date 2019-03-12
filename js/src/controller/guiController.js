App.Controllers.GUIController = {
    registerStartButtonListener: function () {
        App.Views.GUIView.disableStartButton();
        var running = false;
        $('#startButton').click(function() {
            if(!running) {
                App.Views.GUIView.disableGui();
                App.Controllers.CanvasController.unregisterDrawPointListener();
                App.main.init(getInitParams());
                running = true;
                update();
            } else {
                App.Views.GUIView.enableGui();
                App.Controllers.CanvasController.registerDrawPointListener();
                running = false;
            }

            function update() {
                for (var i = 0; i < 50; i++) {
                    App.main.step();
                }
                App.Views.HUDView.repaint(App.main.getIterations(), App.main.getSolutionDistance());
                App.Views.CanvasView.repaint(App.TSP.towns, App.Network.neurons);
                if (running) {
                    if (!App.main.isLearningFinished()) {
                        requestAnimationFrame(update);
                    } else {
                        App.Views.GUIView.enableGui();
                        App.Controllers.CanvasController.registerDrawPointListener();
                        running = false;
                    }
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
    registerClearButtonListener: function() {
        $('#clearButton').click(function() {
            App.TSP.towns = [];
            App.Network.neurons = [];
            App.Views.CanvasView.clearCanvas();
            App.Views.HUDView.clearCanvas();
            App.Views.GUIView.resetSampleSelect();
            App.Views.GUIView.disableStartButton()
            App.Views.GUIView.setMomentum('9995');
            App.Views.GUIView.setPhi('8');
            App.Views.GUIView.setTheta('8');
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
            var sample = App.Sample.getSamples()[id - 1];
            sample.initTowns();
            App.Views.GUIView.setMomentum(sample.params.momentum);
            App.Views.GUIView.setPhi(sample.params.phi);
            App.Views.GUIView.setTheta(sample.params.theta);
            App.Views.CanvasView.repaint(App.TSP.towns, []);
            App.Views.HUDView.clearCanvas();
            App.Views.GUIView.resetSampleSelect();
            App.Views.GUIView.enableStartButton();
        });
    }
}

$(document).ready(function() {
    App.Controllers.GUIController.registerStartButtonListener();
    App.Controllers.GUIController.registerClearButtonListener();
    App.Controllers.GUIController.registerSampleSelectListener();
});