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
getEmployeeEditForm();
populateDesignations();
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
function populateDesignations()
{
var xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
var designations=JSON.parse(this.responseText);
var designationComboBox=document.getElementById('designationCode');
var option;
for(var i=0;i<designations.length;i++)
{
option=document.createElement('option');
option.value=designations[i].code;
option.text=designations[i].title
designationComboBox.appendChild(option);
}
}
else
{
alert('some problem');
}
}
};
xmlHttpRequest.open('GET','designationsView',true);
xmlHttpRequest.send();
}


function getEmployeeEditForm()
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
var employeeEditForm=document.getElementById('employeeEditForm');
employeeEditForm.hidden=false;
var employeeIdElement=document.getElementById('employeeId');
employeeIdElement.value=employee.employeeId;
var name=document.getElementById('name');
name.value=employee.name;
var selectedDesignation=document.getElementById('selectedDesignation');
selectedDesignation.value=employee.designationCode;
selectedDesignation.innerHTML=employee.designation;
var dateOfBirth=document.getElementById('dateOfBirth');
dateOfBirth.value=employee.dateOfBirth;
var gender=employee.gender;
if(gender=='M') document.getElementById('male').checked=true;
else document.getElementById('female').checked=true;
var isIndian=employee.isIndian;
if(isIndian==true) document.getElementById('isIndian').checked=true;
var basicSalary=document.getElementById('basicSalary');
basicSalary.value=employee.basicSalary;
var panNumber=document.getElementById('panNumber');
panNumber.value=employee.panNumber;
var aadharCardNumber=document.getElementById('aadharCardNumber');
aadharCardNumber.value=employee.aadharCardNumber;



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
var requestURL='editEmployee?employeeId='+encodeURI(employeeId);
xmlHttpRequest.open('GET',requestURL,true);
xmlHttpRequest.send();
}
function validateForm()
{
var valid=true;
var firstInvalidComponent=null;
var nameElement=document.getElementById('name');
var name=nameElement.value.trim();
var nameErrorSection=document.getElementById('nameErrorSection');
nameErrorSection.innerHTML='';
if(name.length==0)
{
nameErrorSection.innerHTML='Name required';
valid=false;
firstInvalidComponent=nameElement;
}
var designationCodeElement=document.getElementById('designationCode');
var designationCode=designationCodeElement.value;
var designationCodeErrorSection=document.getElementById('designationCodeErrorSection');
designationCodeErrorSection.innerHTML='';
if(designationCode==-1)
{
designationCodeErrorSection.innerHTML='Select designation';
valid=false;
if(firstInvalidComponent==null) firstInvalidComponent=designationCodeElement;
}
var dateOfBirthElement=document.getElementById('dateOfBirth');
var dateOfBirth=dateOfBirthElement.value;
var dateOfBirthErrorSection=document.getElementById('dateOfBirthErrorSection');
dateOfBirthErrorSection.innerHTML='';
if(dateOfBirth.length==0)
{
dateOfBirthErrorSection.innerHTML='Select date of birth';
valid=false;
if(firstInvalidComponent==null) firstInvalidComponent=dateOfBirthElement;
}

var genderErrorSection=document.getElementById('genderErrorSection');
genderErrorSection.innerHTML='';
var male=document.getElementById('male');
var female=document.getElementById('female');
if(male.checked==false && female.checked==false)
{
genderErrorSection.innerHTML='Select gender';
valid=false;
}
var basicSalaryElement=document.getElementById('basicSalary');
var basicSalary=basicSalaryElement.value.trim();
var basicSalaryErrorSection=document.getElementById('basicSalaryErrorSection');
basicSalaryErrorSection.innerHTML='';
if(basicSalary.length==0)
{
basicSalaryErrorSection.innerHTML='Basic salary required';
valid=false;
if(firstInvalidComponent==null) firstInvalidComponent=basicSalaryElement;
}
else
{
var e=0;
var v='0123456789.'
var isBasicSalaryValid=true;
while(e<basicSalary.length)
{
if(v.indexOf(basicSalary.charAt(e))==-1)
{
basicSalaryErrorSection.innerHTML='Invalid basic salary';
valid=false;
if(firstInvalidComponent==null) firstInvalidComponent=basicSalaryElement;
isBasicSalaryValid=false;
break;
}
e++;
}
if(isBasicSalaryValid)
{
var dot=basicSalary.indexOf('.');
if(dot!=-1)
{
var numberOfFractions=basicSalary.length-(dot+1);
if(numberOfFractions>2)
{
basicSalaryErrorSection.innerHTML='Invalid basic salary';
valid=false;
if(firstInvalidComponent==null) firstInvalidComponent=basicSalaryElement;
}
}
}
}

var panNumberElement=document.getElementById('panNumber');
var panNumber=panNumberElement.value.trim();
var panNumberErrorSection=document.getElementById('panNumberErrorSection');
panNumberErrorSection.innerHTML='';
if(panNumber.length==0)
{
panNumberErrorSection.innerHTML='PAN number required';
valid=false;
if(firstInvalidComponent==null) firstInvalidComponent=panNumberElement;
}
var aadharCardNumberElement=document.getElementById('aadharCardNumber');
var aadharCardNumber=aadharCardNumberElement.value.trim();
var aadharCardNumberErrorSection=document.getElementById('aadharCardNumberErrorSection');
aadharCardNumberErrorSection.innerHTML='';
if(aadharCardNumber.length==0)
{
aadharCardNumberErrorSection.innerHTML='Aadhar card number required';
valid=false;
if(firstInvalidComponent==null) firstInvalidComponent=aadharCardNumberElement;
}
if(!valid) firstInvalidComponent.focus();
return valid;

}
function cancelUpdate()
{
document.getElementById('forwardToView').submit();
}
function updateEmployee()
{
if(validateForm()==false) return;
var employeeId=document.getElementById('employeeId').value;
var name=document.getElementById('name').value.trim();
var designationCode=document.getElementById('designationCode').value;
var dateOfBirth=document.getElementById('dateOfBirth').value;
var gender;
var male=document.getElementById('male');
var female=document.getElementById('female');
if(male.checked==true) gender="M";
if(female.checked==true) gender="F";
var isIndian=document.getElementById('isIndian').value;
var basicSalary=document.getElementById('basicSalary').value;
var panNumber=document.getElementById('panNumber').value;
var aadharCardNumber=document.getElementById('aadharCardNumber').value;

var employee={
"employeeId" : employeeId,
"name" : name,
"designationCode" : designationCode,
"dateOfBirth" : dateOfBirth,
"gender" : gender,
"isIndian" : isIndian,
"basicSalary" : basicSalary,
"panNumber" : panNumber,
"aadharCardNumber" : aadharCardNumber
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
var employeeEditForm=document.getElementById('employeeEditForm');
employeeEditForm.remove();
}
else
{
var errors=responseData.error;
var panNumberErrorSection=document.getElementById('panNumberErrorSection');
var aadharCardNumberErrorSection=document.getElementById('aadharCardNumberErrorSection');
for(var i=0;i<errors.length;i++)
{
if(errors[i]=="Invalid designation")
{
document.getElementById('forwardToViewForm').submit();
}
if(errors[i]=="PAN number exists")
{
panNumberErrorSection.innerHTML='PAN number exists';
}
if(errors[i]=="Aadhar card number exists")
{
aadharCardNumberErrorSection.innerHTML='Aadhar card number exists';
}
}
}
}
else
{
alert('some problem');
}
}
};
xmlHttpRequest.open('POST','updateEmployee',true);
xmlHttpRequest.setRequestHeader("Content-Type","application/json");
xmlHttpRequest.send(JSON.stringify(employee));
}
window.addEventListener('load',authenticate);