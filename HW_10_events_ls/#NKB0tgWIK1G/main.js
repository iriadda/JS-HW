let wrapper = document.getElementById(`wrapper`);
let prev = document.getElementById(`prev`);
let next = document.getElementById(`next`);


// робимо масив на 100 елементів
let array = [];
for (let i = 0; i < 100; i++) {
    let obj = {
        id: i + 1,
        name: `${i + 1}`
    };
    array.push(obj)
}
console.log(array);
let counter = 0
let limit = 10;
next.addEventListener(`click`, function () {
    wrapper.innerText = ' '
    for (let i = counter; i < limit; i++) {
        let div = document.createElement('div')
        div.innerText = array[i].name;
        wrapper.append(div)
    }
    counter += 10;
    limit += 10;
});

prev.addEventListener(`click`, function () {
    counter -= 10;
    limit -= 10;
    wrapper.innerText = ' '
    for (let i = counter; i < limit; i++) {
        let div = document.createElement('div')
        div.innerText = array[i].name;
        wrapper.append(div)
    }

})

