window.addEventListener('load',populateLeftPanel);

function populateLeftPanel()
{
var moduleSpan=document.getElementById('module');
var moduleName=moduleSpan.getAttribute('name');
if(moduleName=='DESIGNATION')
{
var designationSpan=document.getElementById('designationSpan');
designationSpan.innerHTML="<b>Designation</b>";
var employeeSpan=document.getElementById('employeeSpan');
employeeSpan.innerHTML="<a href='/stylethree/Employees.jsp'>Employee</a>";
var homeSpan=document.getElementById('homeSpan');
homeSpan.innerHTML="<a href='/stylethree/index.jsp'>Home</a>";
}

if(moduleName=='EMPLOYEE')
{
var designationSpan=document.getElementById('designationSpan');


designationSpan.innerHTML="<a href='/stylethree/Designations.jsp'>Designation</a>";
var employeeSpan=document.getElementById('employeeSpan');
employeeSpan.innerHTML="<b>Employee</B>";
var homeSpan=document.getElementById('homeSpan');
homeSpan.innerHTML="<a href='/stylethree/index.jsp'>Home</a>";
}

if(moduleName=='HOME')
{
var designationSpan=document.getElementById('designationSpan');
designationSpan.innerHTML="<a href='/stylethree/Designations.jsp'>Designation</a>";
var employeeSpan=document.getElementById('employeeSpan');
employeeSpan.innerHTML="<a href='/stylethree/Employees.jsp'>Employee</a>";
var homeSpan=document.getElementById('homeSpan');
homeSpan.innerHTML="";
}

}