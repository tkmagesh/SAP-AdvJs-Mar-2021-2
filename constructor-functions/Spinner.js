
/* 
+ privacy
- inefficient memory usage 
*/
function Spinner(){
    var counter = 0;
    this.up = function(){
        return ++counter;
    };
    this.down = function(){
        return --counter;
    };
} 

/* 
+ efficient memory usage
- lack of privacy
*/
function Spinner(){
    this._$counter$_ = 0;
} 
Spinner.prototype.up = function(){
    return ++this._$counter$_;
};
Spinner.prototype.down = function(){
    return --this._$counter$_;
};

//Using Symbol
let Spinner = function(){
    let counterSymbol = Symbol();

    function Spinner(){
        this[counterSymbol] = 0;
    } 

    Spinner.prototype.up = function(){
        return ++this[counterSymbol];
    };
    Spinner.prototype.down = function(){
        return --this[counterSymbol];
    };
    return Spinner;
}();