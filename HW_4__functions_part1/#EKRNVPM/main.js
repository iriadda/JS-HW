function sum(arr){
    let result = 0;
    for (const item of arr) {
        result = result + item;
    }
    return result;
}

console.log(sum([1, 2, 10]));