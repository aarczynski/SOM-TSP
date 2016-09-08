App.Views.GUIView = {
    getTheta: function() {
        return parseFloat('0.' + $('#inTheta').val());
    },
    getPhi: function() {
        return parseFloat('0.' + $('#inPhi').val());
    },
    getMomentum: function() {
        return parseFloat('0.' + $('#inMomentum').val());
    }
}