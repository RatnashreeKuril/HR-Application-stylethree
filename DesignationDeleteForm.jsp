<script src='/stylethree/js/DesignationDeleteForm.js'>

</script>
<!-- Content span starts here -->
<span id='contentSpan'>
<div id='content' hidden>
<span id='module' name='DESIGNATION'></span>
<jsp:include page='/MasterPageTopSection.jsp' />

<!-- Designation Delete Form starts here -->
<span id='designationDeleteFormSpan'>
<div id='designationDeleteForm' hidden>
<h2>Designation (Delete Module)</h2>
<input type='hidden' id='code' name='code'>
Designation : <b><span id='title'></span></b><br>
Are you sure you want to delete designation?
<table id='buttonsTable'>
<tbody>
<tr>
<td>
<button type='button' onclick='deleteDesignation()' id='buttonOne'>
<span id='buttonOneText' >Yes</span></button>
</td>
<td>
<button type='Button' onclick='cancelDeletion()' id='buttonTwo'><span id='buttonTwoText'>No</span></button>
</td>
</tr>
</tbody>
</table>
</div>
</span>
<!-- Designation Delete Form Span ends here -->
<!-- Notification span starts here -->

<span id='notificationSpan'>
<div id='notification'>
<h2>Designation (Delete Module)</h2>
Designation deleted<br>
<form action='/stylethree/Designations.jsp'>
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
<form id='forwardToView' action='/stylethree/Designations.jsp'></form>
<span id='formSpan'></span>