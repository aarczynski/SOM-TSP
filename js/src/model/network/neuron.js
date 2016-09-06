App.Network.Neuron = function(_x, _y) {
    var x = _x;
    var y = _y;
    var wx = Math.random();
    var wy = Math.random();

    return {
        getWX: function() { return wx; },
        getWY: function() { return wy; },
        getX: function() { return x; },
        getY: function() { return y; },
        setX: function(x) { x = x; },
        setY: function(y) { y = y; },
        dist: function(other) {
            var dx = x - other.getX();
            var dy = y - other.getY();
            return Math.sqrt(dx * dx + dy * dy);
        }
    }
}

