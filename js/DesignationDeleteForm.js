var designationEditForm;
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
getDesignationDeleteForm();
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

function getDesignationDeleteForm()
{
var myForm=document.getElementById('myForm');
var action=myForm.action;
var i=action.indexOf('=');
var code=action.substring(i+1);
var xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
var response=JSON.parse(this.responseText);
if(response.success)
{

var designationDeleteForm=document.getElementById('designationDeleteForm');
designationDeleteForm.hidden=false;
var codeElement=document.getElementById('code');
var designation=response.result;
codeElement.value=designation.code;
var titleElement=document.getElementById('title');
titleElement.innerHTML=designation.title;
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
var requestURL='confirmDeleteDesignation?code='+encodeURI(code);
xmlHttpRequest.open('GET',requestURL,true);
xmlHttpRequest.send();
}

function cancelDeletion()
{
document.getElementById('forwardToView').submit();
}
function deleteDesignation()
{
var code=document.getElementById('code').value;
var designation={
"code" : code
};
var xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
var response=JSON.parse(this.responseText);
if(response.success)
{
var notificationSpan=document.getElementById('notificationSpan');
notificationSpan.appendChild(notification);
var designationDeleteForm=document.getElementById('designationDeleteForm');
designationDeleteForm.remove();
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
xmlHttpRequest.open('POST','deleteDesignation',true);
xmlHttpRequest.setRequestHeader("Content-Type","application/json");
xmlHttpRequest.send(JSON.stringify(designation));
}
window.addEventListener('load',authenticate);
