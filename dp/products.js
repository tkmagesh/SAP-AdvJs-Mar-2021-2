var products = [
	{id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'},
	{id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary'},
	{id : 3, name : 'Len', cost : 60, units : 60, category : 'grocery'},
	{id : 5, name : 'Zen', cost : 30, units : 30, category : 'grocery'},
	{id : 1, name : 'Ken', cost : 20, units : 80, category : 'utencil'},
    {id : 7, name : 'Mouse', cost : 100, units : 20, category : 'electronics'}
];

/* 
1. sort
2. filter
3. groupBy
*/

function describe(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}

describe('Default List', function(){
    console.table(products);
});

describe('Sort', function(){
    describe('Products By Id', function(){
        function sortProductsById(){
            for(var i=0; i<products.length-1; i++)
                for(var j=i+1; j<products.length; j++)
                    if (products[i].id > products[j].id){
                        var temp = products[i];
                        products[i] = products[j];
                        products[j] = temp;
                    }
        }
        sortProductsById()
        console.table(products);
    });

     describe('Any list by any attribute', function(){
        function sort(list, attrName){
            for(var i=0; i<list.length-1; i++)
                for(var j=i+1; j<list.length; j++)
                    if (list[i][attrName] > list[j][attrName]){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
        }
        describe('Products by cost', function(){
            sort(products, 'cost');
            console.table(products);
        });
    });

    describe('Any list by any comparer', function(){
        function sort(list, comparerFn){
            for(var i=0; i<list.length-1; i++)
                for(var j=i+1; j<list.length; j++)
                    if (comparerFn(list[i], list[j]) > 0 ){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
        }
        describe('Products by value [cost * units]', function(){
            var productComparerByValue = function(p1, p2){
                var p1Value = p1.cost * p1.units,
                    p2Value = p2.cost * p2.units;
                if (p1Value < p2Value) return -1;
                if (p1Value > p2Value) return 1;
                return 0;
            }
            sort(products, productComparerByValue);
            console.table(products);
        })
    })

    describe('Any list by attrName/comparer', function(){
        function sort(list, comparer){
            var comparerFn;
            if (typeof comparer === 'function'){
                comparerFn = comparer;
            }
            if (typeof comparer === 'string'){
                comparerFn = function(p1, p2){
                    if (p1[comparer] < p2[comparer]) return -1;
                    if (p1[comparer] > p2[comparer]) return +1;
                    return 0;
                }
            }
            if (typeof comparerFn !== 'function') return;
            for(var i=0; i<list.length-1; i++)
                for(var j=i+1; j<list.length; j++)
                    if (comparerFn(list[i], list[j]) > 0 ){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
        }

        describe('products by units', function(){
            sort(products, 'units');
            console.table(products);
        })

        describe('products by category length', function(){
            var comparerProductsByCategoryLength = function(p1, p2){
                if (p1.category.length < p2.category.length) return -1;
                if (p1.category.length > p2.category.length) return 1;
                return 0;
            }
            sort(products, comparerProductsByCategoryLength);
            console.table(products);
        })
    })

});

describe('Filter', function(){
    describe('filter stationary products', function(){
        function filterStationaryProducts(){
            var result = [];
            for(var i = 0; i < products.length; i++)
                if (products[i].category === 'stationary') 
                    result.push(products[i]);
            return result;
        }
        var stationaryProducts = filterStationaryProducts();
        console.table(stationaryProducts);
    });
    describe('filter any list by any criteria', function(){
        function filter(list, predicate){
            var result = [];
            for(var i = 0; i < list.length; i++)
                if (predicate(list[i])) 
                    result.push(list[i]);
            return result;
        }
        describe('filter costly products [cost > 50]', function(){
            var costlyProductPredicate = function(p){
                return p.cost > 50;
            };
            var costlyProducts = filter(products, costlyProductPredicate);
            console.table(costlyProducts);
        });

        describe('filter affordable products', function(){

        })

        describe('filter understocked products [units < 50]', function(){
            var understockedProductPredicate = function(p){
                return p.units < 50;
            };
            var underStockedProducts = filter(products, understockedProductPredicate);
            console.table(underStockedProducts);
        })

        describe('filter well stocked products', function(){

        })
    })
});