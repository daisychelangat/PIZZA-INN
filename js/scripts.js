var total,crust_cost,size_cost;

function getCostPerSize() {
    var selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
}

function getCostPerCrust() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getQuantity() {
    var selectedNumber = document.getElementById("pizzaquantity").value;
    return parseInt(selectedNumber);
}
function getType() {
    var selectedType = document.getElementById("type").value;
    return parseInt(selectedType);
}
function toppingss() {
    var mushroom = 0;
    var addMushroom = document.getElementById("tops");
    if (addMushroom.checked === true) {
        mushroom = 150;
    }
    return parseInt(mushroom);
}