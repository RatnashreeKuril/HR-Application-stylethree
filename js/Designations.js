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
if(designations.length==0) return;
var designationsTable=document.getElementById('designationsTable');
var designationsTableBody=designationsTable.getElementsByTagName('tbody')[0];
var designationsTableBodyRowTemplate=designationsTableBody.getElementsByTagName('tr')[0];
designationsTableBodyRowTemplate.remove();
var dynamicRow;
var dynamicRowCells;
var placeHolderFor;
var dynamicRowCell;
for(var i=0;i<designations.length;i++)
{
dynamicRow=designationsTableBodyRowTemplate.cloneNode(true);
designationsTableBody.appendChild(dynamicRow);
dynamicRowCells=dynamicRow.getElementsByTagName("td");
for(var k=0;k<dynamicRowCells.length;k++)
{
dynamicRowCell=dynamicRowCells[k];
placeHolderFor=dynamicRowCell.getAttribute('placeHolderId');
if(placeHolderFor==null) continue;
if(placeHolderFor=='serialNumber') dynamicRowCell.innerHTML=(i+1);
if(placeHolderFor=='title') dynamicRowCell.innerHTML=designations[i].title;
if(placeHolderFor=='editOption') dynamicRowCell.innerHTML="<a href='/stylethree/DesignationEditForm.jsp?code="+designations[i].code+"'>Edit</a>";


if(placeHolderFor=='deleteOption') dynamicRowCell.innerHTML="<a href='/stylethree/DesignationDeleteForm.jsp?code="+designations[i].code+"'>Delete</a>";
}



}


}
}

};
xmlHttpRequest.open('GET','designationsView',true);
xmlHttpRequest.send();
}
window.addEventListener('load',authenticate);