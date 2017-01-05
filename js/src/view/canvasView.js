App.Views.CanvasView = {
    getCanvas: function() {
        return $('#tspCanvas');
    },
    getCanvasRect: function() {
        return this.getCanvas()[0].getBoundingClientRect();
    },
    clearCanvas: function() {
        var ctx = this.getCanvas()[0].getContext("2d");
        ctx.clearRect(0, 0, this.getCanvasRect().width, this.getCanvasRect().height);
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
        this.clearCanvas();

        var rect = App.Views.CanvasView.getCanvasRect();
        towns.forEach(function (t) {
            App.Views.CanvasView.drawPoint(t.x * rect.height, t.y * rect.width);
        });
        for (var i = 0; i < neurons.length; i++) {
            var x1 = rect.width * App.Network.neurons[i].wx;
            var y1 = rect.height * App.Network.neurons[i].wy;
            var x2 = rect.width * App.Network.neurons[(i + 1) % App.Network.neurons.length].wx;
            var y2 = rect.height * App.Network.neurons[(i + 1) % App.Network.neurons.length].wy;
            App.Views.CanvasView.drawLine({x: x1, y: y1}, {x: x2, y: y2});
            App.Views.CanvasView.drawPoint(x1, y1, '#FF2222', 3);
        }
    }
}