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
getDesignationEditForm();
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

function getDesignationEditForm()
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
if(response.success==false)
{
document.getElementById('forwardToView').submit();
}
else
{
var designation=response.result;
var designationEditForm=document.getElementById('designationEditForm');
designationEditForm.hidden=false;
var codeElement=document.getElementById('code');
codeElement.value=designation.code;
var titleElement=document.getElementById('title');
titleElement.value=designation.title;
}

}
else
{
alert('some problem');
}
}
};
var requestURL='editDesignation?code='+encodeURI(code);
xmlHttpRequest.open('GET',requestURL,true);
xmlHttpRequest.send();
}
function validateForm()
{
var titleElement=document.getElementById('title');
var title=titleElement.value.trim();
var titleErrorSection=document.getElementById('titleErrorSection');
titleErrorSection.innerHTML='';
if(title.length==0)
{
titleErrorSection.innerHTML='Required';
titleElement.focus();
return false;
}
return true;
}
function cancelUpdate()
{
document.getElementById('forwardToView').submit();
}
function updateDesignation()
{
if(validateForm()==false) return;
var code=document.getElementById('code').value;
var title=document.getElementById('title').value.trim();
var designation={
"code" : code,
"title" : title
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
var designationEditForm=document.getElementById('designationEditForm');
designationEditForm.remove();
}
else
{
titleErrorSection.innerHTML=response.error[0];
}
}
else
{
alert('some problem');
}
}
};
xmlHttpRequest.open('POST','updateDesignation',true);
xmlHttpRequest.setRequestHeader("Content-Type","application/json");
xmlHttpRequest.send(JSON.stringify(designation));
}
window.addEventListener('load',authenticate);
