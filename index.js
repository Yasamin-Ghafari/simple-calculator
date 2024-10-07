// let currentInput = "";
// let currentOperation = null;
// let firstNumber = null;
// let resultDiv = document.getElementById('result');
// let historyList = document.getElementById('history-list');
//
// // اضافه کردن عدد به نمایشگر
// function appendNumber(number) {
//     currentInput += number;
//     resultDiv.innerText = currentInput;
// }
//
// // تنظیم عملگر
// function setOperation(operation) {
//     if (currentInput === "") return; // جلوگیری از انتخاب عملگر بدون عدد
//     if (firstNumber !== null && currentOperation !== null) {
//         calculateResult(); // محاسبه نتیجه قبلی
//     }
//     firstNumber = parseFloat(currentInput);
//     currentOperation = operation;
//     currentInput = "";
//     resultDiv.innerText = "";
// }
//
// // محاسبه نتیجه
// function calculateResult() {
//     if (currentInput === "" || firstNumber === null || currentOperation === null) return;
//     let secondNumber = parseFloat(currentInput);
//     let result;
//
//     switch (currentOperation) {
//         case '+':
//             result = firstNumber + secondNumber;
//             break;
//         case '-':
//             result = firstNumber - secondNumber;
//             break;
//         case '*':
//             result = firstNumber * secondNumber;
//             break;
//         case '/':
//             if (secondNumber === 0) {
//                 alert("Cannot divide by zero");
//                 return;
//             }
//             result = firstNumber / secondNumber;
//             break;
//     }
//
//     // نمایش نتیجه
//     resultDiv.innerText = result;
//
//     // افزودن نتیجه به تاریخچه
//     let historyItem = document.createElement('li');
//     historyItem.innerText = `${firstNumber} ${currentOperation} ${secondNumber} = ${result}`;
//     historyList.appendChild(historyItem);
//
//     // ریست کردن مقادیر
//     currentInput = "";
//     firstNumber = null;
//     currentOperation = null;
// }
//
// // پاک کردن نمایشگر
// function clearResult() {
//     currentInput = "";
//     firstNumber = null;
//     currentOperation = null;
//     resultDiv.innerText = "";
// }














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





