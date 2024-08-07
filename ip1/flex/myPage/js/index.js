document.getElementById('savePost').addEventListener('click', function () {
	const postContent = document.getElementById('postContent').value;
	if (postContent) {
		document.getElementById('postDisplay').innerHTML = `
            <div>
                <p>${postContent}</p>
                <button class="editPost">Редактировать</button>
            </div>
        `;

		document.getElementById('postContent').value = '';

		document.querySelector('.editPost').addEventListener('click', function () {
			document.getElementById('postContent').value = postContent;
			document.getElementById('postDisplay').innerHTML = '';
		});
	} else {
		alert('Пожалуйста, напишите что-нибудь!');
	}
});

document.getElementById('saveComment').addEventListener('click', function () {
	const commentContent = document.getElementById('commentContent').value;
	if (commentContent) {
		const commentsDisplay = document.getElementById('commentsDisplay');
		commentsDisplay.innerHTML += `<p>${commentContent}</p>`;

		document.getElementById('commentContent').value = '';
	} else {
		alert('Пожалуйста, напишите комментарий!');
	}
});

const subscriptions = [
	{ id: 1, name: 'Канал 1' },
	{ id: 2, name: 'Канал 2' },
	{ id: 3, name: 'Канал 3' },
	{ id: 4, name: 'Канал 4' }
];

function generateSubscriptionList(subscriptions) {
	const listElement = document.getElementById('subscriptionList');

	listElement.innerHTML = '';

	subscriptions.forEach(subscription => {
		const listItem = document.createElement('li');
		listItem.textContent = subscription.name;
		listElement.appendChild(listItem);
	});
}

window.onload = function () {
	generateSubscriptionList(subscriptions);
};

