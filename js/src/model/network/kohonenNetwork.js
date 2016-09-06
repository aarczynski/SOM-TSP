App.Network.neurons = [];
App.Network.solve = function() {
    var theta;
    var phi;
    var momentum;

    init();
    App.Controllers.CanvasController.refresh();

    function init() {
        theta = 0.5;
        phi = 0.5;
        momentum = 0.999;
        App.Network.neurons = [];

        var alpha = 0.0;
        for (var i = 0; i < App.TSP.towns.length * 2; i++) {
            App.Network.neurons.push(new App.Network.Neuron(0.5 + 0.5 * Math.cos(alpha), 0.5 + 0.5 * Math.sin(alpha)));
            alpha += Math.PI * 2.0 / (App.TSP.towns.length * 2);
        }
    }
}