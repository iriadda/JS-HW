function sortNums(array, direction){
    if (direction === 'ascending'){ return array.sort((a, b) => a - b);}
    if (direction === 'descending'){ return array.sort((a, b) => b - a);}
}

let nums = [11,21,3];

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));