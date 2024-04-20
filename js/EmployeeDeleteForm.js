var employeeEditForm;
var notification;
function authenticate()
{
var xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
var responseData=JSON.parse(this.responseText);
if(responseData.success==false)
{
var form=document.createElement('form');
form.action='/stylethree/LoginForm.jsp';
var formSpan=document.getElementById('formSpan');
formSpan.appendChild(form);
form.submit();
}
else
{
var content=document.getElementById('content');
content.hidden=false;
var codeElement=document.getElementById('code');
var notificationTemplate=document.getElementById('notification');
notification=notificationTemplate.cloneNode(true);
notificationTemplate.remove();
getEmployeeDeleteForm();
}
}
else
{
alert('some problem');
}

}
};
xmlHttpRequest.open('GET','validateAccess',true);
xmlHttpRequest.send();
}

function getEmployeeDeleteForm()
{
var myForm=document.getElementById('myForm');
var action=myForm.action;
var i=action.indexOf('=');
var employeeId=action.substring(i+1);
var xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
var responseData=JSON.parse(this.responseText);

if(responseData.success)
{
var employee=responseData.result;
var employeeDeleteForm=document.getElementById('employeeDeleteForm');
employeeDeleteForm.hidden=false;
var employeeIdElement=document.getElementById('employeeId');
employeeIdElement.value=employee.employeeId;
var name=document.getElementById('name');
name.innerHTML=employee.name;
var designation=document.getElementById('designation');
designation.innerHTML=employee.designation;
var dateOfBirth=document.getElementById('dateOfBirth');
dateOfBirth.innerHTML=employee.dateOfBirth;
var gender=document.getElementById('gender');
gender.innerHTML=employee.gender;
var isIndian=employee.isIndian;
if(isIndian==true) document.getElementById('nationality').innerHTML="Indian";
else document.getElementById('nationality').innerHTML="Non-Indian";
var basicSalary=document.getElementById('basicSalary');
basicSalary.innerHTML=employee.basicSalary;
var panNumber=document.getElementById('panNumber');
panNumber.innerHTML=employee.panNumber;
var aadharCardNumber=document.getElementById('aadharCardNumber');
aadharCardNumber.innerHTML=employee.aadharCardNumber;

}
else
{
document.getElementById('forwardToView').submit();
}
}
else
{
alert('some problem');
}
}
};
var requestURL='employeeDeleteConfirmation?employeeId='+encodeURI(employeeId);
xmlHttpRequest.open('GET',requestURL,true);
xmlHttpRequest.send();
}
function cancelDeletion()
{
document.getElementById('forwardToView').submit();
}
function deleteEmployee()
{
var employeeId=document.getElementById('employeeId').value;
var employee={
"employeeId" : employeeId
};
var xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
var responseData=JSON.parse(this.responseText);
if(responseData.success)
{
var notificationSpan=document.getElementById('notificationSpan');
notificationSpan.appendChild(notification);
var employeeDeleteForm=document.getElementById('employeeDeleteForm');
employeeDeleteForm.remove();
}
else
{
document.getElementById('forwardToView').submit();
}
}
else
{
alert('some problem');
}
}
};
xmlHttpRequest.open('POST','deleteEmployee',true);
xmlHttpRequest.setRequestHeader("Content-Type","application/json");
xmlHttpRequest.send(JSON.stringify(employee));
}
window.addEventListener('load',authenticate);