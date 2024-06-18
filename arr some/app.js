const SomeDairy = [
    'Milk', 'Cheese', 'Cream',
]

function mySome (el, searchValue) {
    for (let i = 0; i < el.length; i++){
       if (searchValue(el[i], i, searchValue)) return true;
    }
    return false;
}

mySome([1,2,3], function(n){
    return n > 2;
}) 


function myEvery (el, searchValue) {
    for (let i = 0; i < el.length; i++){
       if (!searchValue(el[i], i, searchValue)) return false;
    }
    return true;
}

myEvery([5,4,3], function(num) {
    return num > 2;
})