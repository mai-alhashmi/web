var studentsSchool = new Map();
var tableBoody = document.getElementById("tableBoody");
function add() {
    
    let fullNameValue = document.getElementById("fullName").value;
    let materialsValue = document.getElementById("materials").value;
    let degreeValue = document.getElementById("degree").value;
    let calssValue = document.getElementById("class").value;
    let resultValue = document.getElementById("result").value;
   
    let stu = {
        fullName: fullNameValue,
        materials: materialsValue,
        degree: degreeValue,
        class:calssValue,
        result: resultValue

    };
    console.log(stu);

    studentsSchool.set(++studentsSchool.size,stu);
    tableBoody.innerHTML = "";
    for (const s of studentsSchool) {

        tableBoody.innerHTML += "<tr><td>" + s[0] + "</td><td>" +
        s[1].fullName + 
        "</td><td>" + s[1].materials +
        "</td><td>" + s[1].degree +
         "</td><td>" + s[1].class +
        "</td><td>" + s[1].result + "</td></tr>";
    }
   
}
