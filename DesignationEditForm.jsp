<script src='/stylethree/js/DesignationEditForm.js'>

</script>
<!-- Content span starts here -->
<span id='contentSpan'>
<div id='content' hidden>
<span id='module' name='DESIGNATION'></span>
<jsp:include page='/MasterPageTopSection.jsp' />

<!-- Designation Edit Form starts here -->
<span id='designationEditFormSpan'>
<div id='designationEditForm' hidden>
<h2>Designation (Edit Module)</h2>
<span class='error' id='errorSpan'></span>
Designation
<input type='hidden' id='code' name='code'>
<input type='text' id='title' name='title' maxLength='35' size='36'>
<span id='titleErrorSection' class='error'></span><br>
<table id='buttonsTable'>
<tbody>
<tr>
<td>
<button type='button' onclick='updateDesignation()' id='buttonOne'>
<span id='buttonOneText' >Update</span></button>
</td>
<td>
<button type='Button' onclick='cancelUpdate()' id='buttonTwo'><span id='buttonTwoText'>Cancel</span></button>
</td>
</tr>
</tbody>
</table>
</div>
</span>
<!-- Designation Edit Form Span ends here -->
<!-- Notification span starts here -->

<span id='notificationSpan'>
<div id='notification'>
<h2>Designation (Edit Module)</h2>
Designation updated<br>
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