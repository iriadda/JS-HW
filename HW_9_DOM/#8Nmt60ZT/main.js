
let div = document.createElement("div");
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
// div.style.width = '200px';
// div.style.height = '200px';
// div.style.background = 'gold';
document.body.appendChild(div);
let divClone = div.cloneNode(true)
document.body.appendChild(divClone);

