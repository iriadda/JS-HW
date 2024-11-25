// робила сама лише копію і її перевірку, передачу ф-ції - по розбору Сергія


// function clone(obj) {
//     if (obj) {
//         let functions = [];
//         for (const key in obj) {
//             if (typeof obj[key] === 'function'){
//                 let funcCopy = obj[key].bind({});
//                 functions.push({funcCopy, key});
//             }
//
//         }
//         let jsonCopy = JSON.parse(JSON.stringify(obj));
//         for (const func of functions) {
//             jsonCopy[func.key] = func.funcCopy;
//         }
//         return jsonCopy
//     }
// }
//
// console.log(clone({id: 1, name: 'olia', func1() {}, func2(){}}));

let cloneCreating = function (entity) {
    // перевіряємо наш об'єкт
    if (entity) {
        // створюємо копію без функції
        let copy = JSON.parse(JSON.stringify(entity));
        // дістаємо з об'єкту ключі
        for (let key in entity) {
            // якщо ключ об'єкт і його ключ це функція
            if (typeof entity[key] === `function`) {
                // у змінну copy з ключом передаємо копію(bind) функції і її ключ
                copy[key] = entity[key].bind();
            }
        }
        // повертаємо змінну copy у якій глибока копія і функції
        return copy;
    } else {
        console.log(`Сталася якась помилка. Потрібно викликати підмогу`);
    }
}