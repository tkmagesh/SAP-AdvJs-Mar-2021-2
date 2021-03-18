var spinner = (function(){
    var counter = 0;

    function up(){
        return ++counter;
    }

    function down(){
        return --counter;
    }
    return {
        up : up,
        down : down
    }
})()

function spinnerFactory(){
    var counter = 0;

    function up(){
        return ++counter;
    }

    function down(){
        return --counter;
    }
    return {
        up : up,
        down : down
    }
}

var s1 = spinnerFactory();
var s2 = spinnerFactory();

/* 


//up, down - methods

spinner.up() //=> 1
spinner.up() //=> 2
spinner.up() //=> 3
spinner.up() //=> 4

spinner.down() //=> 3
spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1

IMPORTANT
    the outcome of up() and down() methods SHOULD NOT BE able to be influenced from outside


spinner.count = 10000
spinner.up() 

count = 10000
spinner.up() */