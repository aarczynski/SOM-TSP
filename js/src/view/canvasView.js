App.Views = {
    CanvasView: {
        getCanvas: function() {
            return $('#tsp');
        },
        drawPoint: function(x, y) {
            var canvas = $('#tsp');
            canvas.drawArc({
                strokeStyle: '#FFD900',
                strokeWidth: 1,
                fillStyle: '#E6D873',
                x: x,
                y: y,
                radius: 5,
                start: 0,
                end: 360
            });
        },
    }
}