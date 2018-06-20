function loginFunction(){
	var token;
	var email=document.getElementById('email').value;
	var password=document.getElementById('password').value;
	var xhttp=new XMLHttpRequest();
	var data={
		"email":email,
		"password":password
	};
	xhttp.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200){
			document.getElementById('error').innerHTML="";
			tokenResponse=this.responseText;
			console.log(tokenResponse);
			tokenResponse=JSON.parse(tokenResponse);
			token1=tokenResponse["token"];
			console.log(token1);
			localStorage.setItem('token-login',token1);
		}
		else
		{
			document.getElementById('error').innerHTML="Missing password";
		}
	};
	xhttp.open("POST","https://reqres.in/api/login",true);
	xhttp.setRequestHeader("Content-type", "application/JSON");
	xhttp.send(JSON.stringify(data));
}