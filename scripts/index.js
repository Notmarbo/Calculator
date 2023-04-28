"use strict"

const number1 = document.getElementById("number1Field");
const number2 = document.getElementById("number2Field");
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const mutiplyBtn = document.getElementById("mutiplyBtn");
const divideBtn = document.getElementById("divideBtn");
const answerValue = document.getElementById("answerValue")

window.onload = init;

function init(){
    addBtn.onclick = onAddBtnClicked;
    subtractBtn.onclick = onSubtractBtnClicked;
    mutiplyBtn.onclick = onMutiplyBtnClicked;
    divideBtn.onclick = onDivideBtnClicked;
}

function onAddBtnClicked(){
    console.log("clicked");
    let userTypedValue1= number1.value;
    let userTypedValue2= number2.value;
    let valueOf1 = parseFloat(userTypedValue1);
    let valueOf2 = parseFloat(userTypedValue2);

    
    let added = valueOf1 + valueOf2;
    answerValue.value = added;
    
}
function onSubtractBtnClicked(){
    console.log("clicked");
    let userTypedValue1= number1.value;
    let userTypedValue2= number2.value;
    let valueOf1 = parseFloat(userTypedValue1);
    let valueOf2 = parseFloat(userTypedValue2);

    let subtracted = valueOf1 - valueOf2;
    answerValue.value = subtracted;

}
function onMutiplyBtnClicked(){
    console.log("clicked");
    let userTypedValue1= number1.value;
    let userTypedValue2= number2.value;
    let valueOf1 = parseFloat(userTypedValue1);
    let valueOf2 = parseFloat(userTypedValue2);

    let mutiplied = valueOf1 * valueOf2
    answerValue.value = mutiplied;

}
function onDivideBtnClicked(){
    console.log("clicked");
    let userTypedValue1= number1.value;
    let userTypedValue2= number2.value;
    let valueOf1 = parseFloat(userTypedValue1);
    let valueOf2 = parseFloat(userTypedValue2);

    let divided = valueOf1 / valueOf2;
    answerValue.value = divided;
}
