var timer = (function(){
    var counter = 0;
    var _tick = function(limit){
        if(counter == limit){
            console.log('limit reached');
        }
        else
        setInterval(incrementCounter,1000);
        };
        var incrementCounter = function(){
            counter++;
            console.log(counter)
        };
        return{
            tick: _tick
        };
}())
function start(limit){
    timer.tick(limit);
}
console.log(start(14));