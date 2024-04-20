<!DOCTYPE HTML>
<html lang='en'>
<head>
<meta charset='utf-8'>
<title>HR Application</title>
<script src='/stylethree/js/LoginForm.js'>

</script>

<link rel='stylesheet' type='text/css' href='/stylethree/css/styles.css'>
</head>
<body>
<div class='main-container'>
<img src='/stylethree/images/logo.png' class='logo'><div class='brand-name'>Thinking 
Machines</div>
<center>
<h2>Administrator</h2>

<div class='login-panel'>

<table>
<tr>
<td colspan='2' align='center'>
<span class='error' id='errorSpan'>
</span>
</td>
</tr>
<tr>
<td>Username</td>
<td><input type='text' name='username' id='username'></td>
<td><span class='error' id='usernameErrorSection'></span></td>
</tr>
<tr>
<td>Password</td>
<td><input type='password' name='password' id='password'></td>
<td><span class='error' id='passwordErrorSection'></span></td>
</tr>
<tr>
<td colspan='2' align='center'>
<button type='button' onclick='login()'>Login</button>
</td>
</tr>
</table>
<form id='form' action='/stylethree/index.jsp'></form>

</div>
</center>
</div>
</body>
</html>