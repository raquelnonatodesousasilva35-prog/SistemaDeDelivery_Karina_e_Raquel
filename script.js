

let precoProduto = 0;


let adicionais = [];
let valorAdicionais = 0;






function irParaEtapa2() {

    

    produtosEscolhidos = [];
    quantidade = 0;

    let classico = document.getElementById("classico");
    let bacon = document.getElementById("bacon");
    let frango = document.getElementById("frango");
    let coca = document.getElementById("coca");
    let fanta = document.getElementById("fanta");
    let suco =document.getElementById("suco");

    if (classico.checked) {

        let qtd = Number(
            document.getElementById("quantidadeClassico").value
        );

        produtosEscolhidos.push({
            nome: "Hambúrguer Clássico",
            preco: 22,
            quantidade: qtd
        });

        quantidade += qtd;
    }

    if (bacon.checked) {

        let qtd = Number(
            document.getElementById("quantidadeBacon").value
        );

        produtosEscolhidos.push({
            nome: "Hambúrguer Bacon",
            preco: 27,
            quantidade: qtd
        });

        quantidade += qtd;
    }

    if (frango.checked) {

        let qtd = Number(
            document.getElementById("quantidadeFrango").value
        );

        produtosEscolhidos.push({
            nome: "Hambúrguer Frango",
            preco: 24,
            quantidade: qtd
        });

        quantidade += qtd;
    }

    if (produtosEscolhidos.length === 0) {
        alert("Escolha pelo menos um hambúrguer.");
        return;
    }

    document.getElementById("etapa1").style.display = "none";
    document.getElementById("etapa2").style.display = "block";

    if (coca.checked) {

        let qtd = Number(
            document.getElementById("quantidadeCoca").value
        );

        produtosEscolhidos.push({
            nome: "Coca Cola",
            preco: 2,
            quantidade: qtd
        });

        quantidade += qtd;
    }

    if (fanta.checked) {

        let qtd = Number(
            document.getElementById("quantidadeFanta").value
        );

        produtosEscolhidos.push({
            nome: "Fanta",
            preco: 4,
            quantidade: qtd
        });

        quantidade += qtd;
    }

    if (suco.checked) {

        let qtd = Number(
            document.getElementById("quantidadeSuco").value
        );

        produtosEscolhidos.push({
            nome: "Suco",
            preco: 3,
            quantidade: qtd
        });

        quantidade += qtd;
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

    let subtotal = 0;

    let textoProdutos = "";

    produtosEscolhidos.forEach(function(produto) {

        subtotal += produto.preco * produto.quantidade;

        textoProdutos +=
            produto.quantidade + "x " +
            produto.nome + "<br>";

    });


    let total = subtotal + valorAdicionais;


    document.getElementById("resumoProduto").innerHTML =
        textoProdutos;


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


   


    document.getElementById("resumoTotal").innerText =
        "R$ " + total.toFixed(2).replace(".", ",");
}



function irParaEtapa4() {

    
    let subtotal = 0;

    produtosEscolhidos.forEach(function(produto) {

        subtotal += produto.preco * produto.quantidade;

    });

    let total = subtotal + valorAdicionais;   

    
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

let custo_fixo = 10;
let taxa_km = 0.2;

function calcularTaxaEntrega(){
    let distancia = Number(
    document.getElementById("distancia").value
);
    if(distancia == 0){
    document.getElementById("resultadoTaxa").innerText=
    "Informe uma distancia válida";
    return;
    }
    
    let taxa = custo_fixo + (distancia*taxa_km);

    document.getElementById("resultadoTaxa").innerText =
    "R$ " + taxa.toFixed(2).replace(".", ",");
    
    let tempo = 0.3 + (distancia / 3) / 60;

    document.getElementById("resultadoTempo").innerText =
     
   tempo.toFixed(2).replace(".", ":"); 
}

function mostrarMaisSolicitado() {

    let produto = document.getElementById("produtoPesquisa").value;

    if (produto === "") {
        document.getElementById("resultadoProduto").innerText =
            "Selecione um produto";

        return;
    }


    if (produto === "hamburguer") {
        document.getElementById("resultadoProduto").style.display = "block";
        document.getElementById("resultadoBebidas").style.display = "none";
    }

    if (produto === "bebida") {
        document.getElementById("resultadoProduto").style.display = "none";
        document.getElementById("resultadoBebidas").style.display = "block";
    }

     if (produto === "adicionais") {
        document.getElementById("resultadoBebidas").style.display = "none";
        document.getElementById("resultadoAdicionais").style.display = "block";
    }
   
  
}