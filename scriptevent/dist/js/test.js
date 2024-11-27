var group = new Map();
var tableBoody = document.getElementById("tableBoody");

function add() {
    let modelValue = document.getElementById("model").value;
    let colorValue = document.getElementById("color").value;
    let priceValue = document.getElementById("price").value;

    let d = {
        model: modelValue,
        color: colorValue,
        price: priceValue
    };
   
    group.set(++group.size, d);
    tableBoody.innerHTML = "";
    for (const d of group) {

        tableBoody.innerHTML += "<tr><td>" + d[0] + "</td><td>" +
            d[1].model +
            "</td><td>" + d[1].color +
            "</td><td>" + d[1].price + "</td></tr>";
    }
}
