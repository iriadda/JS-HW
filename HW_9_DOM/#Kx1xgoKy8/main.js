let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

let wrapper = document.getElementsByClassName('wrapper')[0];
for (const courseElement of coursesAndDurationArray) {
    let item = document.createElement("div")
    item.classList.add('item');
    let h2= document.createElement("h2")
    h2.classList.add('heading')
    let p = document.createElement("p")
    p.classList.add('description')
    h2.innerText = courseElement.title;
    p.innerText = courseElement.monthDuration;
    wrapper.append(item);
    item.append(h2, p);
}