
let arr = ['Main','Products','About us','Contacts']
let allArray = document.getElementsByClassName('array')[0]
for (const item of arr) {
    let li = document.createElement("li")
    li.innerText = item;
    allArray.appendChild(li);

}
