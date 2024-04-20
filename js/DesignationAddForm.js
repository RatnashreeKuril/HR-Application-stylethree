window.addEventListener('load',authenticate);
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



function validateForm()
{
var titleElement=document.getElementById("title");
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
function cancelAddition()
{
document.getElementById('cancelAdditionForm').submit();
}
function addDesignation()
{
if(validateForm()==false) return;
var titleInput=document.getElementById('title');
var title=titleInput.value.trim();
var designation={
"code" : 0,
"title" : title
};
var xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
var response=JSON.parse(this.responseText);
if(response.success==false)
{
titleErrorSection.innerHTML=response.error[0];
}
else
{
titleInput.remove();

var buttonOneText=document.getElementById('buttonOneText');
buttonOneText.innerHTML='Yes';
var buttonOne=document.getElementById('buttonOne');
buttonOne.remove();

var formOne=document.createElement('form');
formOne.action='/stylethree/DesignationAddForm.jsp';
buttonOne.type='submit';
formOne.appendChild(buttonOne);

var formTwo=document.createElement('form');
formTwo.action='/stylethree/Designations.jsp';
var buttonTwoText=document.getElementById('buttonTwoText');
buttonTwoText.innerHTML='No';
var buttonTwo=document.getElementById("buttonTwo");
buttonTwo.remove();
buttonTwo.type='submit';
formTwo.appendChild(buttonTwo);


var table=document.getElementById('buttonsTable');
var tableBody=table.getElementsByTagName('tbody')[0];
var tableRow=tableBody.getElementsByTagName('tr')[0];
var tableCells=tableRow.getElementsByTagName('td');


var tableCellOne=tableCells[0];
tableCellOne.appendChild(formOne);
var tableCellTwo=tableCells[1]
tableCellTwo.appendChild(formTwo);
tableRow.appendChild(tableCellOne);
tableRow.appendChild(tableCellTwo);


tableBody.appendChild(tableRow);
table.append(tableBody);




var messageSpan=document.getElementById("messageSpan");
messageSpan.innerHTML="Designation added, add more?";

}

}
else
{
alert('some problem');
}
}
};
xmlHttpRequest.open('POST','addDesignation',true);
xmlHttpRequest.setRequestHeader("Content-Type","application/json");
xmlHttpRequest.send(JSON.stringify(designation));
}
