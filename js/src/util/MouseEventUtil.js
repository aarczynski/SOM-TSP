App.Util.Mouse = {
    getRelativeClickPosition: function(e, objId) {
        var rect = $('#' + objId)[0].getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }
};
