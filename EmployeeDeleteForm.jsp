<script src='/stylethree/js/EmployeeDeleteForm.js'>

</script>
<!-- Content span starts here -->
<span id='contentSpan'>
<div id='content' hidden>
<span id='module' name='EMPLOYEE'></span>
<jsp:include page='/MasterPageTopSection.jsp' />

<!-- Employee Delete Form starts here -->
<span id='employeeDeleteFormSpan'>
<div id='employeeDeleteForm' hidden>
<h2>Employee (Delete Module)</h2>
<input type='hidden' id='employeeId' name='employeeId'>
Name : <b><span id='name'></span></b><br>
Designation : <b><span id='designation'></span></b><br>
Date of birth : <b><span id='dateOfBirth'></span></b><br>
Gender : <b><span id='gender'></span></b><br>
Nationality : <b><span id='nationality'></span></b><br>
Basic salary : <b><span id='basicSalary'></span></b><br>
PAN number : <b><span id='panNumber'></span></b><br>
Aadhar card number : <b><span id='aadharCardNumber'></span></b><br><br>
Are you sure you want to delete?<br>
<table>
<tbody>
<tr>
<td colspan='2'><button type='button' onclick='deleteEmployee()'>Yes</button>
&nbsp;&nbsp;<button type='Button' onclick='cancelDeletion()'>No</button></td>
</tr>
</tbody>
</table>

</div>
</span>
<!-- Employee Edit Form Span ends here -->
<!-- Notification span starts here -->

<span id='notificationSpan'>
<div id='notification'>
<h2>Employee (Delete Module)</h2>
Employee deleted<br>
<form action='/stylethree/Employees.jsp'>
<button>OK</button>
</form>
</div>
</span>
<!-- Notification span ends here -->
<jsp:include page='/MasterPageBottomSection.jsp' />
</div>
</span>
<!-- Content span ends here -->
<form id='myForm'></form>
<form id='forwardToView' action='/stylethree/Employees.jsp'></form>
<span id='formSpan'></span>