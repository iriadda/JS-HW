
// function addToLocalStorage(arrayName,objToAdd) {
//     // дістаємо з локал сторедж ключ (arrayName) у форматі стрінги!!!!
//     let lsItem = localStorage.getItem(arrayName);
//     // перетворюємо зі стрінги на масив
//     const array = JSON.parse(lsItem);
//     // перевірка!
//     if (typeof objToAdd === `object`) {
//         // пушимо в масив об'єкт, який треба додати
//         array.push(objToAdd);
//     }
//     // перетворюємо на cтрінгу
//     let arrayJson = JSON.stringify(array);
//     // додаємо в локал сторидж
//     localStorage.setItem(arrayName, arrayJson)
//
// }
// addToLocalStorage("sessionsList", {})


function addToLocalStorage(arrayName, objToAdd) {
    const array = JSON.parse(localStorage.getItem(arrayName));
    if (typeof objToAdd === `object`) {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array))
}

addToLocalStorage("sessionsList", {})