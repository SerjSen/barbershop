var link = document.querySelector('.login');
 close = document.querySelector('.modal-content-close');
 popup = document.querySelector('.modal-content');
 overlay = document.querySelector('.modal-overlay');
 login = document.querySelector('[name=login]');
 password = document.querySelector('[name=password]');
 form = document.querySelector('.login-form');
 logVal = localStorage.getItem('login');


link.addEventListener('click', function(e){
	e.preventDefault();
	popup.classList.add('modal-content-show');
	overlay.classList.add('modal-content-show');
	if(logVal){
		login.value = logVal;
		password.focus();
	}	else {
		login.focus();
	}

});

close.addEventListener('click', function(e){
	popup.classList.remove('modal-content-show');
	overlay.classList.remove('modal-content-show');
	popup.classList.remove('modal-error');

});

form.addEventListener('submit', function(e){
	
	if(!login.value || !password.value){
		e.preventDefault();
		console.log('Введите логин и пароль');
		popup.classList.add('modal-error');
	
	} else {
		localStorage.setItem("login", login.value)
	}
	
});

window.addEventListener('keydown', function(e){
	console.log(e.keyCode);
	if(e.keyCode === 27) {
		popup.classList.remove('modal-content-show');
		overlay.classList.remove('modal-content-show');
		popup.classList.remove('modal-error');

	}
});

overlay.addEventListener('click', function(e){
	popup.classList.remove('modal-content-show');
	overlay.classList.remove('modal-content-show');
	popup.classList.remove('modal-error');

});