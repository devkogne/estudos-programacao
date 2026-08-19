const movimentacoes = [];

const descricao = document.getElementById("descricao");
const valor = document.getElementById("valor");
const botaoEntrada = document.getElementById("entrada");
const botaoSaida = document.getElementById("saida");
const listaMovimentacoes = document.getElementById("lista-movimentacoes");
const saldo = document.getElementById("saldo");

function atualizarSaldo() {
    let total = 0;

    for (const movimentacao of movimentacoes) {
        if (movimentacao.tipo === "entrada") {
            total += movimentacao.valor;
        } else {
            total -= movimentacao.valor;
        }
    }

    saldo.textContent = `R$ ${total.toFixed(2)}`;
}

botaoEntrada.addEventListener("click", function () {
    const novaMovimentacao = {
        descricao: descricao.value,
        valor: Number(valor.value),
        tipo: "entrada"
    };

    movimentacoes.push(novaMovimentacao);

    const item = document.createElement("li");

    item.textContent = `${novaMovimentacao.descricao} - R$ ${novaMovimentacao.valor.toFixed(2)}`;

    listaMovimentacoes.appendChild(item);

    atualizarSaldo();
});

botaoSaida.addEventListener("click", function () {
    const novaMovimentacao = {
        descricao: descricao.value,
        valor: Number(valor.value),
        tipo: "saida"
    };

    movimentacoes.push(novaMovimentacao);

    const item = document.createElement("li");

    item.textContent = `${novaMovimentacao.descricao} - R$ ${novaMovimentacao.valor.toFixed(2)}`;

    listaMovimentacoes.appendChild(item);

    atualizarSaldo();
});