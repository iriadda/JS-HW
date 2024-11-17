function Cinderella(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
}

function Prince(name, age, shoe) {
    this.name = name;
    this.age = age;
    this.shoe = shoe;
}

let cinderellas = [
    new Cinderella('olia', 20, 37),
    new Cinderella('katia', 22, 38),
    new Cinderella('vira', 21, 38),
    new Cinderella('rita', 24, 40),
    new Cinderella('yulia', 23, 39),
    new Cinderella('natalia', 25, 37),
    new Cinderella('mira', 24, 40),
    new Cinderella('vika', 19, 37),
    new Cinderella('lena', 23, 37),
    new Cinderella('vasia', 30, 46),
];
let prince = new Prince('Oleh', 30, 39);

for (const cinderella of cinderellas) {
    if (cinderella.size === prince.shoe) {
        Prince.wife = cinderella
        console.log(`я знайшов свою наречену ${cinderella.name}`)
    }
}


console.log(cinderellas.find(value => value.size === prince.shoe));