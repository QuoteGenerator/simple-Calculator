document.addEventListener("DOMContentLoaded", function() {
    
    let result = 0;

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

    //Saving the numbers for last calculation (for result[sum])
    let savingNumbers ="";

    let plusNumbers = [];
    let minusNumbers = [];

    let lastOperator = "";
    let newOperator = "";

    //Right-side-calculator
    let submitButton = document.getElementById("submitButton");

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

    submitButton.addEventListener("click", function(){
        
            //for loop (all additions + all minus) + (all multiplications + all divisions)


        console.log(result);
    })



    //operators
    plus.addEventListener("click", function(){
        console.log("plus operator has been chosen");
        if(lastOperator !== "*" && lastOperator !== "/" && newOperator !== "/" && newOperator !== "*" && lastOperator !== "-"){
            plusNumbers[plusNumbers.length] = savingNumbers;
            savingNumbers = "";
        }
    })
    minus.addEventListener("click", function(){
        console.log("plus operator has been chosen");
        if(lastOperator !== "*" && lastOperator !== "/" && newOperator !== "/" && newOperator !== "*" && lastOperator !== "+"){
            minusNumbers[minusNumbers.length] = savingNumbers;
            savingNumbers = "";
        }
    })    
});