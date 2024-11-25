
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


let curPage = 1;
const items = 10;

function displayObj(page) {
    wrapper.innerText = '';
    let start = (page - 1) * items;
    let end = start + items;
    let pageObj = array.slice(start, end)

    pageObj.forEach(obj => {
        let div = document.createElement("div")
            div.innerText = obj.name;
            wrapper.append(div)
    });

   prev.disabled = (page === 1);
    next.disabled = (end >= array.length);

    prev.addEventListener('click', ()=>{
        if (curPage > 1){
            curPage--;
            displayObj(curPage)
        }
    })
    next.addEventListener('click', ()=>{
        if (curPage * items <array.length){
            curPage++;
            displayObj(curPage)
        }

    })
}

displayObj(curPage);







