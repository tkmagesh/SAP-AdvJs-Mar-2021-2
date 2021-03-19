
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