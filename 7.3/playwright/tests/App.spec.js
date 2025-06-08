// tests/auth/login.spec.js
const {
	test,
	expect
} = require('@playwright/test');
const {
	email,
	password
} = require('../user');

test('Успешная авторизация', async ({
	page
}) => {
	await page.goto('https://netology.ru');

	// Открываем форму авторизации
	await page.click('text=Войти');

	// Ждем появления всех необходимых элементов

	await page.waitForSelector('input[name="email"]', {
		visible: true,
		timeout: 5000
	});
	await page.waitForSelector('input[name="password"]', {
		visible: true,
		timeout: 5000
	});

	// Заполняем поля
	await page.fill('input[name="email"]', email);
	await page.fill('input[name="password"]', password);

	// Кликаем по кнопке
	await page.click('button[type="submit"]');
	//await page.pause();

	// Проверяем успешную авторизацию
	await expect(page).toHaveURL(/profile/);

});

test('Неуспешная авторизация', async ({
	page
}) => {
	await page.goto('https://netology.ru');

	// Открываем форму авторизации
	await page.click('text=Войти');

	// Ждем появления всех необходимых элементов
	await page.waitForSelector('input[name="email"]', {
		visible: true,
		timeout: 5000
	});
	await page.waitForSelector('input[name="password"]', {
		visible: true,
		timeout: 5000
	});

	// Заполняем форму неверными данными
	await page.fill('input[name="email"]', 'wrong@email.com');
	await page.fill('input[name="password"]', 'wrongpassword');

	// Кликаем по кнопке
	await page.click('button[type="submit"]');

	// Проверяем сообщение об ошибке
	await expect(page.getByTestId('login-error-hint')).toHaveText('Вы ввели неправильно логин или пароль.');
});