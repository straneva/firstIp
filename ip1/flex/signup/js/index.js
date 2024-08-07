const users = [];

document.getElementById('registerForm').addEventListener('submit', function (event) {
	event.preventDefault();

	const username = document.getElementById('registerUsername').value;
	const password = document.getElementById('registerPassword').value;

	const existingUser = users.find(user => user.username === username);
	if (existingUser) {
		document.getElementById('message').innerText = 'Пользователь с таким именем уже существует!';
		return;
	}

	users.push({ username: username, password: password });
	document.getElementById('message').innerText = 'Регистрация прошла успешно!';
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
	event.preventDefault();

	const username = document.getElementById('loginUsername').value;
	const password = document.getElementById('loginPassword').value;

	const user = users.find(user => user.username === username && user.password === password);
	if (user) {
		document.getElementById('message').innerText = `Добро пожаловать, ${username}!`;
	} else {
		document.getElementById('message').innerText = 'Неверное имя пользователя или пароль.';
	}
});