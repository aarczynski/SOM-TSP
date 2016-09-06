App.Views = {
    CanvasView: {
        getCanvas: function() {
            return $('#tsp');
        },
        drawPoint: function(x, y, colour, radius) {
            this.getCanvas().drawArc({
                strokeStyle: colour || '#E6D873',
                strokeWidth: 1,
                fillStyle: colour || '#E6D873',
                x: x,
                y: y,
                radius: radius || 5,
                start: 0,
                end: 360
            });
        },
        drawLine: function(p1, p2, colour, width) {
            this.getCanvas().drawLine({
                strokeStyle: colour || '#DEDEDE',
                strokeWidth: width || 4,
                x1: p1.x, y1: p1.y,
                x2: p2.x, y2: p2.y
            });
        },
        repaint: function(towns, neurons) {
            this.getCanvas().clearCanvas();
            var rect = App.Views.CanvasView.getCanvas()[0].getBoundingClientRect();
            towns.forEach(function(t) {
                App.Views.CanvasView.drawPoint(t.x * rect.height, t.y * rect.width);
            });
            for (var i = 0; i < App.Network.neurons.length; i++) {
                var x1 = rect.width * App.Network.neurons[i].getWX();
                var y1 = rect.height * App.Network.neurons[i].getWY();
                var x2 = rect.width * App.Network.neurons[(i + 1) % App.Network.neurons.length].getWX();
                var y2 = rect.height * App.Network.neurons[(i + 1) % App.Network.neurons.length].getWY();
                App.Views.CanvasView.drawLine({x: x1, y: y1}, {x: x2, y: y2});
                App.Views.CanvasView.drawPoint(x1, y1, '#FF2222', 3);
            };
        }
    }
}