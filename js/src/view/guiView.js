App.Views.GUIView = {
    getTheta: function() {
        return parseFloat('0.' + $('#inTheta').val());
    },
    getPhi: function() {
        return parseFloat('0.' + $('#inPhi').val());
    },
    getMomentum: function() {
        return parseFloat('0.' + $('#inMomentum').val());
    },
    enable: function() {
        $('#inTheta').prop('disabled', false);
        $('#inPhi').prop('disabled', false);
        $('#inMomentum').prop('disabled', false);
        $('#clear').prop('disabled', false);
        $('#start').text('START');
    },
    disable: function() {
        $('#inTheta').prop('disabled', true);
        $('#inPhi').prop('disabled', true);
        $('#inMomentum').prop('disabled', true);
        $('#clear').prop('disabled', true);
        $('#start').text('STOP');
    }
}