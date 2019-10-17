import LoginPage from '../page_objects/LoginPage';
import StartPage from '../page_objects/StartPage';
import * as c from '../utils/constants';
import * as helpers from '../utils/data-helpers';

const loginPage = new LoginPage();
const startPage = new StartPage();

fixture `Create new task in dashboard`.page `https://www.todoist.com/`;

test('Create new task', async t => {
    let taskText = helpers.getRandomText();
    await loginPage.login(c.validEmail, c.validPass);
    await t.switchToMainWindow();

    await startPage.addNewTask(taskText, helpers.getDayAndMonth());
    await t.expect(startPage.taskItems
                .nth(c.lastTaskIndex).innerText).contains(taskText);
});