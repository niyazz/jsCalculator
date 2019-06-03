var line = document.getElementById('line'); // getting the input text

function putNumber(num){ // for buttons
    line.value = line.value + num.toString();
}
function clearAll(){ // clean up button
    line.value = '';
    line.style.backgroundColor = "white";
}
function clearBefore(){ // backspace button
    line.value = line.value.slice(0,line.value.length - 1);
}
function caluclate() { // equal button
    if (eval(line.value)){
        line.value = eval(line.value);
    line.style.backgroundColor = "rgb(27, 196, 30)";
    }
    else line.style.backgroundColor = "rgb(226, 66, 52)";
}
