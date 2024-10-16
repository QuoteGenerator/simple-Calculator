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

    let savingNumbers = "";

    //Operators
    let plus = document.getElementById("plus");
    let minus = document.getElementById("minus");
    let multiply = document.getElementById("multiply");
    let divide = document.getElementById("divide");

    //booleans
    let plusOperatorHasBeenChoosen = false;
    let minusOperatorHasBeenChoosen = false;
    let mulitplicationOperatorHasBeenChoosen = false;
    let divisionOperatorHasBeenChoosen = false;


    one.addEventListener("click", function(){
        if(result === 0 && minusOperatorHasBeenChoosen === false){
            result = 1;
        }

        if(result != 0 || minusOperatorHasBeenChoosen === true){ // only work if i want to do minus
            if(plusOperatorHasBeenChoosen === true){result += 1; plusOperatorHasBeenChoosen = false;}
            if(minusOperatorHasBeenChoosen === true){result -= 1; minusOperatorHasBeenChoosen = false;}
            if(mulitplicationOperatorHasBeenChoosen === true){result *= 1; mulitplicationOperatorHasBeenChoosen = false;}
            if(divisionOperatorHasBeenChoosen === true){result /= 1; divisionOperatorHasBeenChoosen = false;}
        }

        console.log(result);
    })
    two.addEventListener("click", function(){
        if(result === 0 && minusOperatorHasBeenChoosen === false){
            result = 2;
        }

        if(result != 0 || minusOperatorHasBeenChoosen === true){
            if(plusOperatorHasBeenChoosen === true){result += 2; plusOperatorHasBeenChoosen = false;}
            if(minusOperatorHasBeenChoosen === true){result -= 2; minusOperatorHasBeenChoosen = false;}
            if(mulitplicationOperatorHasBeenChoosen === true){result *= 2; mulitplicationOperatorHasBeenChoosen = false;}
            if(divisionOperatorHasBeenChoosen === true){result /= 2; divisionOperatorHasBeenChoosen = false;}
        }


        console.log(result);
    })
    three.addEventListener("click", function(){
        if(result === 0 && minusOperatorHasBeenChoosen === false){
            result = 3;
        }

        if(result != 0 || minusOperatorHasBeenChoosen === true){
            if(plusOperatorHasBeenChoosen === true){result += 3; plusOperatorHasBeenChoosen = false;}
            if(minusOperatorHasBeenChoosen === true){result -= 3; minusOperatorHasBeenChoosen = false;}
            if(mulitplicationOperatorHasBeenChoosen === true){result *= 3; mulitplicationOperatorHasBeenChoosen = false;}
            if(divisionOperatorHasBeenChoosen === true){result /= 3; divisionOperatorHasBeenChoosen = false;}
        }


        console.log(result);
    })
    four.addEventListener("click", function(){
        if(result === 0 && minusOperatorHasBeenChoosen === false){
            result = 4;
        }

        if(result != 0 || minusOperatorHasBeenChoosen === true){
            if(plusOperatorHasBeenChoosen === true){result += 4; plusOperatorHasBeenChoosen = false;}
            if(minusOperatorHasBeenChoosen === true){result -= 4; minusOperatorHasBeenChoosen = false;}
            if(mulitplicationOperatorHasBeenChoosen === true){result *= 4; mulitplicationOperatorHasBeenChoosen = false;}
            if(divisionOperatorHasBeenChoosen === true){result /= 4; divisionOperatorHasBeenChoosen = false;}
        }


        console.log(result);
    })
    five.addEventListener("click", function(){
        if(result === 0 && minusOperatorHasBeenChoosen === false){
            result = 5;
        }

        if(result != 0 || minusOperatorHasBeenChoosen === true){
            if(plusOperatorHasBeenChoosen === true){result += 5; plusOperatorHasBeenChoosen = false;}
            if(minusOperatorHasBeenChoosen === true){result -= 5; minusOperatorHasBeenChoosen = false;}
            if(mulitplicationOperatorHasBeenChoosen === true){result *= 5; mulitplicationOperatorHasBeenChoosen = false;}
            if(divisionOperatorHasBeenChoosen === true){result /= 5; divisionOperatorHasBeenChoosen = false;}
        }


        
        console.log(result);
    })
    six.addEventListener("click", function(){
        if(result === 0 && minusOperatorHasBeenChoosen === false){
            result = 6;
        }

        if(result != 0 || minusOperatorHasBeenChoosen === true){
            if(plusOperatorHasBeenChoosen === true){result += 6; plusOperatorHasBeenChoosen = false;}
            if(minusOperatorHasBeenChoosen === true){result -= 6; minusOperatorHasBeenChoosen = false;}
            if(mulitplicationOperatorHasBeenChoosen === true){result *= 6; mulitplicationOperatorHasBeenChoosen = false;}
            if(divisionOperatorHasBeenChoosen === true){result /= 6; divisionOperatorHasBeenChoosen = false;}
            if(divisionOperatorHasBeenChoosen === true){result /= 5; divisionOperatorHasBeenChoosen = false;}
        }


        
        console.log(result);
    })
    seven.addEventListener("click", function(){
        if(result === 0 && minusOperatorHasBeenChoosen === false){
            result = 7;
        }

        if(result != 0 || minusOperatorHasBeenChoosen === true){
            if(plusOperatorHasBeenChoosen === true){result += 7; plusOperatorHasBeenChoosen = false;}
            if(minusOperatorHasBeenChoosen === true){result -= 7; minusOperatorHasBeenChoosen = false;}
            if(mulitplicationOperatorHasBeenChoosen === true){result *= 7; mulitplicationOperatorHasBeenChoosen = false;}
            if(divisionOperatorHasBeenChoosen === true){result /= 7; divisionOperatorHasBeenChoosen = false;}
            if(divisionOperatorHasBeenChoosen === true){result /= 5; divisionOperatorHasBeenChoosen = false;}
        }


        
        console.log(result);
    })
    eight.addEventListener("click", function(){
        if(result === 0 && minusOperatorHasBeenChoosen === false){
            result = 8;
        }

        if(result != 0 || minusOperatorHasBeenChoosen === true){
            if(plusOperatorHasBeenChoosen === true){result += 8; plusOperatorHasBeenChoosen = false;}
            if(minusOperatorHasBeenChoosen === true){result -= 8; minusOperatorHasBeenChoosen = false;}
            if(mulitplicationOperatorHasBeenChoosen === true){result *= 8; mulitplicationOperatorHasBeenChoosen = false;}
            if(divisionOperatorHasBeenChoosen === true){result /= 8; divisionOperatorHasBeenChoosen = false;}
            if(divisionOperatorHasBeenChoosen === true){result /= 5; divisionOperatorHasBeenChoosen = false;}
        }


        
        console.log(result);
    })
    nine.addEventListener("click", function(){
        if(result === 0 && minusOperatorHasBeenChoosen === false){
            result = 9;
        }

        if(result != 0 || minusOperatorHasBeenChoosen === true){
            if(plusOperatorHasBeenChoosen === true){result += 9; plusOperatorHasBeenChoosen = false;}
            if(minusOperatorHasBeenChoosen === true){result -= 9; minusOperatorHasBeenChoosen = false;}
            if(mulitplicationOperatorHasBeenChoosen === true){result *= 9; mulitplicationOperatorHasBeenChoosen = false;}
            if(divisionOperatorHasBeenChoosen === true){result /= 9; divisionOperatorHasBeenChoosen = false;}
            if(divisionOperatorHasBeenChoosen === true){result /= 5; divisionOperatorHasBeenChoosen = false;}
        }


        
        console.log(result);
    })

    zero.addEventListener("click", function(){
        if(result === 0 && minusOperatorHasBeenChoosen === false){
            result = 0;
        }
        
        if(result != 0 || minusOperatorHasBeenChoosen === true){
            if(plusOperatorHasBeenChoosen === true){result += 0; plusOperatorHasBeenChoosen = false;}
            if(minusOperatorHasBeenChoosen === true){result -= 0; minusOperatorHasBeenChoosen = false;}
            if(mulitplicationOperatorHasBeenChoosen === true){result *= 0; mulitplicationOperatorHasBeenChoosen = false;}
            if(divisionOperatorHasBeenChoosen === true){result /= 0; divisionOperatorHasBeenChoosen = false;}
            if(divisionOperatorHasBeenChoosen === true){result /= 5; divisionOperatorHasBeenChoosen = false;}
        }


        
        console.log(result);

    })

    //operators
    plus.addEventListener("click", function(){
        plusOperatorHasBeenChoosen = true;
        
        minusOperatorHasBeenChoosen = false;
        mulitplicationOperatorHasBeenChoosen = false;
        divisionOperatorHasBeenChoosen = false;

        console.log("plus operator has been chosen");
    })
    minus.addEventListener("click", function(){
        minusOperatorHasBeenChoosen = true;

        mulitplicationOperatorHasBeenChoosen = false;
        divisionOperatorHasBeenChoosen = false;
        plusOperatorHasBeenChoosen = false;

        console.log("plus operator has been chosen");
    })
    multiply.addEventListener("click", function(){
        mulitplicationOperatorHasBeenChoosen = true;

        plusOperatorHasBeenChoosen = false;
        minusOperatorHasBeenChoosen = false;
        divisionOperatorHasBeenChoosen = false;

        console.log("plus operator has been chosen");
    })
    divide.addEventListener("click", function(){
        divisionOperatorHasBeenChoosen = true;

        plusOperatorHasBeenChoosen = false;
        minusOperatorHasBeenChoosen = false;
        mulitplicationOperatorHasBeenChoosen = false;

        console.log("plus operator has been chosen");
    })


    
});