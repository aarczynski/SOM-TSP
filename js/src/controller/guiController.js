App.Controllers.GUIController = {
    registerStartListener: function () {
        var kohonenNetwork = new App.Network.SOM();

        window.main = function () {
            window.requestAnimationFrame(main);
            kohonenNetwork.step();
        };

        $('#start').click(function() {
            kohonenNetwork.init();
            main();
        });
    }
}

$(document).ready(function() {
    App.Controllers.GUIController.registerStartListener();
});