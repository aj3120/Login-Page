function confirm(password,confirmPassword){
	if(password==confirmPassword){
		return 1;

	}
	else{
		return 0;
	}

}

function registerFunction(){
	var token;
	var email=document.getElementById('email').value;
	var password=document.getElementById('password').value;
	var confirmPassword=document.getElementById('confirmPassword').value;
	var status=confirm(password,confirmPassword);
	if(status==1){
		var xhttp=new XMLHttpRequest();
		var data={
			"email":email,
			"password":password
		};
		xhttp.onreadystatechange=function(){
			if(this.readyState==4 && this.status==201){
				tokenResponse=this.responseText;
				console.log(tokenResponse);
				tokenResponse=JSON.parse(tokenResponse);
				token2=tokenResponse["token"];
				console.log(token2);
				localStorage.setItem('token-register',token2);
			}
			else
			{
			document.getElementById('error').innerHTML="Missing email or password";
			}
		};

		xhttp.open("POST","https://reqres.in/api/register",true);
		xhttp.setRequestHeader("Content-type", "application/JSON");
		xhttp.send(JSON.stringify(data));
	}
  else{
  	alert("Passwords are not matching");
  }	
}