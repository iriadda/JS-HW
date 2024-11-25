let table = document.getElementById('table');
let f1 = document.forms.form;

f1.onsubmit = function (ev) {
    ev.preventDefault()
    let rows = +this.rows.value;
    let columns = +this.columns.value;
    let text = this.text.value;

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');

        table.append(tr);

        for (let i = 0; i < columns; i++) {
            let td = document.createElement('td');
            td.innerText = text;
            tr.append(td);
        }
    }
}