// const add = (num1, num2) => num1 + num2;

// function add (num1, num2){
//     return num1 + num2;
// }

let val1 = 0;
let val2 = 0;
let oper = "";

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;


function operate (operator, num1, num2){
    let result = 0;
    if (operator == 'add'){

        oper = 'add';
        result = add(num1, num2);

        // console.log(result);
        // return result;
    }

    else if (operator == 'subtract'){
        result = subtract(num1, num2);
        
    }

    else if (operator == 'multiply'){
        result = multiply(num1, num2);
    }

    else if (operator == 'divide'){
        result = divide(num1, num2);
    }
    return result;
    // document.getElementById("input").value = result;
    // else if (operator == '-'){
    //     subtract(num1, num2);
    // }
}


// let displayVal = document.getElementById("input").value

function numbers(num){

    let displayVal = num;
    document.getElementById("input").value += num;
}

function clearInput(){
    document.getElementById("input").value = '';
}

function storeNum1(){
    val1 = Number(document.querySelector("input").value);
    console.log(val1);
    // document.querySelector("input").value = '';
    
}

function storeNum2(){
    // let hiddenDisplay = document.querySelector("input").value 
    
    val2 = document.querySelector("input").value;
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
    document.querySelector("input").value = '';

}

function subButton(){
    oper = 'subtract';
    document.querySelector("input").value = '';
}

function multButton(){
    oper = 'multiply';
    document.querySelector("input").value = '';
}

function divButton(){
    oper = 'divide';
    document.querySelector("input").value = '';
}

function equal(){
    val2 = Number(document.querySelector("input").value);
    console.log(oper);
    console.log(val1);
    console.log(val2);

    document.querySelector("input").value = operate(oper, val1, val2);
   
}

// console.log(operate('add',34,21));

