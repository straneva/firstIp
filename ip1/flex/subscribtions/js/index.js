const users = [
	{ id: 1, name: 'Алексей', friends: [] },
	{ id: 2, name: 'Мария', friends: [] },
	{ id: 3, name: 'Иван', friends: [] },
];

// Функция добавления друга
function addFriend(userId, friendId) {
	const user = users.find(u => u.id === userId);
	const friend = users.find(u => u.id === friendId);

	if (!user) {
		console.log('Пользователь не найден!');
		return;
	}

	if (!friend) {
		console.log('Друг не найден!');
		return;
	}

	if (user.friends.includes(friendId)) {
		console.log(`${friend.name} уже в друзьях у ${user.name}`);
	} else {
		user.friends.push(friendId);
		console.log(`${friend.name} добавлен в друзья у ${user.name}`);
	}
}

// Пример использования
addFriend(1, 2); // Мария добавлена в друзья у Алексей
addFriend(1, 3); // Иван добавлен в друзья у Алексей
addFriend(1, 2); // Мария уже в друзьях у Алексей