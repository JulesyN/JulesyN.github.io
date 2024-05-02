var total = 0.00;

function addMoney(identity) {
    if (document.getElementById(identity).checked) {
        document.getElementById(identity).value += total;
    }
    else {
        document.getElementById(identity).value -= total;
    }
}