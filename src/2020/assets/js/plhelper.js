var avar;

function plstart() {
    avar = setTimeout(plfinish, 1000);
}

function plfinish() {
    document.getElementById("loader").style="display:none";
}