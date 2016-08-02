function remoteMathService(cb) {

var one;

var two;

callOneService(function(err, num) {

one = num;

});

callTwoService(function(err, num) {

two = num;

});
    
        
return cb(undefined, one + two);
    

}


function callOneService(cb) {

cb(undefined, 1);

}

function callTwoService(cb) {

cb(undefined, 2);

}
