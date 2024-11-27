var inputName=document.getElementById("name");
var studentsDiv=document.getElementById("student");

var studentsSet=new Set();
function add(){
    studentsSet.add(inputName.value);
    studentsDiv.innerHTML="";
    for(const n of studentsSet){
        studentsDiv.innerHTML += n + "<br>";
    }
}
var inputN=document.getElementById("n");
var inputD=document.getElementById("d");
var tableBoody=document.getElementById("tableBoody");

var studentsMap=new Map();
function addDegree(){
    studentsMap.set(inputN.value ,inputD.value);
  tableBoody.innerHTML="";
    for(const e of studentsMap){
       tableBoody.innerHTML+= "<tr><td>"+ e[0]+"</td><td>"+ e[1]+"</td></tr>";    
    }
}