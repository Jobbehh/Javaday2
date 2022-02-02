`use strict`
import * as DOM from './domcalc.js';
 // let changeText = (str) => DOM.Output.innerHTML = `${str}`;
DOM.button_add.onclick = () =>addition(DOM.inputOne.value, DOM.inputTwo.value);
DOM.button_subtract.onclick = () => subtraction(DOM.inputOne.value, DOM.inputTwo.value);
DOM.button_divide.onclick = () => division(DOM.inputOne.value, DOM. inputTwo.value);
DOM.button_multiply.onclick = () => multiplication(DOM.inputOne.value, DOM.inputTwo.value);

function addToList(str) {

    let child = document.createElement(`li`);
    child.classList.add(`list-group-item`);
    child.innerHTML = str;
    DOM.Output.appendChild(child);
}
function addition(a, b){
    let result = Number(a)+Number(b);
    addToList(result);
}

function multiplication(a,b){
let mresult = Number(a)*Number(b);
addToList(mresult);}

function subtraction(a, b){
    let sresult = Number(a)-Number(b);
    addToList(sresult);
}
function division(a, b){
    let dresult = Number(a)/Number(b);
    addToList(dresult);
}