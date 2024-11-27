var employee = new Map();
var tabelBoody = document.getElementById("tabelBoody");
function add() {
    let nameValue = document.getElementById("name").value;
    let emailValue = document.getElementById("email").value;
    let mobileValue = document.getElementById("mobile").value;
    let jobValue = document.getElementById("job").value;
    let salaryValue = document.getElementById("salary").value;
    let emp = {
        name: nameValue,
        email: emailValue,
        mobile: mobileValue,
        job: jobValue,
        salary: salaryValue
    };
    employee.set(++employee.size, emp);

    tabelBoody.innerHTML = "";
    for (const e of employee) {
        tabelBoody.innerHTML += "<tr><td>" + e[0] + "</td><td>" +
            e[1].name + "</td><td>" + e[1].email +
            "</td><td>" + e[1].mobile + "</td><td>" + e[1].job +
            "</td><td>" + e[1].salary + "</td></tr>";
    }
}
