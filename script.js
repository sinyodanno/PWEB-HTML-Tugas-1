//Clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
//Display the values
function display(value) {
    document.getElementById("result").value += value;
}
 
//Evaluate the expression and returns the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}