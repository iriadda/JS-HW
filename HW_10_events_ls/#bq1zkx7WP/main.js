let div = document.getElementById(`nums`)

// // якщо в нема в локал сторедж ключа number
// if (!localStorage.getItem('number')){
//     // cтворили змінну яка дор 100
//     let startNum = 100;
//     // закинули в локал сторидж число 100 з ключем number
//     localStorage.setItem('number', startNum);
//     // виводимо число 100
//     div.innerText = startNum + ' ' + `ua`;
// // якщо в локал сторидж є значення number, то виводимо його
// }else {
//     div.innerText = localStorage.getItem('number') + ' ' + `ua`;
// }
//
// // створюємо змінну тайм, присвоюючи їй значення часу відвідин сторінки
// let time = new Date().getTime();
// // заливаємо час з ключем початкового часу, як початкова точка відліку, тут час перезаписується щоб сожна було порівняти
// localStorage.setItem('startTime', time);
//
// // якщо не отримуємо з локал сторидж збережений час, то записуємо наш початковий час(точка відліку)
// if (!localStorage.getItem('savedTime')) {
//     localStorage.setItem('savedTime', time);
// }
// // витягуємо збережений час (точку відліку)
// let savedTime = localStorage.getItem('savedTime');
// // якщо різниця початкового часу і збереженого часу більша 10000мс 10с
// if (time - savedTime >=10000) {
//     // то до витягнутого number додаємо 10
//     let newValue = +localStorage.getItem('number') + 10;
//     // записуємо його і оновлюємо значення часу
//     localStorage.setItem('number', newValue);
//     localStorage.setItem('savedTime', time);
//     div.innerText = localStorage.getItem('number') + ' ' + `ua`;
// }

if (!localStorage.getItem('number')){
    let startNum = 100;
    localStorage.setItem('number', startNum);
    div.innerText = startNum + ' ' + `ua`;
}else {
    div.innerText = localStorage.getItem('number') + ' ' + `ua`;
}

let time = new Date().getTime();
localStorage.setItem('startTime', time);

if (!localStorage.getItem(`savedTime`)) {
    localStorage.setItem('savedTime', time);
}

let savedTime = +localStorage.getItem('savedTime');
if (time - savedTime  >= 10000) {
    let newValue = +localStorage.getItem('number') + 10;
    localStorage.setItem('number', newValue);
    localStorage.setItem('savedTime', time);
    div.innerText = startNum + ' ' + `ua`;
}