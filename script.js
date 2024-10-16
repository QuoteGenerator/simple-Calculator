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
        
        if((lastOperator === "" || lastOperator === "+") && (newOperator !== "/" && newOperator !== "*") && savingNumbers!=""){
            plusNumbers[plusNumbers.length] = savingNumbers;
            savingNumbers = "";
        }
        if(lastOperator === "-" && (newOperator !== "/" && newOperator !== "*") && savingNumbers!=""){ //wenn wir enter drücken wird lastOperator zu ""
            minusNumbers[minusNumbers.length] = savingNumbers;
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
    })
    
    deleteButton.addEventListener("click",function(){
        savingNumbers ="";

        plusNumbers = [];
        minusNumbers = [];
    
        lastOperator = "";
        newOperator = "";
        result = 0;
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

            if((lastOperator === "" || lastOperator === "+") && (newOperator !== "/" && newOperator !== "*") && savingNumbers!=""){
                plusNumbers[plusNumbers.length] = savingNumbers;
                savingNumbers = "";
            }
            if(lastOperator === "-" && (newOperator !== "/" && newOperator !== "*") && savingNumbers!=""){
                minusNumbers[minusNumbers.length] = savingNumbers;
                savingNumbers = "";
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

            if((lastOperator === "" || lastOperator === "+") && (newOperator !== "/" && newOperator !== "*") && savingNumbers!=""){
                plusNumbers[plusNumbers.length] = savingNumbers;
                savingNumbers = "";
            }
            if(lastOperator === "-" && (newOperator !== "/" && newOperator !== "*") && savingNumbers!=""){
                minusNumbers[minusNumbers.length] = savingNumbers;
                savingNumbers = "";
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
});