<script src='/stylethree/js/EmployeeAddForm.js'>

</script>
<span id='contentSpan'>
<span id='content' hidden>
<span id='module' name='EMPLOYEE'></span>
<jsp:include page='/MasterPageTopSection.jsp' />

<span id='employeeAddFormSpan'>
<h2>Employee (Add Module)</h2>
<table id='employeeAddForm'>
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
<option selected value='-1'>&lt;Select Designation&gt;</option>
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
<td colspan='2'><button type='button' onclick='addEmployee()'>Add</button>
&nbsp;&nbsp;<button type='Button' onclick='cancelAddition()'>Cancel</button></td>
</tr>
</tbody>
</table>
</span>
<span id='notificationSpan'>
<div id='notification'>
Employee added, add more?<br>
<table>
<tbody>
<tr>
<td>
<form action='/stylethree/EmployeeAddForm.jsp'>
<button type='submit'>Yes</button>
</form>
</td>
<td>
<form action='/stylethree/Employees.jsp'>
<button type='submit'>No</button>
</td>
</form>
</tr>
</tbody>
</table>

</div>
</span>
<form id='cancelAdditionForm' action='/stylethree/Employees.jsp'>
</form>


<jsp:include page='/MasterPageBottomSection.jsp' />
</span>
</span>
<form action='/stylethree/Employees.jsp' id='forwardToViewForm'>
</form>
<span id='formSpan'></span>