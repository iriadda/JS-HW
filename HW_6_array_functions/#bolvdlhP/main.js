
const suits = ['spade', 'diamond','heart', 'clubs']
const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
const cards =[]
for (const suit of suits) {
    for (const value of values) {
        const card ={suit: suit, value: value}
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red'
        }else {
            card.color = 'black'
        }
        cards.push(card)
    }
}
console.log(cards)

console.log(cards.find(card => card.value === 'ace' && card.suit === 'spade'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.suit === 'diamond'));
console.log(cards.filter(card => card.suit === 'clubs' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));
