let temp = document.getElementById("num");
let cel = document.getElementById("ctof");
let far = document.getElementById("ftoc");
let result = document.getElementById("result");

function convert() {
    let temperature = Number(temp.value);

    if (cel.checked) {  
        temperature = temperature * 9 / 5 + 32;
        result.textContent = temperature.toFixed(1) + " °F";
    } 
    else if (far.checked) {  
        temperature = (temperature - 32) * 5 / 9;
        result.textContent = temperature.toFixed(1) + " °C";
    } 
    else {
        result.textContent = "Please select a conversion type.";
    }
}
