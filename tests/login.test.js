import LoginPage from '../page_objects/LoginPage';
import StartPage from '../page_objects/StartPage';
import * as c from '../utils/constants';

const loginPage = new LoginPage();
const startPage = new StartPage();

fixture `Todoist login`.page `https://www.todoist.com/`;

test('Login success', async t => {
    await loginPage.login(c.validEmail, c.validPass);
    await t.switchToMainWindow();
    await t.expect(startPage.topBar.exists).ok();
});

test('Enter invalid user and get error message', async t => {
    await loginPage.login(c.invalidUser, c.validPass);
    await t.expect(loginPage.errorMessage.innerText).contains(c.errorText);
});

test('Enter invalid password and get error message', async t => {
    await loginPage.login(c.invalidUser, c.validPass);
    await t.expect(loginPage.errorMessage.innerText).contains(c.errorText);
});

test('Enter invalid email', async t => {
    await loginPage.login(c.invalidEmail, c.validPass);
    await t.expect(loginPage.errorMessage.innerText).contains(c.errorTextEmail);
});

test('Login without email and pass', async t => {
    await loginPage.login(c.emptyText, c.emptyText);
    await t.expect(loginPage.errorMessage.innerText).contains(c.errorTextBlankFields);
});

test('Login with empty email', async t => {
    await loginPage.login(c.emptyText, c.invalidPass);
    await t.expect(loginPage.errorMessage.innerText).contains(c.errorTextBlankEmail);
})

test('Login with empty password', async t => {
    await loginPage.login(c.validEmail, c.emptyText);
    await t.expect(loginPage.errorMessage.innerText).contains(c.errorTextBlankPass);
});