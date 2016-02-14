/* Lab 5 JavaScript File 
   Place variables and functions in this file */
function XOR(p,q){
    return ((p||q)&&!(p&&q));
}
function validate(formObj) {
  // put your validation code here
  // it will be a series of if statements
  
  if (formObj.firstName.value == "") {
    alert("You must enter a first name");
    formObj.firstName.focus();
    return false;
  }
  if (formObj.lastName.value == "") {
  	alert("You must enter a last name")
  	formObj.lastName.focus();
  	return false;
  }
  if (formObj.title.value == "") {
  	alert("You must enter a title");
    formObj.title.focus();
  	return false;
  }
  if (formObj.org.value == "") {
  	alert("You must enter a organization");
    formObj.org.focus();
  	return false;
  }  
  if (formObj.pseudonym.value == "") {
  	alert("You must enter a pseudonym");
    formObj.pseudonym.focus();
  	return false;
  }
  if (XOR(formObj.comments.value == "",formObj.comments.value == "Please enter your comments")) {
  	alert("You must enter comments");
    formObj.comments.focus();
  	return false;
  }
  return true;
}
function alertSuccess(formObj)	{
	alert("Form successfully submitted!");
}
function firstLastIsNickname(formObj){
  alert(firstName.value+" "+lastName.value+" is "+pseudonym.value);
}
function clearText(element){
  if (element.value== 'Please enter your comments') {
    element.value= '';
  }
}
