App.Views.HUDView = {
    getCanvas: function() {
        return $('#hud');
    },
    getCanvasRect: function() {
        return this.getCanvas()[0].getBoundingClientRect();
    },
    clearCanvas: function() {
        var ctx = this.getCanvas()[0].getContext("2d");
        ctx.clearRect(0, 0, this.getCanvasRect().width, this.getCanvasRect().height);
    },
    drawText: function(text, x, y, colour) {
        this.getCanvas().drawText({
            fillStyle: colour || '#FFFFFF',
            strokeStyle: colour || '#FFFFFF',
            strokeWidth: 1,
            x: x, y: y,
            fontSize: 14,
            fontFamily: 'Verdana, sans-serif',
            text: text
        });
    },
    repaint: function(iterations) {
        this.clearCanvas();
        var s = "itrations: ".concat(iterations);
        this.drawText(s, 100, 20);

    }
}