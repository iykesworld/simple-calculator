
// storing the buttons in a variable
let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector("#clear");
let total = document.querySelector("#total");
let btnSpread = [...btns];
let allBtnSpread = [...allBtns];


// activating the calculator push buttons to appear on the screen when pressed
btnSpread.forEach((button, i) =>{

    
    button.addEventListener("click", () =>{
        if(resultBox.value == "0"){
            resultBox.value ="";
        }
        let theValue = btns[i].innerHTML;
        resultBox.value += theValue;
    });
});


// to calculate the input using the total 
total.addEventListener("click", () =>{
    let x = resultBox.value;
    let  y = eval(x);
    resultBox.value = y;
    return y;
});

// activating the clear button
clearBtn.addEventListener("click", ()=>{
    resultBox.value = "0"
});

