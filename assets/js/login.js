const loginBtnUser = document.querySelectorAll("a.login")
const login = document.querySelector("div.login")
const closeBtnLogin = document.querySelector(".btnClose")
loginBtnUser.forEach((btn => {
	
	btn.onclick = function() {
  
		login.classList.toggle("hidden")
	}
}))
closeBtnLogin.onclick = function() {
	login.classList.toggle("hidden")
}
