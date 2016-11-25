/* function.js*/

var oValue;
function f2(image) {
	document.getElementById("content").innerHTML="<img class='img_content' src='"+image+ "'/>";
}
function validateName() {
	
	fName="";
	lName="";
	add="";
	code="";
	male="";
	female="";
	var fName=document.frm_Records.tb_fName.value;
	var lName=document.frm_Records.tb_lName.value;
	var add=document.frm_Records.tb_add1.value;
	var code=document.frm_Records.tb_code.value;

	var txt="";
	var txt2="";
	

	if(fName=="First Name") {
		if(lName=="Last Name")
			txt="Please enter your first and last name";
		else
			txt="Please enter your first name";
	}
	else if(lName=="Last Name")
		txt="Please enter your last name";

	else{
		if(checkInvalidChar(fName)==false && checkInvalidChar(lName)==false)
			txt="confirm";
			
		else
			txt="The name you typed is invalid";
	}
	

	if(add=="address") {
		if(code=="zip code")
			txt2="Please enter your address and area code";
		else
			txt2="Please enter your address";
	}
	else if(code=="zip code")
		txt2="Please enter your area code";

	else{
		if(checkInvalidChar(add)==false && checkInvalidChar(code)==false)
			txt="confirm";
			
		
	}
	
	
	
	
	
	document.getElementById('response_txt').innerHTML=txt;
	document.getElementById('response_txt').style.color='red';
	document.getElementById('response_txt2').innerHTML=txt2;
	document.getElementById('response_txt2').style.color='red';

}

function checkInvalidChar(someString) {
	var invalids="`!@#$%^&*()_+?><,.;:{}[]|1234567890";
	for(var x=0;x<invalids.length;x++)
		for(var y=0;y<someString.length;y++){
			if(invalids.charAt(x)==someString.charAt(y))return true;
		}
	return false;
}

function clearInput(obj) {
	switch(obj) {
		case 1: oValue=document.frm_Records.tb_fName.value;
				if(document.frm_Records.tb_fName.value=="First Name")
				document.frm_Records.tb_fName.value="";
				break;
		case 2: oValue=document.frm_Records.tb_lName.value
				if(document.frm_Records.tb_lName.value=="Last Name")
				document.frm_Records.tb_lName.value="";
				break;
		case 3: oValue=document.frm_Records.tb_add1.value;
				if(document.frm_Records.tb_add1.value=="address")
				document.frm_Records.tb_add1.value="";
				break;
		case 4: oValue=document.frm_Records.tb_code.value
				if(document.frm_Records.tb_code.value=="zip code")
				document.frm_Records.tb_code.value="";
				break;
	}
}

function restoreValue(obj) {

	switch(obj) {
		case 1: if(document.frm_Records.tb_fName.value!=""){
					oValue=document.frm_Records.tb_fName.value;
					document.frm_Records.tb_fName.style.color="black";
				}
				document.frm_Records.tb_fName.value=oValue;
				break;
		case 2: if(document.frm_Records.tb_lName.value!="") {
					oValue=document.frm_Records.tb_lName.value;
					document.frm_Records.tb_lName.style.color="black";
				}
				document.frm_Records.tb_lName.value=oValue;
				break;
		case 3: if(document.frm_Records.tb_add1.value!=""){
					oValue=document.frm_Records.tb_add1.value;
					document.frm_Records.tb_add1.style.color="black";
				}
				document.frm_Records.tb_add1.value=oValue;
				break;
		case 4: if(document.frm_Records.tb_code.value!="") {
					oValue=document.frm_code.tb_code.value;
					document.frm_Records.tb_code.style.color="black";
				}
				document.frm_Records.tb_code.value=oValue;
				break;
	}
}






	
