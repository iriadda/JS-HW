
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

const reduce = cards.reduce((accum, card) => {
       switch (card.suit){
           case "heart":
               accum.hearts.push(card)
               break;
           case "spade":
               accum.spades.push(card)
               break;
           case 'diamond':
               accum.diamonds.push(card)
               break;
           case 'clubs':
               accum.clubs.push(card)
               break
       }

        return accum
    },
    {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    });
console.log(reduce);