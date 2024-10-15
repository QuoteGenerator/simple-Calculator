document.addEventListener("DOMContentLoaded", function() {
    let calculation = document.getElementById("outputbar");
    let pressedEnter = false;
    let pressedChange = false;
    let calculationPart ="";
    let numberArray = [];
    let result = 0;

    function handleStrings(input){
        switch(input){
            case "one":
                    calculation.textContent += "1";
                    calculationPart += "1";
                break;
            case "two":
                    calculation.textContent += "2";
                    calculationPart += "2";
                break;
            case "three":
                    calculation.textContent += "3";
                    calculationPart += "3";
                break;
            case "four":
                    calculation.textContent += "4";
                    calculationPart += "4";
                break;
            case "five":
                    calculation.textContent += "5";
                    calculationPart += "5";
                break;
            case "six":
                    calculation.textContent += "6";
                    calculationPart += "6";
                break;
            case "seven":
                    calculation.textContent += "7";
                    calculationPart += "7";
                break;
            case "eight":
                    calculation.textContent += "8";
                    calculationPart += "8";
                break;
            case "nine":
                    calculation.textContent += "9";
                    calculationPart += "9";
                break;
            case "zero":
                    calculation.textContent += "0";
                    calculationPart += "0";
                break;
            case "dot":
                    calculation.textContent += ".";
                    calculationPart += ".";
                break;

            case "plus":
                    calculation.textContent += "+";
                    calculationPart += "+";
                break;
            case "minus":
                    calculation.textContent += "-";
                    calculationPart += "-";
                break;   
            case "divide":
                    calculation.textContent += "/";
                    calculationPart += "/";
                break;     
            case "multiply":
                    calculation.textContent += "*";
                    calculationPart += "*";
                break;
                
            case "submitButton":
                    pressedEnter = true;
                    for(let i=0; i<numberArray.length;i++){
                        if(numberArray[i].includes("+")){
                            result = 0;
                            result += parseFloat(numberArray[i].slice(0,-1));
                        }
                        if(numberArray[i].includes("-")){
                            let result = 0;
                            result -= parseFloat(numberArray[i].slice(0,-1));
                        }
                        if(numberArray[i].includes("*")){
                            let result = 0;
                            result *= parseFloat(numberArray[i].slice(0,-1));
                        }
                        if(numberArray[i].includes("/")){
                            let result = 0;
                            result /= parseFloat(numberArray[i].slice(0,-1));
                        }
                    }
                    console.log(result);
                    calculation.textContent = result;
                    result = 0;
                break;            
            case "deleteButton":
                if(calculation.textContent != "0"){
                    calculation.textContent = "0";
                }
            break;
        }
    }



{ //data for handleStrings()
    document.getElementById("one").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("one");
        pressedEnter = false;
        pressedChange = false;
    })
    document.getElementById("two").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("two");
        pressedEnter = false;
        pressedChange = false;
    })
    document.getElementById("three").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("three");
        pressedEnter = false;
        pressedChange = false;
    })
    document.getElementById("four").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("four");
        pressedEnter = false;
        pressedChange = false;
    })
    document.getElementById("five").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("five");
        pressedEnter = false;
        pressedChange = false;
    })
    document.getElementById("six").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("six");
        pressedEnter = false;
        pressedChange = false;
    })
    document.getElementById("seven").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("seven");
        pressedEnter = false;
        pressedChange = false;
    })
    document.getElementById("eight").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("eight");
        pressedEnter = false;
        pressedChange = false;
    })
    document.getElementById("nine").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("nine");
        pressedEnter = false;
        pressedChange = false;
    })
    document.getElementById("zero").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
            calculationPart = "";
        }
        handleStrings("zero");
        pressedEnter = false;
        pressedChange = false;
    })

    document.getElementById("dot").addEventListener("click",function(){
        if(pressedEnter == true){
            calculation.textContent = "0";
        }
        handleStrings("dot");
        pressedEnter = false;
    })

    document.getElementById("plus").addEventListener("click",function(){
        if(pressedChange == false){
            pressedChange = true;
            handleStrings("plus");
            numberArray[numberArray.length] = calculationPart;
            pressedEnter = false;
        }
    })
    document.getElementById("minus").addEventListener("click",function(){
        if(pressedChange == false){
            pressedChange = true;          
            handleStrings("minus");
            numberArray[numberArray.length] = calculationPart;
            pressedEnter = false;
        }
    })
    document.getElementById("multiply").addEventListener("click",function(){
        if(pressedChange == false){
            pressedChange = true;
            handleStrings("multiply");
            numberArray[numberArray.length] = calculationPart;
            pressedEnter = false;
        }
    })
    document.getElementById("divide").addEventListener("click",function(){
        if(pressedChange == false){
            pressedChange = true;
            handleStrings("divide");
            numberArray[numberArray.length] = calculationPart;
            pressedEnter = false;
        }
    })

    document.getElementById("submitButton").addEventListener("click",function(){
        numberArray[numberArray.length] = calculationPart;
        handleStrings("submitButton");
        calculationPart = "";
    })

    document.getElementById("deleteButton").addEventListener("click",function(){
        handleStrings("deleteButton");
        numberArray.splice(0, numberArray.length);
        calculationPart = "";
    })
}

});