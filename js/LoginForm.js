function login()
{
var username=document.getElementById('username').value.trim();
var usernameErrorSection=document.getElementById('usernameErrorSection');
usernameErrorSection.innerHTML="";
var password=document.getElementById('password').value.trim();
var passwordErrorSection=document.getElementById('passwordErrorSection');
passwordErrorSection.innerHTML="";
if(username.length==0 || password.length==0)
{
if(username.length==0) usernameErrorSection.innerHTML="Required";
if(password.length==0) passwordErrorSection.innerHTML="Required";
return;
}
var administrator={
"username" : username,
"password" : password
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
var form=document.getElementById('form');
form.submit();

}
else
{
var errorSpan=document.getElementById('errorSpan');
errorSpan.innerHTML=splits[1];
}
}
else
{
alert('some problem');
}
}

};

xmlHttpRequest.open('POST','login',true);
xmlHttpRequest.setRequestHeader("Content-Type","application/json");
xmlHttpRequest.send(JSON.stringify(administrator));
}


