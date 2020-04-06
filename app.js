let form = document.querySelector('#mainForm');
console.log('this is linked');
form.addEventListener('submit', function(event) {
	event.preventDefault();

	let url = document.querySelector('#URL');
	let topText = document.querySelector('#topText');
	let bottomText = document.querySelector('#bottomText');

	newDiv = document.createElement('div');
	newDiv.classList.add('content-wrapper');

	newTopText = document.createElement('p');
	newTopText.classList.add('topText');
	newTopText.innerText = topText.value.toUpperCase();

	newBottomText = document.createElement('p');
	newBottomText.classList.add('bottomText');
	newBottomText.innerText = bottomText.value.toUpperCase();

	newImage = document.createElement('img');
	newImage.src = document.querySelector('#URL').value;

	newRemoveBtn = document.createElement('button');
	newRemoveBtn.classList.add('btn');
	newRemoveBtn.classList.add('btn-danger');
	newRemoveBtn.classList.add('remove');
	newRemoveBtn.innerText = 'Remove Meme';
	newRemoveBtn.addEventListener('click', remove, event);

	let contentDiv = document.querySelector('#content');
	contentDiv.appendChild(newDiv);
	newDiv.appendChild(newImage);
	newDiv.appendChild(newTopText);
	newDiv.appendChild(newBottomText);
	newDiv.appendChild(newRemoveBtn);

	url.value = '';
	topText.value = '';
	bottomText.value = '';
});

function remove(event) {
	eventTarget = event.target;
	let toDelete = eventTarget.parentElement;
	let deleteImage = toDelete.querySelector('img');
	toDelete.removeChild(deleteImage);
}
