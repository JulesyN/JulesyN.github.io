let total = 0;

function addMoney(identity) {
    if (document.getElementById(identity).checked) {
        total = total + parseFloat(document.getElementById(identity).value);
    }
    else {
        total = total - parseFloat(document.getElementById(identity).value);
    }
    total = Math.round(total * 100) / 100;
    document.getElementById("price").innerHTML = "Total Price: $" + total;
}