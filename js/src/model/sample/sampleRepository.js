App.Sample = {
    getSamples: function() {
        return [
            {
                name: "2 Circles",
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
                            x: 0.5 + 0.15 * Math.cos(alpha),
                            y: 0.5 + 0.15 * Math.sin(alpha)});
                        alpha += Math.PI * 2.0 / circleSize;
                    }
                }
            },
            {
                name: "3 Circles",
                params: {
                    theta: 5,
                    phi: 8,
                    momentum: 9999
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
                    circleSize = 20;
                    alpha = 0;
                    for (var i = 0; i < circleSize; i++) {
                        App.TSP.towns.push({
                            x: 0.5 + 0.30 * Math.cos(alpha),
                            y: 0.5 + 0.30 * Math.sin(alpha)});
                        alpha += Math.PI * 2.0 / circleSize;
                    }
                    circleSize = 15;
                    alpha = 0;
                    for (var i = 0; i < circleSize; i++) {
                        App.TSP.towns.push({
                            x: 0.5 + 0.15 * Math.cos(alpha),
                            y: 0.5 + 0.15 * Math.sin(alpha)});
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
                name: "4x4 Diagonal Grid",
                params: {
                    theta: 7,
                    phi: 99,
                    momentum: 9997
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
                    gridSize--;
                    for (var i = 0; i < gridSize * gridSize; i++) {
                        App.TSP.towns.push({
                            x: 1.5 * space + space * (i % gridSize),
                            y: 1.5 * space + space * (Math.floor(i / gridSize))
                        });
                    }
                }
            },
            {
                name: "5x5 Grid",
                params: {
                    theta: 95,
                    phi: 8,
                    momentum: 9999
                },
                initTowns: function () {
                    var gridSize = 5;
                    var space = (1 / (gridSize + 1));
                    for (var i = 0; i < gridSize * gridSize; i++) {
                        App.TSP.towns.push({
                            x: space + space * (i % gridSize),
                            y: space + space * (Math.floor(i / gridSize))
                        });
                    }
                }
            },
            {
                name: "5x5 Diagonal Grid",
                params: {
                    theta: 5,
                    phi: 85,
                    momentum: 9998
                },
                initTowns: function() {
                    var gridSize = 5;
                    var space = (1/(gridSize + 1));
                    for (var i = 0; i < gridSize * gridSize; i++) {
                        App.TSP.towns.push({
                            x: space + space * (i % gridSize),
                            y: space + space * (Math.floor(i / gridSize))
                        });
                    }
                    gridSize--;
                    for (var i = 0; i < gridSize * gridSize; i++) {
                        App.TSP.towns.push({
                            x: 1.5 * space + space * (i % gridSize),
                            y: 1.5 * space + space * (Math.floor(i / gridSize))
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
};
