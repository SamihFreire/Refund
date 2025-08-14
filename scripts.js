//Seleciona os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

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

// Captura o evento de submit do formulário para obter os valores.
form.onsubmit = (event) => {
    // Previne o comportamento padrão de recarregar a página
    event.preventDefault(); 

    // Cria um objeto com os detalhes da nova despesa.
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        catogory_id: category.value,
        category_name: category.options[category.selectedIndex].text, // Obtem a categoria selecionada
        amount: amount.value,
        created_at: new Date(),
    }
    // Chama a função que irá adicionar o item na lista.
    expenseAdd(newExpense);
}

function expenseAdd(newExpense) {
    try {
        // Cria o elemento de li para adicionar o item (li) na lista (ul).
        const expenseItem = document.createElement("li");
        expenseItem.classList.add("expense");

    } catch (error) {
        alert("Não foi possível atualizar a lista de despesas.");
    }
}