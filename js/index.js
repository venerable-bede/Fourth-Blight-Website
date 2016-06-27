function validation() {
  var password = null;
  while (password != pass1) {

  var pass1="Realms1337";

  password=prompt('Please enter your password to view this page!',' ');

  if (password==pass1)
    alert('Password Correct! Click OK to enter!');
  else
     {
      window.location="http://www.pageresource.com/jscript/jpass.htm";
      }
  }
}
window.onpaint = validation();
