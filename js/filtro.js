function filtroCatalogo(selector, catalogo) {
    var checkBox = document.getElementById(selector);
    var text = document.getElementById(catalogo);
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function filtroCatalogo1(selector, catalogo) {
    var text = document.getElementById("subcategorias").getElementsByClassName("carroceriasub")[0];

    // var text = t.id("carroceria");
    var checkBox = document.getElementById(selector);


    if (checkBox.checked == true) {

        text.style.display = "block";
    } else {

        text.style.display = "none";
    }
}

var expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

function mostrarEmail() {
    alert("mail");
}



/* $(document).ready(function() {
    $('.subcc').selectpicker();
}) */