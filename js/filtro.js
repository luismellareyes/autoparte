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
    var text = document.getElementById("subcategorias").getElementsByClassName(catalogo)[0];
    var checkBox = document.getElementById(selector);
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function changeFunc() {
    reiniciarSub();
    reiniciarSubSub();
    document.getElementById('subc').value = "0";
    document.getElementById('ssubc').value = "0";
    var selectBox = document.getElementById("cat");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    var text = document.getElementById("subcategorias").getElementsByClassName(selectedValue)[0];
    text.style.display = "block";
}

function changeFuncSub() {
    reiniciarSubSub();
    var selectBox = document.getElementById("subc");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    document.getElementById('ssubc').value = "0";
    var text = document.getElementById("subsubcategoria").getElementsByClassName(selectedValue)[0];
    text.style.display = "block";
}

function reiniciarSub() {
    var listSub = ['carroceriasub', 'correassub', 'frenossub', 'partidasub', 'refrigeracionsub', 'rodamientossub', 'sensoressub', 'suspensionsub', 'electricosub'];
    listSub.forEach(noneSub);
}

function noneSub(value, index, array) {
    var text = document.getElementById("subcategorias").getElementsByClassName(value)[0];
    text.style.display = "none";
}

function reiniciarSubSub() {
    var listSubSub = ['amortiguadoresdeportalonssub', 'capotssub', 'costadosssub', 'espejoretrovisorinteriorssub', 'focosssub', 'gomasssub', 'guardafangosssub', 'maletassub', 'mascarassub', 'mensulasssub', 'moldurasbiselssub', 'molduraspasaruedasssub', 'molduraspuertasssub', 'moldurasvidriosssub', 'neblinerosssub', 'opticosssub', 'parachoquesssub', 'portalonssub', 'puertasssub', 'reflectoresssub', 'retrovisoresssub', 'tapadebencinassub', 'tapabarrossub', 'vidriosssub', 'correadeaireacondicionadossub', 'correadealternadorssub', 'correadebombadeaguassub', 'correadedireccionasistidassub', 'correadeventilacionssub', 'rodamientodecorreasauxiliarssub', 'balatasdefrenosssub', 'bombadefrenossub', 'chavetasssub', 'cilindrosdefrenosssub', 'discosdefrenosssub', 'flexiblesdefrenosssub', 'gomadecilindrotipoarossub', 'gomadecilindrotipotazassub', 'guardapolvosdecilindrodefrenossub', 'kitdefrenosdediscossub', 'kitdelatasparapastillasssub', 'kitdereparacionbombadefrenossub', 'kitdereparacionparacaliperssub', 'kitderesortesdefrenossub', 'pastillasdefrenossub', 'sangradodefrenosssub', 'segurosdebalatasssub', 'tamboresdefrenosssub', 'alternadorssub', 'bendixssub', 'carbonesdealternadorssub', 'carbonesdemotordepartidassub', 'motordepartidassub', 'placadediodosorectificadorassub', 'portacarbonesdealternadorssub', 'portacarbonesmotordepartidassub', 'reguladordevoltajessub', 'rodamientodealternadorssub', 'solenoidessub', 'abrazaderasssub', 'bombadeaguassub', 'cuerpocentrifugossub', 'depositoauxiliarderadiadorssub', 'electroventiladorssub', 'mangueraderadiadorssub', 'radiadordemotorssub', 'switchdeelectroventiladorssub', 'tapaderadiadorssub', 'tapadetermostatossub', 'termostatossub', 'tubosdeaguassub', 'valvuladecalefaccionssub', 'mazassub', 'retenderuedassub', 'rodamientoderuedassub', 'bulbodepresiondeaceitessub', 'bulbodetemperaturadelaguassub', 'relayssub', 'relayflasherssub', 'sensordeangulo(captador)ssub', 'sensordeoxigenossub', 'sensordepocisiondecigüeñalssub', 'sensormapssub', 'sensortemp.delaireadmisionssub', 'sensortpsssub', 'sesordeposiciondelevassub', 'switchdefrenosssub', 'switchdemarchaatrasssub', 'switchdepuertassub', 'telecomandodelucesssub', 'valvulaiacssub', 'amortiguadordedireccionssub', 'amortiguadoresssub', 'articulaciondecremallerassub', 'bandejasdesuspencionssub', 'barracentralssub', 'bieletadebarraestabilizadorassub', 'brazoauxiliarssub', 'brazopitmanssub', 'bujedebrazoauxiliarssub', 'bujedepaquetederesortesssub', 'bujeparabandejasesuspensionssub', 'bujeparabarraestabilizadorassub', 'bujeparabarratensorassub', 'cazoletasssub', 'columnadedireccionssub', 'cremalleradedireccionssub', 'fuellesdecremallerasssub', 'rotulassub', 'terminalaxialy/ointeriorssub', 'terminaldedireccionssub', 'antenassub', 'bocinassub'];
    listSubSub.forEach(noneSubSub);
}

function noneSubSub(value, index, array) {
    var text = document.getElementById("subsubcategoria").getElementsByClassName(value)[0];
    text.style.display = "none";
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