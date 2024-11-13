let printerArray = (array) => {
    for (const user of array) {
        document.write(`<div><h3>${user.id} ${user.name}</h3> <p>${user.age}</p></div>`);
    }
}



printerArray (users = [
    {
        id: 1,
        name: "Oleg",
        age: 31
    },
    {
        id: 2,
        name: "Vasia",
        age: 29
    },
    {
        id: 3,
        name: "Olia",
        age: 30,
    },
])
