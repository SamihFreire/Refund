//Seleciona os elementos do formulário
const amount = document.getElementById("amount");

//Monitorando a mudança do input
amount.oninput = () => {
    //Capturando as letras com regex e substituindo por vazio
    //Assim adicinando apenas números
    let value = amount.value.replace(/\D/g, "");

    // Transforma o valor em centavos (exemplo: 150/100 = 1.5 -> Equivalente a R$ 1,50)
    value = Number(value) / 100;

    //Atualiza o valor do input
    amount.value = formatCurrencyBRL(value);
}

function formatCurrencyBRL(value) {
    // Formatando o valor no padrão BRL (Real Brasileiro)
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    // Retorna o valor formatado
    return value;
}