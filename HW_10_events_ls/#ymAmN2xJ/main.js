let f1 = document.forms.f1;
let div = document.createElement("div")
document.body.appendChild(div)


f1.onsubmit = function (ev) {
    ev.preventDefault()
    let user = {name: this.name.value, surname: this.surname.value, age: this.age.value};
    console.log(user)
    div.innerText = user.name + ' ' + user.surname + ' ' + user.age;
};
