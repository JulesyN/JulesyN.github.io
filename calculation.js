var total = 0.00;

function addMoney(identity) {
    if (document.getElementById(identity).checked) {
        total = total + document.getElementById(identity).value;
    }
    else {
        total = total - document.getElementById(identity).value;
    }
    document.getElementById("price").value = "Total Price: $" + total;
}