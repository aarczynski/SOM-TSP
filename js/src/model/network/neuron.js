App.Network.Neuron = function(x, y) {
    var x = x;
    var y = y;
    var wx = Math.random();
    var wy = Math.random();

    return {
        getInitialX: function() { return x; },
        getInitialY: function() { return y; },
        wx: wx,
        wy: wy
    }
}

