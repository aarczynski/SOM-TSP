App.Views.HUDView = {
    getCanvas: function() {
        return $('#hudCanvas');
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
    repaint: function(iterations, distance) {
        this.clearCanvas();
        
        var s = "itrations: ".concat(iterations);
        this.drawText(s, 100, 25);
        
        s = "distance: ".concat(formatNumber(distance)).concat("px");
        this.drawText(s, 300, 25);

        function formatNumber(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
        }
    }
}