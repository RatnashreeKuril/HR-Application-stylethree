function authenticate()
{
var xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
var responseData=this.responseText;
var splits=responseData.split(",");
if(splits[0]==0)
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
window.addEventListener('load',authenticate);