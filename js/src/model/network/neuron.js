App.Network = {
    Neuron: function(_x, _y) {
        var x = _x;
        var y = _y;
        var wx = Math.floor(Math.random() * 2);
        var wy = Math.floor(Math.random() * 2);

        return {
            getX: function() { return x; },
            getY: function() { return y; },
            setX: function(x) { x = x; },
            setY: function(y) { y = y; },
            dist: function(other) {
                dx = x - other.getX();
                dy = y - other.getY();
                return Math.sqrt(dx * dx + dy * dy);
            }
        }
    }
}
