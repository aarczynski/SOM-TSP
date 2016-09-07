App.Network.Neuron = function(x, y) {
    var x = x;
    var y = y;
    var wx = Math.random();
    var wy = Math.random();

    return {
        getWX: function() { return wx; },
        getWY: function() { return wy; },
        getX: function() { return x; },
        getY: function() { return y; },
        setX: function(_x) { x = _x; },
        setY: function(_y) { y = _y; },
        dist: function(other) {
            var dx = x - other.getX();
            var dy = y - other.getY();
            return Math.sqrt(dx * dx + dy * dy);
        }
    }
}

