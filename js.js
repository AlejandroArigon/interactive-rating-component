document.getElementById("submit").addEventListener("click", function() {
    document.getElementById("card-1").style.display="none";
    document.getElementById("card-2").style.display="block";
});

let btnValue
function btn1(){
    btnValue = 1;
}
function btn2(){
    btnValue = 2;
}
function btn3(){
    btnValue = 3;
}
function btn4(){
    btnValue = 4;
}
function btn5(){
    btnValue = 5;
}
/*
function submit1(){
    let submit2 = document.createElement("div")
    submit2.classList.add("selected")
    submit2.innerHTML = `You selected ${btnValue} out of 5`
    let card2 = document.getElementById("card-2")
    card2.appendChild(submit2)
}
*/
function submit1(){
    let submit2 = document.getElementById("button-value")
    submit2.innerHTML = btnValue
}