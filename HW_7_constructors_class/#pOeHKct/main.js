function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user = new User(1, 'vasia', 'sds', 'njnjn@jnjj', '+380665622456');

let users = [
    new User(1, 'vasia', 'sds', 'njnjn@jnjj', '+380665622456'),
    new User(2, 'olia', 'jjnjn', 'jnjnj@njjjj', '+329556269595'),
    new User(3, 'kolia', 'juts', 'jnjh@hfha', '+5846262688626'),
    new User(4, 'petia', 'jnjus', 'jgyg@gsesw', '+358451886158'),
    new User(5, 'valia', 'jnjus', 'jgyg@gsesw', '+358451886158'),
    new User(6, 'natalia', 'jnjus', 'jgyg@gsesw', '+358451886158'),
    new User(7, 'oleg', 'jnjus', 'jgyg@gsesw', '+358451886158'),
    new User(8, 'max', 'jnjus', 'jgyg@gsesw', '+358451886158'),
    new User(9, 'roma', 'jnjus', 'jgyg@gsesw', '+358451886158'),
    new User(10, 'max', 'jnjus', 'jgyg@gsesw', '+358451886158')
];
console.log(users);

console.log(users.sort((b, a) => {
    return a.id - b.id
}));