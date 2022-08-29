// const add = (num1, num2) => num1 + num2;

// function add (num1, num2){
//     return num1 + num2;
// }

let val1 = 0;
let val2 = 0;
let oper = "";
let operBool = false;
let displayVal = '';

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;


function operate (operator, num1, num2){
    let result = 0;
    if (operator == 'add'){
        operBool = true;    
        oper = 'add';
        result = add(num1, num2);

        // console.log(result);
        // return result;
    }

    else if (operator == 'subtract'){
        operBool = true;
        result = subtract(num1, num2);
        
    }

    else if (operator == 'multiply'){
        operBool = true;
        result = multiply(num1, num2);
    }

    else if (operator == 'divide'){
        if(num2 == 0){
            return "...is that a black hole?!"
        }
        operBool = true;
        result = divide(num1, num2).toFixed(3);
    }

    document.getElementById("display").textContent += result;
   
    return result;
    
    // else if (operator == '-'){
    //     subtract(num1, num2);
    // }
}





function numbers(num){

    document.getElementById("display").textContent += num;
    document.getElementById("input").value += num;
}

function clearInput(){
    document.getElementById("input").value = '';
    document.getElementById("display").textContent = "";
    va11 = 0;
    val2 = 0;
    oper = '';
    operBool = false;
    console.log(val1);
    console.log(val2);
}

function storeNum1(){
    val1 = Number(document.querySelector("input").value);
    console.log(val1);
    // displayVal += num;
    // document.querySelector("input").value = '';
    
}

function storeNum2(){
    // let hiddenDisplay = document.querySelector("input").value 
    
    val2 = Number(document.querySelector("input").value);
    // console.log(val1);
    console.log(val2);
}

function storeOper(){
    oper = document.querySelector("input").value.toString();
    console.log(oper);
    document.querySelector("input").value = '';
}

function addButton(){
    // val1 = document.querySelector("input".value);
    oper = 'add';
    operBool = true;
    document.getElementById("display").textContent += " + ";
    document.querySelector("input").value = '';
    

}

function subButton(){
    oper = 'subtract';
    operBool = true;
    document.getElementById("display").textContent += " - ";
    document.querySelector("input").value = '';
}

function multButton(){
    oper = 'multiply';
    operBool = true;
    document.getElementById("display").textContent += " * ";
    document.querySelector("input").value = '';
}

function divButton(){
    oper = 'divide';
    operBool = true;
    document.getElementById("display").textContent += " / ";
    document.querySelector("input").value = '';
}

function equal(){
    if(operBool == false){
        val1, val2 = 0;
        document.getElementById("display").textContent = "Please clear and try again with valid values.";
    }

    else if (val1 == 0 && val2 == 0){
        val1, val2 = 0;
        return document.getElementById("display").textContent = "Please clear and enter values with an operator :)";
    }
    val2 = Number(document.querySelector("input").value);
    console.log(oper);
    console.log(val1);
    console.log(val2);
    // document.getElementById("input").value = 0;
    document.getElementById("display").textContent += " = "
    document.querySelector("input").value = operate(oper, val1, val2);
    
}

// console.log(operate('add',34,21));

