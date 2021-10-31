var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");


function clickNoProjetos(){
    console.log("Clicou em projetos!");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre(){
    texto2.style.display = "none";
    texto1.style.display = "block";
}