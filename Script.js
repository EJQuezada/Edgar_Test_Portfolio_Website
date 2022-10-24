let submitButton = document.querySelector('#submit-button');
function clickListener(event) {
	event.preventDefault();
	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

	let emailText = emailInput.value;
	let messageText = messageInput.value;

	console.log('email:', emailText, 'message:', messageText);
}
submitButton.addEventListener('click', clickListener);


function emailValidate(email) {
	if(email.includes('@')) {
		return true;
	} else {
		return false;
	}	
}

console.log(emailValidate('abc@xyz.com'));



 
