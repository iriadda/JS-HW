let array = [6262, -6656, 'hello', 'world', true];
let filterArray = (array) => {
    document.write(`<ul>`)
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
     document.write(`</ul>`)
}
filterArray([6262, -6656, 'hello', 'world', true])
