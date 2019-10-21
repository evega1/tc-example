import LoginPage from '../page_objects/LoginPage';
import StartPage from '../page_objects/StartPage';
import * as c from '../utils/constants';
import * as helpers from '../utils/data-helpers';

const loginPage = new LoginPage();
const startPage = new StartPage();

fixture `New tasks creation in dashboard`.page `${c.BASE_URL}`;

test('Create new task', async t => {
    let taskText = helpers.getRandomText();
    await loginPage.login(c.VALID_EMAIL, c.VALID_PASSWORD);
    await t.switchToMainWindow();

    await startPage.addNewTask(taskText, helpers.getDayAndMonth());
    await t.expect(startPage.taskItems
                .nth(c.LAST_TASK_INDEX).innerText).contains(taskText);
});

test(`Create ${c.TASK_LIST_LENGTH} new tasks`, async t => {
    await loginPage.login(c.VALID_EMAIL, c.VALID_PASSWORD);
    await t.switchToMainWindow();

    for (let i = 0; i < c.TASK_LIST_LENGTH; i++) {
        let taskText = helpers.getRandomText();
        await startPage.addNewTask(taskText, helpers.getDayAndMonth());

        await t.expect(startPage.taskItems.nth(c.LAST_TASK_INDEX).innerText)
                .contains(taskText);
    }
});