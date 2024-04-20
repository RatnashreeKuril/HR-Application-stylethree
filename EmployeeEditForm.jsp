<script src='/stylethree/js/EmployeeEditForm.js'>

</script>
<!-- Content span starts here -->
<span id='contentSpan'>
<div id='content' hidden>
<span id='module' name='EMPLOYEE'></span>
<jsp:include page='/MasterPageTopSection.jsp' />

<!-- Employee Edit Form starts here -->
<span id='employeeEditFormSpan'>
<div id='employeeEditForm' hidden>
<h2>Employee (Edit Module)</h2>
<span class='error' id='errorSpan'></span>
<input type='hidden' id='employeeId' name='employeeId'>
<table>
<tbody>
<tr>
<td>Name</td>
<td><input type='text' id='name' name='name' maxlength='50' size='51'>
<span id='nameErrorSection' class='error'></span></td>
</tr>
<tr>
<td>Designation</td>
<input type='hidden' name='designation' id='designation'>
<td><select id='designationCode' name='designationCode'>
<option selected id='selectedDesignation'></option>
</select>
<span id='designationCodeErrorSection' class='error'></span></td>
</tr>
<tr>
<td>Date of birth</td>
<td><input type='date' id='dateOfBirth' name='dateOfBirth'>
<span id='dateOfBirthErrorSection' class='error'></span>
</td>
</tr>
<tr>
<td>Gender</td>
<td>
<input type='radio' id='male' name='gender' value='M'> Male
&nbsp;&nbsp;&nbsp;&nbsp
<input type='radio' id='female' name='gender' value='F'> Female


<span id='genderErrorSection' class='error'></span>
</td>
</tr>

<tr>
<td>Indian</td>
<td>

<input type='checkbox' id='isIndian' name='isIndian' value='Y'>

</td>
</tr>
<tr>
<td>Basic salary</td>
<td>
<input type='text' id='basicSalary' name='basicSalary' style='text-align:right' maxlength='12' size='13' >
<span id='basicSalaryErrorSection' class='error'></span>
</td>
</tr>
<tr>
<td>PAN Number</td>
<td>
<input type='text' id='panNumber' name='panNumber' maxlength='15' size='16' >
<span id='panNumberErrorSection' class='error'></span>
</td>
</tr>

<tr>
<td>Aadhar card Number</td>
<td>
<input type='text' id='aadharCardNumber' name='aadharCardNumber' maxlength='15' size='16'>
<span id='aadharCardNumberErrorSection' class='error'></span>
</td>
</tr>

<tr>
<td colspan='2'><button type='button' onclick='updateEmployee()'>Update</button>
&nbsp;&nbsp;<button type='Button' onclick='cancelUpdate()'>Cancel</button></td>
</tr>
</tbody>
</table>

</div>
</span>
<!-- Employee Edit Form Span ends here -->
<!-- Notification span starts here -->

<span id='notificationSpan'>
<div id='notification'>
<h2>Employee (Edit Module)</h2>
Employee updated<br>
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