function filterArray (array){
    for (const item of array) {
        document.write(`<ul>
            <li>${item}</li>
        </ul>`)
    }
}

let array = [6262, -6656, 'hello', 'world', true];
filterArray(array)