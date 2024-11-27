let studentsSet=new Set();
function add(){
    let nameInput=document.getElementById("name");
    let studentsListSlect=document.getElementById("Students");
    studentsSet .add(nameInput.value);
    
    studentsListSlect.innerHTML="";

    for (const e of studentsSet) {
        studentsListSlect.innerHTML+="<option>"+e+"<option>";
        
    }
}
