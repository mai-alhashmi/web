let inputData=document.getElementById("data");
let span=document.getElementById("show");

function go(){
    span.innerHTML=inputData.value;
}
function changeBg2(input){
    input.style.borderColor="yellow";
    input.style.backgroundColor="white";

}
function changeBg(input){
    input.style.borderColor="white";
    input.style.backgroundColor="yellow";

}