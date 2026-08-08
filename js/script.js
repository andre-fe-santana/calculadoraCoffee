function calculate() {
    //form data
    let personQty = Number(document.getElementById('personQty').value)
    let budget = parseFloat(document.getElementById('coffeeBudget').value)
    let priority = document.querySelector('input[name="coffeePriority"]:checked').value;
    const budgetPerPerson = budget / personQty;
    const minimumPerPerson = 516/15 // Lowest cost by 15 people having the cheapest option of coffee, which is Petit - Type A

    // error Message
    let errorQty = document.querySelector('#errorQty');
    let errorBudget = document.querySelector('#errorBudget');

    // return container

    let returnDiv = document.querySelector('.form-return');
    let coffeeType = document.querySelector('#coffeeType');
    let totalCost = document.querySelector('#totalCost');
    let individualCost = document.querySelector('#individualCost');


    console.log(`Qtd de Pessoas: ${personQty} (${typeof (personQty)}) | Orçamento: R$${budget} (${typeof (budget)}) | Prioridade: ${priority} (${typeof(priority)})`);    
    console.log(`Orçamento por Pessoa: R$${budgetPerPerson}`)

    if (personQty < 15) {

        returnDiv.style.display = "none";
        errorQty.style.display = "flex";
        console.log("ERRO! Número de pessoas abaixo do mínimo");
        errorQty.textContent = "Utilize 15 pessoas no mínimo";

    } else {
    
        console.log(`Mínimo necessário (por pessoa): R$${minimumPerPerson}`)

        if (budgetPerPerson < minimumPerPerson) {

            returnDiv.style.display = "none"; 
            errorBudget.style.display = "flex";
            console.log(`Custo Mínimo: ${minimumPerPerson}`);
            errorBudget.textContent = `Para ${personQty} pessoas, o orçamento mínimo é de R$${(minimumPerPerson * personQty).toFixed(2)}`;
            console.log("Passei pelo IF de checagem mínima");
            
        } else {

            errorBudget.style.display = "none"; // removes the error label
            errorQty.style.display = "none"; // removes the error label
            returnDiv.style.display = "flex"; //  displays the response container

            // HIGH PRIORITY
            if (priority == "High") {

                minimumCategory = 55
                minimumNecessary = Math.ceil(minimumCategory - budgetPerPerson) * personQty

                if (budgetPerPerson < minimumCategory) {

                    console.log("VALOR INSUFICIENTE - PRIORIDADE ALTA")
                    coffeeType.textContent = `Valor Insuficiente!`;
                    totalCost.textContent = `Orçamento mínimo de R$ ${minimumNecessary+budget} para ter um Coffee mais completo`
                    // console.log(`Adicione mais R$ ${minimumNecessary} no orçamento para ter o Coffee Necessário`)

                }

                else {
                
                    if (budgetPerPerson >= 65) {

                        coffeeType.textContent = "Normal - Tipo C"

                    }

                    else if (budgetPerPerson >= 58 && budgetPerPerson < 65) {

                        coffeeType.textContent = "Normal - Tipo B"

                    }

                    else if (budgetPerPerson < 58) {

                        coffeeType.textContent = "Normal - Tipo A"

                    }

                    totalCost.textContent = `Orçamento: R$ ${budget}`;
                    individualCost.textContent = `(R$ ${Math.ceil(budget / personQty)} / disponível por pessoa)`;

                }
            }

            // MID PRIORITY
            else if (priority == 'Mid') {

                minimumCategory = 41 // Petit - Type C
                minimumNecessary = Math.ceil(minimumCategory - budgetPerPerson) * personQty

                if (budgetPerPerson < minimumCategory) {

                    console.log("VALOR INSUFICIENTE - PRIORIDADE MÉDIA")
                    coffeeType.textContent = "Valor Insuficiente!";
                    totalCost.textContent = `Orçamento mínimo de R$ ${minimumNecessary+budget} para ter um Coffee mais completo`
                    console.log(`Adicione mais R$ ${minimumNecessary} para ter um Coffee mais completo`)

                } else {

                    if (budgetPerPerson >= 58) {

                        coffeeType.textContent = "Normal - Tipo B"

                    }


                    if (budgetPerPerson >= 41 && budgetPerPerson < 58) {

                        coffeeType.textContent = "Normal - Tipo A";

                    }

                    else if (budgetPerPerson < 41) {

                        coffeeType.textContent = "Petit - Tipo C";

                    }

                    totalCost.textContent = `Orçamento: R$ ${budget}`;
                    individualCost.textContent = `(R$ ${Math.ceil(budget / personQty)} / disponível por pessoa)`;

                }

            }

            // LOW PRIORITY
            else if (priority == "Low") {
                
                minimumCategory = 29.70 // Petit Type A

                if (budgetPerPerson < minimumCategory) {

                    console.log("VALOR INSUFICIENTE - PRIORIDADE BAIXA")
                    coffeeType.textContent = "Valor Insuficiente!";
                    totalCost.textContent = `Orçamento mínimo de R$ ${minimumNecessary+budget} para ter um Coffee mais completo`
                    console.log(`Adicione mais R$ ${minimumNecessary} para ter um Coffee mais completo`)

                } else {

                    if (budgetPerPerson > 41) {

                        coffeeType.textContent = "Petit - Tipo C";

                    }

                    else if (budgetPerPerson >= 36 && budgetPerPerson < 41) {

                        coffeeType.textContent = "Petit - Tipo B";

                    }
                    
                    else if (budgetPerPerson >= 35 && budgetPerPerson < 36) {

                        coffeeType.textContent = "Petit - Tipo D";

                    }

                    else if (budgetPerPerson < 35) {
                        coffeeType.textContent = "Petit - Tipo A";

                    }

                    totalCost.textContent = `Orçamento: R$ ${budget}`;
                    individualCost.textContent = `(R$ ${Math.ceil(budget / personQty)} / disponível por pessoa)`;

                }

            }

        }

    }
}