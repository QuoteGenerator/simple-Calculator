document.addEventListener("DOMContentLoaded", function() {
    
    let result = 0;
    let outputbar = document.getElementById("outputbar");

    //Numpad
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    let eight = document.getElementById("eight");
    let nine = document.getElementById("nine");
    let zero = document.getElementById("zero");
    let dot = document.getElementById("dot");

    //Saving the numbers for last calculation (for result[sum])
    let savingNumbers ="";

    let plusNumbers = [];
    let minusNumbers = [];
    

    let lastOperator = "";
    let newOperator = "";

    let pressedEnter = false;

    //Right-side-calculator
    let submitButton = document.getElementById("submitButton");
    let deleteButton = document.getElementById("deleteButton");

    //Operators
    let plus = document.getElementById("plus");
    let minus = document.getElementById("minus");
    let multiply = document.getElementById("multiply");
    let divide = document.getElementById("divide");


    one.addEventListener("click", function(){
        savingNumbers += "1";
        console.log(savingNumbers);
    })
    two.addEventListener("click", function(){
        savingNumbers += "2";
        console.log(savingNumbers);
    })
    three.addEventListener("click", function(){
        savingNumbers += "3";
        console.log(savingNumbers);
    })
    four.addEventListener("click", function(){
        savingNumbers += "4";
        console.log(savingNumbers);
    })
    five.addEventListener("click", function(){
        savingNumbers += "5";
        console.log(savingNumbers);
    })
    six.addEventListener("click", function(){
        savingNumbers += "6";
        console.log(savingNumbers);
    })
    seven.addEventListener("click", function(){
        savingNumbers += "7";
        console.log(savingNumbers);
    })
    eight.addEventListener("click", function(){
        savingNumbers += "8";
        console.log(savingNumbers);
    })
    nine.addEventListener("click", function(){
        savingNumbers += "9";
        console.log(savingNumbers);
    })

    zero.addEventListener("click", function(){
        savingNumbers += "0";
        console.log(savingNumbers);
    })

    dot.addEventListener("click", function(){
        savingNumbers += ".";
        console.log(savingNumbers);
    })

    submitButton.addEventListener("click", function(){
        let lastLastOperator = lastOperator;
        lastOperator = newOperator; //fixes bug with not doing minus on first try
        
        if((lastOperator === "" || lastOperator === "+") && savingNumbers!=""){
            plusNumbers[plusNumbers.length] = savingNumbers;
            savingNumbers = "";
        }
        if(lastOperator === "-" && savingNumbers!=""){ //wenn wir enter drücken wird lastOperator zu ""
            minusNumbers[minusNumbers.length] = savingNumbers;
            savingNumbers = "";
        }
        if(lastOperator === "*" && savingNumbers !== "" && result === 0 ){
            if(lastLastOperator === "+" || lastLastOperator == "" || lastOperator == "*"){
                plusNumbers[plusNumbers.length-1] *= parseFloat(savingNumbers);
                savingNumbers = "";
            }
            if(lastLastOperator === "-"){
                minusNumbers[minusNumbers.length-1] *= parseFloat(savingNumbers);
                savingNumbers = "";
            }
        }
        if(lastOperator === "*" && newOperator === "*" && result !== 0){
            result *= Number(savingNumbers);
            savingNumbers = "";
        }

        if(lastOperator === "/" && savingNumbers !== "" && result === 0 ){
            if(lastLastOperator === "+" || lastLastOperator == "" || lastOperator == "/"){
                plusNumbers[plusNumbers.length-1] /= parseFloat(savingNumbers);
                savingNumbers = "";
            }
            if(lastLastOperator === "-"){
                minusNumbers[minusNumbers.length-1] /= parseFloat(savingNumbers);
                savingNumbers = "";
            }
        }
        if(lastOperator === "/" && newOperator === "/" && result !== 0){
            result /= Number(savingNumbers);
            savingNumbers = "";
        }

        //for loop (all additions + all minus) + (all multiplications + all divisions)
        for(i = 0; i < plusNumbers.length; i++){
            result += parseFloat(plusNumbers[i]);
        }
        
        for(j = 0; j < minusNumbers.length; j++){
            result -= parseFloat(minusNumbers[j]);
        }

        console.log(result);
        outputbar.textContent = result;
        plusNumbers = [];
        minusNumbers = [];
        lastOperator = "";
        newOperator = "";
        lastLastOperator = "";
    })
    
    deleteButton.addEventListener("click",function(){
        savingNumbers ="";

        plusNumbers = [];
        minusNumbers = [];
    
        lastOperator = "";
        newOperator = "";
        result = 0;
        outputbar.textContent = result;
        //output all data in console
        console.log(savingNumbers);
        console.log(plusNumbers);
        console.log(minusNumbers);
    })



    //categorize number (plus - minus - division - multiplication)

    function categorizeNumber(operator){
        if(operator === "plus"){
            console.log("plus operator has been chosen");

            lastOperator = newOperator;
            newOperator = "+";

            if((lastOperator === "" || lastOperator === "+") && savingNumbers!=""){ //if savingNumbers == 0 then make it to the number I input (need to do!!!)
                plusNumbers[plusNumbers.length] = savingNumbers;
                savingNumbers = "";
            }
            if(lastOperator === "-" && savingNumbers!=""){
                minusNumbers[minusNumbers.length] = savingNumbers;
                savingNumbers = "";
            }
            
            if(lastOperator === "*" && savingNumbers !== "" && result === 0){
                if(lastOperator === "+" || lastOperator == "" || lastOperator == "*"){
                    plusNumbers[plusNumbers.length-1] *= parseFloat(savingNumbers);
                    savingNumbers = "";
                }
                if(lastOperator === "-"){
                    minusNumbers[minusNumbers.length-1] *= parseFloat(savingNumbers);
                    savingNumbers = "";
                }
            }


            //output all data in console
            console.log(savingNumbers);
            console.log(plusNumbers);
            console.log(minusNumbers);
        }

        if(operator === "minus"){
            console.log("minus operator has been chosen");

            lastOperator = newOperator;
            newOperator = "-";

            if((lastOperator === "" || lastOperator === "+") && savingNumbers!=""){ 
                plusNumbers[plusNumbers.length] = savingNumbers;
                savingNumbers = "";
            }
            if(lastOperator === "-" && savingNumbers!=""){
                minusNumbers[minusNumbers.length] = savingNumbers;
                savingNumbers = "";
            }

            

            //output all data in console
            console.log(savingNumbers);
            console.log(plusNumbers);
            console.log(minusNumbers);
        }

        if(operator === "multiply"){
            console.log("multiply operator has been chosen");

            lastOperator = newOperator;
            newOperator = "*";

            if((lastOperator === "" || lastOperator === "+") && savingNumbers!=""){ 
                plusNumbers[plusNumbers.length] = savingNumbers;
                savingNumbers = "";
            }
            if(lastOperator === "-" && savingNumbers!=""){
                minusNumbers[minusNumbers.length] = savingNumbers;
                savingNumbers = "";
            }

            if(lastOperator === "*" && savingNumbers !== "" && result === 0){
                if(lastOperator === "+" || lastOperator == "" || lastOperator == "*"){
                    plusNumbers[plusNumbers.length-1] *= parseFloat(savingNumbers);
                    savingNumbers = "";
                }
                if(lastOperator === "-"){
                    minusNumbers[minusNumbers.length-1] *= parseFloat(savingNumbers);
                    savingNumbers = "";
                }
            } 
            if(lastOperator === "*" && savingNumbers !== "" && result !== 0){
                if(lastOperator === "+" || lastOperator == "" || lastOperator == "*"){
                    result *= parseFloat(savingNumbers);
                    savingNumbers = "";
                }
                if(lastOperator === "-"){
                    result *= parseFloat(savingNumbers);
                    savingNumbers = "";
                }
            } 
        
            //output all data in console
            console.log(savingNumbers);
            console.log(plusNumbers);
            console.log(minusNumbers);
        }

        if(operator === "divide"){
            console.log("divide operator has been chosen");

            lastOperator = newOperator;
            newOperator = "/";

            if((lastOperator === "" || lastOperator === "+") && savingNumbers!=""){ 
                plusNumbers[plusNumbers.length] = savingNumbers;
                savingNumbers = "";
            }
            if(lastOperator === "-" && savingNumbers!=""){
                minusNumbers[minusNumbers.length] = savingNumbers;
                savingNumbers = "";
            }

            if(lastOperator === "*" && savingNumbers !== "" && result === 0){
                if(lastOperator === "+" || lastOperator == "" || lastOperator == "*"){
                    plusNumbers[plusNumbers.length-1] *= parseFloat(savingNumbers);
                    savingNumbers = "";
                }
                if(lastOperator === "-"){
                    minusNumbers[minusNumbers.length-1] *= parseFloat(savingNumbers);
                    savingNumbers = "";
                }
            } 
            if(lastOperator === "*" && savingNumbers !== "" && result !== 0){
                if(lastOperator === "+" || lastOperator == "" || lastOperator == "*"){
                    result *= parseFloat(savingNumbers);
                    savingNumbers = "";
                }
                if(lastOperator === "-"){
                    result *= parseFloat(savingNumbers);
                    savingNumbers = "";
                }
            } 

            if(lastOperator === "/" && savingNumbers !== "" && result === 0){
                if(lastOperator === "+" || lastOperator == "" || lastOperator == "/"){
                    plusNumbers[plusNumbers.length-1] /= parseFloat(savingNumbers);
                    savingNumbers = "";
                }
                if(lastOperator === "-"){
                    minusNumbers[minusNumbers.length-1] /= parseFloat(savingNumbers);
                    savingNumbers = "";
                }
            } 
            if(lastOperator === "/" && savingNumbers !== "" && result !== 0){
                if(lastOperator === "+" || lastOperator == "" || lastOperator == "/"){
                    result /= parseFloat(savingNumbers);
                    savingNumbers = "";
                }
                if(lastOperator === "-"){
                    result /= parseFloat(savingNumbers);
                    savingNumbers = "";
                }
            } 


        
            //output all data in console
            console.log(savingNumbers);
            console.log(plusNumbers);
            console.log(minusNumbers);
        }


        
    }

    plus.addEventListener("click", function(){
        categorizeNumber("plus");
    })
    minus.addEventListener("click", function(){
        categorizeNumber("minus");
    })
    multiply.addEventListener("click", function(){
        categorizeNumber("multiply");
    })
    divide.addEventListener("click", function(){
        categorizeNumber("divide");
    })
});