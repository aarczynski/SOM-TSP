App.Network.neurons = [];
App.Network.SOM = function() {
    var theta;
    var phi;
    var momentum;
    var iterations;
    var isLearningFinished;
    
    this.init = function(params) {
        isLearningFinished = false;
        theta = params.theta;
        phi = params.phi;
        momentum = params.momentum;
        App.Network.neurons = [];
        iterations = 0

        var alpha = 0.0;
        for (var i = 0; i < App.TSP.towns.length * 2; i++) {
            App.Network.neurons.push(new App.Network.Neuron(0.5 + 0.5 * Math.cos(alpha), 0.5 + 0.5 * Math.sin(alpha)));
            alpha += Math.PI * 2.0 / (App.TSP.towns.length * 2);
        }
    };
    this.step = function() {
        var randomTownId = Math.floor(Math.random() * App.TSP.towns.length);
        var learningVector = {x: App.TSP.towns[randomTownId].x, y: App.TSP.towns[randomTownId].y};
        isLearningFinished = true;

        for (var i = 0; i < App.Network.neurons.length; i++) {
            var n = App.Network.neurons[i];
            var N = winningNeuron(learningVector);
            var neighbourHood = neighbourhoodFunction(n, N);
            n.wx += (phi * neighbourHood * (learningVector.x - n.wx));
            n.wy += (phi * neighbourHood * (learningVector.y - n.wy));
            if (neighbourHood !== 1 && neighbourHood > 0) {
                isLearningFinished = false;
            }
        }

        phi *= momentum;
        theta *= momentum;
        iterations++;

        function neighbourhoodFunction(neuron1, neuron2) {
            return Math.exp( -1.0 * (d(neuron1, neuron2) * d(neuron1, neuron2) ) / ( 2.0 * theta * theta));
            function d(n1, n2) {
                var dx = n1.getInitialX() - n2.getInitialX();
                var dy = n1.getInitialY() - n2.getInitialY();
                return Math.sqrt(dx * dx + dy * dy);
            }
        }

        function winningNeuron(vector) {
            var winner = App.Network.neurons[0];
            var minDist = (vector.x - App.Network.neurons[0].wx) * (vector.x - App.Network.neurons[0].wx) + (vector.y - App.Network.neurons[0].wy) * (vector.y - App.Network.neurons[0].wy);;
            for (var i = 1; i < App.Network.neurons.length; i++) {
                var n = App.Network.neurons[i];
                var dist = (vector.x - n.wx) * (vector.x - n.wx) + (vector.y - n.wy) * (vector.y - n.wy);
                if( dist < minDist) {
                    minDist = dist;
                    winner = n;
                }
            }

            return winner;
        }
    },
    this.getIterations = function() {
        return iterations;
    };
    this.getSolutionDistance = function() {
        var dist = 0;
        var rect = App.Controllers.CanvasController.getCanvasRect();
        for (var i = 0; i < App.Network.neurons.length; i++) {
            var x1 = rect.width * App.Network.neurons[i].wx;
            var y1 = rect.height * App.Network.neurons[i].wy;
            var x2 = rect.width * App.Network.neurons[(i + 1) % App.Network.neurons.length].wx;
            var y2 = rect.height * App.Network.neurons[(i + 1) % App.Network.neurons.length].wy;
            dist += Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        }
        return Math.floor(dist);
    },
    this.isLearningFinished = function() {
        return isLearningFinished;
    }
}