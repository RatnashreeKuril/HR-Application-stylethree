<script src='/stylethree/js/DesignationAddForm.js'>
</script>
<span id='contentSpan'>
<span id='content' hidden>
<span id='module' name='DESIGNATION'></span>
<jsp:include page='/MasterPageTopSection.jsp' />
<h2>Designation (Add Module)</h2>
<span class='error' id='errorSpan'></span>
<span id='messageSpan'>Designation</span>
<input type='text' id='title' name='title' maxLength='35' size='36'>
<span id='titleErrorSection' class='error'></span><br>
<table id='buttonsTable'>
<tbody>
<tr>
<td>
<button type='button' onclick='addDesignation()' id='buttonOne'>
<span id='buttonOneText' >Add</span></button>
</td>
<td>
<button type='Button' onclick='cancelAddition()' id='buttonTwo'><span id='buttonTwoText'>Cancel</span></button>
</td>
</tr>
</tbody>
</table>
</span>
<form id='cancelAdditionForm' action='/stylethree/Designations.jsp'>
</form>
<jsp:include page='/MasterPageBottomSection.jsp' />
</span>
</span>

<span id='formSpan'></span>