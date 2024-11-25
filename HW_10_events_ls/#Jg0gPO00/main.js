let input = document.getElementById('kg');
let res = document.getElementById(`result`)

// input.oninput = function () {
//     const kg = +this.value;
//     let result = kg * 2.2;
//     res.innerText = result;
// }

input.oninput = function () {
    res.innerText = +this.value * 2.2;
};