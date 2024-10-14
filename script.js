document.addEventListener("DOMContentLoaded", function() {
    let calculation = document.getElementById("outputbar");
    let pressedEnter = false;

    function handleStrings(input){
        switch(input){
            case "one":
                    calculation.textContent += "1";
                break;
            case "two":
                    calculation.textContent += "2";
                break;
            case "three":
                    calculation.textContent += "3";
                break;
            case "four":
                    calculation.textContent += "4";
                break;
            case "five":
                    calculation.textContent += "5";
                break;
            case "six":
                    calculation.textContent += "6";
                break;
            case "seven":
                    calculation.textContent += "7";
                break;
            case "eight":
                    calculation.textContent += "8";
                break;
            case "nine":
                    calculation.textContent += "9";
                break;
            case "zero":
                    calculation.textContent += "0";
                break;
            
            case "submitButton":
                    pressedEnter = true;
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
    })
    document.getElementById("two").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("two");
        pressedEnter = false;
    })
    document.getElementById("three").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("three");
        pressedEnter = false;
    })
    document.getElementById("four").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("four");
        pressedEnter = false;
    })
    document.getElementById("five").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("five");
        pressedEnter = false;
    })
    document.getElementById("six").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("six");
        pressedEnter = false;
    })
    document.getElementById("seven").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("seven");
        pressedEnter = false;
    })
    document.getElementById("eight").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("eight");
        pressedEnter = false;
    })
    document.getElementById("nine").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("nine");
        pressedEnter = false;
    })
    document.getElementById("zero").addEventListener("click",function(){
        if(calculation.textContent == "0" || pressedEnter == true){
            calculation.textContent = "";
        }
        handleStrings("zero");
        pressedEnter = false;
    })

    document.getElementById("submitButton").addEventListener("click",function(){
        handleStrings("submitButton");
    })

    document.getElementById("deleteButton").addEventListener("click",function(){
        handleStrings("deleteButton");
    })
}

});