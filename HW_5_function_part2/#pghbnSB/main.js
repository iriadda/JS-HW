let arrayMin = (numbers) => {

    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number
        }
    }
    return min;
}
console.log(arrayMin([56, - 5, 456, 54, 12, 78]));
