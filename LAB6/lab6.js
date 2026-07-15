document.getElementById("studentForm").addEventListener("submit", function(event){
 
    event.preventDefault();
 
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let sid = document.getElementById("sid").value.trim();
    let email = document.getElementById("email").value.trim();
    let credit = document.getElementById("credit").value;
    let department = document.getElementById("department").value;
 
    if(fname==""){
        alert("First Name is required");
        return;
    }
 
    if(lname==""){
        alert("Last Name is required");
        return;
    }
 
    if(!sid.includes("-")){
        alert("Student ID must contain '-' ");
        return;
    }
 
    if(!email.includes("@student.aiub.edu")){
        alert("Email must contain @student.aiub.edu");
        return;
    }
 
    if(credit=="" || credit<0 || credit>=148){
        alert("Credit must be between 0 and 147");
        return;
    }
 
    if(department==""){
        alert("Please select a department");
        return;
    }
 
    let table = document.getElementById("studentTable");
 
    let row = table.insertRow();
 
    row.insertCell(0).innerHTML = fname;
    row.insertCell(1).innerHTML = lname;
    row.insertCell(2).innerHTML = sid;
    row.insertCell(3).innerHTML = email;
    row.insertCell(4).innerHTML = credit;
    row.insertCell(5).innerHTML = department;
 
    document.getElementById("studentForm").reset();
 
});