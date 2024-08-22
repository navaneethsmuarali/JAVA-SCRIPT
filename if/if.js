const text = document.getElementById("tex");
const out = document.getElementById("op");
const submit = document.getElementById("sub");

submit.onclick = function() {
    const age = text.value; 
    if (age >= 18) {
        out.textContent = "Eligible For licence";
    } 
    else if (age<=18){
        out.textContent = "Not Eligible For licence";
    }
    

    else{
        out.textContent="enter a valid age"
    }
}
