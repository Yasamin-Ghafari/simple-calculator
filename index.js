
let current_input = "" ;
let current_operation = null ;
let first_number = null ;
let history_list = document.getElementById("history-list") ;
let result_div = document.getElementById("result");

function appendNumber (number){
    current_input +=number ;
    result_div.innerText = current_input ;
}
function setOperation (operation){
    if (current_input === "") return ;
    if (first_number !== null && current_operation !== null){
        calculateResult ();
    }
    first_number = parseFloat(current_input);
    current_operation = operation ;
    current_input = "";
    result_div.innerText = "";
}
function calculateResult (){
    if (first_number === null || current_operation === null || current_input === null) return ;
    let second_number = parseFloat(current_input);
    let result;


    switch (current_operation){
        case "+" :
            result = first_number + second_number ;
            break;
        case "-" :
            result = first_number - second_number ;
            break ;
        case "*" :
            result = first_number * second_number ;
            break;
        case "/" :
            if (second_number ===0 ){
                alert("Cannot divide by zero");
                   return;
            }
            result = first_number / second_number ;
            break;
    }
    result_div.innerText = result ;


    let historyitem = document.createElement("li");
    historyitem.innerText = `${first_number} ${current_operation} ${second_number} = ${result}`;
    history_list.appendChild(historyitem);

    current_input = "" ;
    current_operation = null ;
    first_number = null ;
}



function clearResult(){
    current_input = "" ;
    current_operation = null ;
    first_number = null ;
    result_div.innerText = "";
}





