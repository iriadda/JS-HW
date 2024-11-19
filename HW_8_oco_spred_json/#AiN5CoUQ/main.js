// робила сама лише копію і її перевірку, передачу ф-ції - по розбору Сергія


function clone(obj) {
    if (obj) {
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function'){
                let funcCopy = obj[key].bind({});
                functions.push({funcCopy, key});
            }

        }
        let jsonCopy = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            jsonCopy[func.key] = func.funcCopy;
        }
        return jsonCopy
    }
}

console.log(clone({id: 1, name: 'olia', func1() {}, func2(){}}));

