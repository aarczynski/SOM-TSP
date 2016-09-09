App.Sample = {
    getSamples: function() {
        return [
            {
                name: "Two Circles",
                params: {
                    theta: 3,
                    phi: 9,
                    momentum: 9995
                },
                initTowns: function() {
                    var circleSize = 30;
                    var alpha = 0.0;
                    for (var i = 0; i < circleSize; i++) {
                        App.TSP.towns.push({
                            x: 0.5 + 0.45 * Math.cos(alpha),
                            y: 0.5 + 0.45 * Math.sin(alpha)
                        });
                        alpha += Math.PI * 2.0 / circleSize;
                    }
                    circleSize = 15;
                    alpha = 0;
                    for (var i = 0; i < circleSize; i++) {
                        App.TSP.towns.push({
                            x: 0.5 + 0.25 * Math.cos(alpha),
                            y: 0.5 + 0.25 * Math.sin(alpha)});
                        alpha += Math.PI * 2.0 / circleSize;
                    }
                }
            },
            {
                name: "4x4 Grid",
                params: {
                    theta: 75,
                    phi: 75,
                    momentum: 9995
                },
                initTowns: function() {
                    var gridSize = 4;
                    var space = (1/(gridSize + 1));
                    for (var i = 0; i < gridSize * gridSize; i++) {
                        App.TSP.towns.push({
                            x: space + space * (i % gridSize),
                            y: space + space * (Math.floor(i / gridSize))
                        });
                    }
                }
            },
            {
                name: "Random 50",
                params: {
                    theta: 5,
                    phi: 5,
                    momentum: 9999
                },
                initTowns: function() {
                    var size = 50;
                    for (var i = 0; i < size; i++) {
                        App.TSP.towns.push({
                            x: Math.random(),
                            y: Math.random()
                        });
                    }
                }
            }
        ];
    }
}
