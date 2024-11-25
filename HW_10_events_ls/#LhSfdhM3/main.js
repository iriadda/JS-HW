let sessionsList

if (localStorage.getItem('sessionsList')) {
    sessionsList = JSON.parse(localStorage.getItem('sessionsList'))
} else {
    sessionsList = [];
}
sessionsList.push(new Date())
localStorage.setItem(`sessionsList`, JSON.stringify(sessionsList))
