App.Controller.GUIController = {
    registerStartButtonListener: function () {
        App.View.GUIView.disableStartButton();
        var running = false;
        $('#startButton').click(function() {
            if(!running) {
                App.View.GUIView.disableGui();
                App.Controller.CanvasController.unregisterDrawPointListener();
                App.main.init(getInitParams());
                running = true;
                update();
            } else {
                App.View.GUIView.enableGui();
                App.Controller.CanvasController.registerDrawPointListener();
                running = false;
            }

            function update() {
                for (var i = 0; i < 50; i++) {
                    App.main.step();
                }
                App.View.HUDView.repaint(App.main.getIterations(), App.main.getSolutionDistance());
                App.View.CanvasView.repaint(App.TSP.towns, App.Network.neurons);
                if (running) {
                    if (!App.main.isLearningFinished()) {
                        requestAnimationFrame(update);
                    } else {
                        App.View.GUIView.enableGui();
                        App.Controller.CanvasController.registerDrawPointListener();
                        running = false;
                    }
                }
            }
        });
        
        function getInitParams() {
            var params = {
                theta: App.View.GUIView.getTheta(),
                phi: App.View.GUIView.getPhi(),
                momentum: App.View.GUIView.getMomentum()
            };
            return params;
        }
    },
    registerClearButtonListener: function() {
        $('#clearButton').click(function() {
            App.TSP.towns = [];
            App.Network.neurons = [];
            App.View.CanvasView.clearCanvas();
            App.View.HUDView.clearCanvas();
            App.View.GUIView.resetSampleSelect();
            App.View.GUIView.disableStartButton()
            App.View.GUIView.setMomentum('9995');
            App.View.GUIView.setPhi('8');
            App.View.GUIView.setTheta('8');
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
            App.View.GUIView.setMomentum(sample.params.momentum);
            App.View.GUIView.setPhi(sample.params.phi);
            App.View.GUIView.setTheta(sample.params.theta);
            App.View.CanvasView.repaint(App.TSP.towns, []);
            App.View.HUDView.clearCanvas();
            App.View.GUIView.resetSampleSelect();
            App.View.GUIView.enableStartButton();
        });
    }
};

$(document).ready(function() {
    App.Controller.GUIController.registerStartButtonListener();
    App.Controller.GUIController.registerClearButtonListener();
    App.Controller.GUIController.registerSampleSelectListener();
});