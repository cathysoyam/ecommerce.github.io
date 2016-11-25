/* xsample6.js */


function validateName() {
	var fName=document.frm_Names.tb_fName.value;
	var lName=document.frm_Names.tb_lName.value;
	var txt="";

	if(fName=="") {
		if(lName=="")
			txt="Please enter your name and email";
		else
			txt="Please enter your name";
	}
	else if(lName=="")
		txt="Please enter your email";

	else{
		if(checkInvalidChar(fName)==false && checkInvalidChar(lName)==false)
			txt=""+fName+" your message has been send to  "+lName;
			
		else
			txt="The name you typed is invalid";
	}
	
	document.getElementById('response_txt').innerHTML=txt;
	document.getElementById('response_txt').style.color='red';
}

function checkInvalidChar(someString) {
	var invalids="`!@#$%^&*()_+?><,.;:{}[]|1234567890\/";
	for(var x=0;x<invalids.length;x++)
		for(var y=0;y<someString.length;y++){
			if(invalids.charAt(x)==someString.charAt(y))return true;
		}
	return false;
}