//Seleciona os elementos do formulário
const amount = document.getElementById("amount");

//Monitorando a mudança do input
amount.oninput = () => {
    //Capturando as letras com regex e substituindo por vazio
    //Assim adicinando apenas números
    let value = amount.value.replace(/\D/g, "");

    amount.value = value;
}