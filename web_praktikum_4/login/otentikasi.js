function login() {
	username = document.getElementById("username").value;
	password = document.getElementById("password").value;

	if (username == "" || password == "") {
		alert("Username / Password Tidak Boleh Kosong");
		return false;
	}
	else if (password.length < 8) {
		alert("Password Minimal Dari 8 Karakter");
		return false;
	}
	else if (username == "Rudi irawan" && password == "123456789") {
		window.location = "sukses.html";
		return false;
	} else {
		alert("Username / Password yang anda masukan salah");
	}
}
