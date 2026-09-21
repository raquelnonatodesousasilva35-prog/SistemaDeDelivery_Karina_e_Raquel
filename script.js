
let produtoEscolhido = "";
let precoProduto = 0;
let quantidade = 1;

let adicionais = [];
let valorAdicionais = 0;

let taxaEntrega = 5;




function irParaEtapa2() {

    
    let produto = document.querySelector('input[name="produto"]:checked');

    
    if (produto == null) {
        alert("Escolha um produto antes de continuar.");
        return;
    }

    
    produtoEscolhido = produto.dataset.nome;
    precoProduto = Number(produto.value);

    
    quantidade = Number(document.getElementById("quantidade").value);

    
    if (quantidade < 1) {
        alert("Informe uma quantidade válida.");
        return;
    }

    
    document.getElementById("etapa1").style.display = "none";

    
    document.getElementById("etapa2").style.display = "block";
}




function irParaEtapa3() {

    
    adicionais = [];
    valorAdicionais = 0;

    
    let selecionados = document.querySelectorAll(
        'input[name="adicional"]:checked'
    );

    
    selecionados.forEach(function(adicional) {

        let nome = adicional.dataset.nome;
        let preco = Number(adicional.value);

        
        adicionais.push(nome);

        
        valorAdicionais = valorAdicionais + preco;
    });

    
    mostrarResumo();

    
    document.getElementById("etapa2").style.display = "none";

    
    document.getElementById("etapa3").style.display = "block";
}




function mostrarResumo() {

    
    let subtotal = precoProduto * quantidade;

    
    let total = subtotal + valorAdicionais + taxaEntrega;

    
    document.getElementById("resumoProduto").innerText =
        quantidade + "x " + produtoEscolhido;

    
    document.getElementById("resumoSubtotal").innerText =
        "R$ " + subtotal.toFixed(2).replace(".", ",");

    
    if (adicionais.length > 0) {

        document.getElementById("resumoAdicionais").innerText =
            adicionais.join(", ");

    } else {

        document.getElementById("resumoAdicionais").innerText =
            "Nenhum adicional";
    }

    
    document.getElementById("valorAdicionais").innerText =
        "R$ " + valorAdicionais.toFixed(2).replace(".", ",");

    
    document.getElementById("resumoEntrega").innerText =
        "R$ " + taxaEntrega.toFixed(2).replace(".", ",");

    
    document.getElementById("resumoTotal").innerText =
        "R$ " + total.toFixed(2).replace(".", ",");
}




function irParaEtapa4() {

    
    let subtotal = precoProduto * quantidade;

    let total = subtotal + valorAdicionais + taxaEntrega;

    
    document.getElementById("etapa3").style.display = "none";

    
    document.getElementById("etapa4").style.display = "block";

    
    document.getElementById("resultado").innerText =
        "Total do pedido: R$ " +
        total.toFixed(2).replace(".", ",");
}




function voltarParaEtapa1() {

    document.getElementById("etapa2").style.display = "none";

    document.getElementById("etapa1").style.display = "block";
}


function voltarParaEtapa2() {

    document.getElementById("etapa3").style.display = "none";

    document.getElementById("etapa2").style.display = "block";
}


function voltarParaEtapa3() {

    document.getElementById("etapa4").style.display = "none";

    document.getElementById("etapa3").style.display = "block";
}

// desafio 2
let distancia = Number(
    document.getElementById("distancia").value
);

function calcularTaxaEntrega(){
    if(distancia = 0){
    document.getElementById("resultadoTaxa").innerText=
    "Informe uma distancia válida";
    return;
    }
    let taxa;

    if(distancia <= 3){
        taxa = 5;
    }
    if(distancia <= 6){
        taxa = 8;
    }
    if(distancia <= 3){
        taxa = 5;
    }
    if(distancia <= 3){
        taxa = 5;
    }
}
