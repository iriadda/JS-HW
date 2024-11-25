let wrapper = document.getElementsByClassName('wrapper')[0];

let block1 = document.createElement("div")
let block2 = document.createElement("div")
let block3 = document.createElement("div")
block1.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur deserunt dolor dolore, doloremque
        ducimus et harum hic illo incidunt maiores nobis odio optio quia recusandae reiciendis similique sunt
        tempora.`
block2.innerText = `Alias blanditiis delectus distinctio, illo illum laborum, minima modi nam nemo officia perferendis quae quibusdam
    quos reiciendis suscipit. Aspernatur commodi consequatur cum debitis doloremque earum perferendis quas recusandae
    rerum voluptatibus?`
block3.innerText = `Dignissimos laudantium magni quibusdam vero? A aliquid aperiam assumenda aut dolorum ea eos explicabo minus nisi,
    nobis numquam obcaecati officiis placeat quo repellat sapiente sint soluta temporibus? Animi, quam, vero!`

wrapper.append(block1, block2, block3);