let f1 = document.forms.f1;
let h1 = document.createElement("h1")
document.body.append(h1)


f1.onsubmit = function (ev) {
    ev.preventDefault()
    // console.log(this.age.value);
    if (this.age.value < 17 && this.age.value >0) {
        h1.innerText = 'Ваш вік менший 18';
    } else if (this.age.value > 18 && this.age.value < 90) {
        h1.innerText = 'Ваш вік більше 18';
    } else {
        h1.innerText = `не коректно введений вік`
    }
}