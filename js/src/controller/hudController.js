App.Controllers.HUDController = {
    refresh: function() {
        App.Views.HUDView.repaint(App.main.getIterations());
    }
}