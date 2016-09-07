App.Network.neurons = [];
App.Network.SOM = function() {
    var theta;
    var phi;
    var momentum;
    
    this.init = function() {
        theta = 0.5;
        phi = 0.5;
        momentum = 0.999;
        App.Network.neurons = [];

        var alpha = 0.0;
        for (var i = 0; i < App.TSP.towns.length * 2; i++) {
            App.Network.neurons.push(new App.Network.Neuron(0.5 + 0.5 * Math.cos(alpha), 0.5 + 0.5 * Math.sin(alpha)));
            alpha += Math.PI * 2.0 / (App.TSP.towns.length * 2);
        }

        App.Controllers.CanvasController.refresh();
    };
    this.step = function() {
        var randomTownId = Math.floor(Math.random() * App.TSP.towns.length);
        var learningVector = {x: App.TSP.towns[randomTownId].x, y: App.TSP.towns[randomTownId].y};

        for (var i = 0; i < App.Network.neurons.length; i++) {
            var n = App.Network.neurons[i];
            var N = winningNeuron(learningVector);
            n.wx += (phi * neighbourhoodFunction(n, N) * (learningVector.x - n.wx));
            n.wy += (phi * neighbourhoodFunction(n, N) * (learningVector.y - n.wy));
        }

        phi *= momentum;
        theta *= momentum;
    
        App.Controllers.CanvasController.refresh();

        function neighbourhoodFunction(neuron1, neuron2) {
            return Math.exp( -1.0 * (d(neuron1, neuron2) * d(neuron1, neuron2) ) / ( 2.0 * theta * theta));
            function d(n1, n2) {
                var dx = n1.getInitialX() - n2.getInitialX();
                var dy = n1.getInitialY() - n2.getInitialY();
                return Math.sqrt(dx * dx + dy * dy);
            }
        }

        function winningNeuron(vector) {
            var winner;
            var minDist = 1;
            for (var i = 1; i < App.Network.neurons.length; i++) {
                var n = App.Network.neurons[i];
                var dist = (vector.x - n.wx) * (vector.x - n.wx) + (vector.y - n.wy) * (vector.y - n.wy);
                if( dist < minDist) {
                    minDist = dist;
                    winner = n;
                }
            }
            return n;
        }
    }
}