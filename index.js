function receivesAFunction(callback){
    let name = "John"
    return callback(name)
}
receivesAFunction(function(name){ `My name is ${name}`});

function returnsANamedFunction(){
    return function nameFunction(){
        "How are you"
    }
}


function returnsAnAnonymousFunction(){
    return function(){
        "hello Guys"
    }

}
returnsAnAnonymousFunction();