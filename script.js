var newLine = true;
var val1;
var tempoperator;

function pressedButton(button){
    var currentvalue = document.getElementById("input").value;
    document.getElementById("input").value = currentvalue + button;

    if(newLine){
        document.getElementById("input").value = button
        newLine = false
    }

    else{
        var currentvalue = document.getElementById("inpuut").value;
        document.getElementById("input").value = currentvalue + button
    }
}

function ACButton(){
    document.getElementById("input").value = 0;
    newLine = true;
}

function operatorButton(operator){
    tempoperator = operator;
    val1 = parseInt(document.getElementById("input").value);
    newLine = true;
}

function equalButton(){
    var val2 = parseInt(document.getElementById("input").value);
    var total;

    switch(tempoperator){
        case "+":
            total = val1 + val2;
            break;
        case "-":
            total = val1 - val2;
            break;
        case "/":
            total = val1 / val2;
            break;
        case "x":
            total = val1 * val2;
            break;
        
    }
    document.getElementById("input").value = total;

    val1 = 0;
    newLine = true;
}