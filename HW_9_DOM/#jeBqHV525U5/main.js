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
    let block = document.createElement("div")
    block.classList.add('wrap');
    block.innerText = `${courseElement.title} ${courseElement.monthDuration}`
    wrapper.append(block);
}