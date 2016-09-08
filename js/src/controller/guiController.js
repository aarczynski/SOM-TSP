App.Controllers.GUIController = {
    registerStartListener: function () {
        $('#start').click(function() {
            App.main.init(getInitParams());
            update();

            function update() {
                for (var i = 0; i < 50; i++) {App.main.step();}
                App.Controllers.HUDController.refresh();
                App.Controllers.CanvasController.refresh();
                requestAnimationFrame(update);
            }
        });
        
        function getInitParams() {
            var params = {
                theta: App.Views.GUIView.getTheta(),
                phi: App.Views.GUIView.getPhi(),
                momentum: App.Views.GUIView.getMomentum()
            };
            return params;
        }
    }
}

$(document).ready(function() {
    App.Controllers.GUIController.registerStartListener();
});