function validateForm() {
	var fname = document.forms["Form"]["firstname"].value;	//get the value form firstname
	var lname = document.forms["Form"]["lastname"].value;	//get the value form lastname
	var email = document.forms["Form"]["email"].value;	//get the value form email
	var gender = document.forms["Form"]["gender"].value;	//get the value form gender
	var message = document.forms["Form"]["message"].value;	//get the value form massage

	if (fname == "" || lname == "" || message == ""){	//cheek if the user has enter any empty fields
		alert("Empty fields found. Please complete the form.");
	}
	else{
		alert("Thank you for your feedback.");
	}
}

function display_date(){
	document.getElementById('date').innerHTML = Date();
	setTimeout(display_date,1000);
}
display_date();