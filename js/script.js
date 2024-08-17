function gerar() {
    var iptQtd = parseInt(document.getElementById("iptQtd").value);
    var bttGerar = document.getElementById("bttGerar");
    var bttApagar = document.getElementById("bttApagar");

    bttGerar.disabled = true;
    bttApagar.disabled = false;

    const divArtur = document.createElement("div");
    divArtur.setAttribute("id","divDeMsg");

    for(k=0; k < iptQtd; k++) {
        const spn = document.createElement("span");
        spn.setAttribute("class","msg");
        spn.innerHTML = "SALVE MARIA!";
        divArtur.appendChild(spn);
    }

    // Criar Botões

    const bttTest = document.createElement("button");
    bttTest.setAttribute("type", "button");
    bttTest.setAttribute("class", "bttTest");
    bttTest.innerHTML = "Jesus é bom";
    

    bttTest.addEventListener("mouseover", exibirMensagem);
    bttTest.addEventListener("mouseout", exibirMensagemOut);

    divArtur.appendChild(bttTest);
    document.querySelector("body").appendChild(divArtur);
}

function exibirMensagem() {
    const spen = document.createElement("span");
    spen.setAttribute("class","msgOver");
    spen.innerHTML = "E o diabo não presta";
    document.getElementById("divDeMsg").appendChild(spen);
}

function exibirMensagemOut() {
    const spxn = document.createElement("span");
    spxn.setAttribute("class","msgOut");
    spxn.innerHTML = "E o diabo não presta";
    document.getElementById("divDeMsg").appendChild(spxn);
}