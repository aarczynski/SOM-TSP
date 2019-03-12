App.Views.GUIView = {
    getTheta: function() {
        return parseFloat('0.' + $('#thetaInput').val());
    },
    getPhi: function() {
        return parseFloat('0.' + $('#phiInput').val());
    },
    getMomentum: function() {
        return parseFloat('0.' + $('#momentumInput').val());
    },
    setTheta: function(t) {
        $('#thetaInput').val(t);
    },
    setPhi: function(p) {
        $('#phiInput').val(p);
    },
    setMomentum: function(m) {
        $('#momentumInput').val(m);
    },
    enableGui: function() {
        $('#thetaInput').prop('disabled', false);
        $('#phiInput').prop('disabled', false);
        $('#momentumInput').prop('disabled', false);
        $('#sampleSelect').prop('disabled', false);
        $('#clearButton').prop('disabled', false);
        $('#startButton').text('START');
    },
    disableGui: function() {
        $('#thetaInput').prop('disabled', true);
        $('#phiInput').prop('disabled', true);
        $('#momentumInput').prop('disabled', true);
        $('#sampleSelect').prop('disabled', true);
        $('#clearButton').prop('disabled', true);
        $('#startButton').text('STOP');
    },
    enableStartButton: function() {
        $('#startButton').prop('disabled', false);
    },
    disableStartButton: function() {
        $('#startButton').prop('disabled', true);
    },
    resetSampleSelect: function() {
        $('#sampleSelect option').each(function() {
            $(this).prop('selected', false);
        })
        $('#sampleSelect :first-child').prop('selected', true);
    }
}