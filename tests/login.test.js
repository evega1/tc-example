import LoginPage from '../page_objects/LoginPage';
import StartPage from '../page_objects/StartPage';
import * as c from '../utils/constants';

const loginPage = new LoginPage();
const startPage = new StartPage();

fixture `Todoist login`.page `${c.BASE_URL}`;

test('Login success', async t => {
    await loginPage.login(c.VALID_EMAIL, c.VALID_PASSWORD);
    await t.switchToMainWindow();
    await t.expect(startPage.topBar.exists).ok();
});

test('Enter invalid user and get error message', async t => {
    await loginPage.login(c.INVALID_USER, c.VALID_PASSWORD);
    await t.expect(loginPage.errorMessage.innerText).contains(c.ERROR_MESSAGE);
});

test('Enter invalid password and get error message', async t => {
    await loginPage.login(c.VALID_EMAIL, c.INVALID_PASSWORD);
    await t.expect(loginPage.errorMessage.innerText).contains(c.ERROR_MESSAGE);
});

test('Enter invalid email', async t => {
    await loginPage.login(c.INVALID_EMAIL, c.VALID_PASSWORD);
    await t.expect(loginPage.errorMessage.innerText).contains(c.ERROR_MSG_INVALID_EMAIL);
});

test('Login without email and pass', async t => {
    await loginPage.login(c.EMPTY_TEXT, c.EMPTY_TEXT);
    await t.expect(loginPage.errorMessage.innerText).contains(c.ERROR_MSG_INVALID_EMAIL);
});

test('Login with empty email', async t => {
    await loginPage.login(c.EMPTY_TEXT, c.INVALID_PASSWORD);
    await t.expect(loginPage.errorMessage.innerText).contains(c.ERROR_MSG_INVALID_EMAIL);
})

test('Login with empty password', async t => {
    await loginPage.login(c.VALID_EMAIL, c.EMPTY_TEXT);
    await t.expect(loginPage.errorMessage.innerText).contains(c.ERROR_MSG_EMPTY_PASS);
});