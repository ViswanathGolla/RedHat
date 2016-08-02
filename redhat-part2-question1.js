function foo(callback) {   

doThing(function(err, res) {

if (err) callback(err);
    
if(res) callback(null, res);

});

}

/*
    Added below method to check above foo function callbacks are getting called properly rather multiple times.
*/
function doThing(func)
{
    try{
        console.log("doThing is called");
        func(null,"The work completed successfully");       
        throw "Something happend error message";
    }catch(err)
    {
        func(err);
    }
}

