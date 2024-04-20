<script src='/stylethree/js/Designations.js'>

</script>

<span id='contentSpan'>
<span id='content' hidden>
<span id='module' name='DESIGNATION'></span>
<jsp:include page='/MasterPageTopSection.jsp' />


<h2>Designations</h2>
<table border='1' id='designationsTable'>
<thead>
<tr>
<th colspan='4' style='text-align:right;padding:5px'><a href='/stylethree/DesignationAddForm.jsp'>Add new designation</a></th>
</tr>
<tr>
<th style='width:60px;text-align:center'>S.No.</th>
<th style='width:200px;text-align:center'>Designation</th>
<th style='width:100px;text-align:center'>Edit</th>
<th style='width:100px;text-align:center'>Delete</th>
</tr>
</thead>
<tbody>

<tr>
<td style='text-align:right' placeHolderId='serialNumber'></td>
<td placeHolderId='title'></td>
<td style='text-align:center' placeHolderId='editOption'></td>
<td style='text-align:center' placeHolderId='deleteOption'></td>
</tr>
</tbody>
</table>

<jsp:include page='/MasterPageBottomSection.jsp' />
</span>
</span>

<span id='formSpan'></span>