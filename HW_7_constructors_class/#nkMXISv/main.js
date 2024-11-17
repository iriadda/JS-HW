class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients= [
    new Client(1, 'vasia', 'siava', 'hchvj@hbhb', '+354562628', {title: 'toy', price: '123'}),
    new Client(2, 'vasia', 'siava', 'hchvj@hbhb', '+354562628', {title: 'toy', price: '123'}),
    new Client(3, 'vasia', 'siava', 'hchvj@hbhb', '+354562628', {title: 'toy', price: '123'}),
    new Client(4, 'vasia', 'siava', 'hchvj@hbhb', '+354562628', {title: 'toy', price: '123'}),
    new Client(5, 'vasia', 'siava', 'hchvj@hbhb', '+354562628', {title: 'toy', price: '123'}),
    new Client(6, 'vasia', 'siava', 'hchvj@hbhb', '+354562628', {title: 'toy', price: '123'}),
    new Client(7, 'vasia', 'siava', 'hchvj@hbhb', '+354562628', {title: 'toy', price: '123'}),
    new Client(8, 'vasia', 'siava', 'hchvj@hbhb', '+354562628', {title: 'toy', price: '123'}),
    new Client(9, 'vasia', 'siava', 'hchvj@hbhb', '+354562628', {title: 'toy', price: '123'}),
    new Client(10, 'vasia', 'siava', 'hchvj@hbhb', '+354562628', {title: 'toy', price: '123'})
    ]
console.log(clients);