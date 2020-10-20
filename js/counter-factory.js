module.exports.create = function(){
    var _counter = 1;
    return {
        step: function(){
                return _counter++;
        }
    }
}