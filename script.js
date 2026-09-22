

let precoProduto = 0;


let adicionais = [];
let valorAdicionais = 0;






function irParaEtapa2() {

    

    produtosEscolhidos = [];
    quantidade = 0;

    let classico = document.getElementById("classico");
    let bacon = document.getElementById("bacon");
    let frango = document.getElementById("frango");

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
    
    let tempo = distancia / 3;

    document.getElementById("resultadoTempo").innerText =
     
   tempo.toFixed(2).replace(".", ":")+ " Hrs"; 
}
