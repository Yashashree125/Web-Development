var username = document.forms['form']['username'];
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var username_error = document.getElementById('username_error');
var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('password_error');

email.addEventListener('textInput', username_Verify);
email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', password_Verify);

function validated()
{

	if (username.value.length == 0) 
	{
		username.style.border = "1px solid red";
		username_error.style.display = "block";
		username.focus();
		return false;
	}
	if (email.value.length < 9) 
	{
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		password_error.style.display = "block";
		password.focus();
		return false;
	}

}

function username_Verify()
{
	if (username.value.length !=0) {
		username.style.border = "1px solid silver";
		username_error.style.display = "none";
		return true;
	}
}
function email_Verify()
{
	if (email.value.length >= 8) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		password_error.style.display = "none";
		return true;
	}
}

