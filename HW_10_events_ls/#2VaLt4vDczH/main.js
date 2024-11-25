let div = document.getElementById(`nums`)


let currentNum = +localStorage.getItem('number');
currentNum += 1;
localStorage.setItem('number', currentNum)
div.innerText = currentNum;