import { Selector, t } from 'testcafe';

class StartPage {

    constructor() {
        this.topBar = Selector('#top_bar');
        this.addTaskButton = Selector('.ist_button_red');
        this.taskTextInput = Selector('.public-DraftEditor-content');
        this.taskScheduleInput = Selector('.item_editor_assign_due');
        this.taskDateInput = Selector('.scheduler-input');
        this.taskDatePreview = Selector('.scheduler-preview-content');
        this.taskSubmitButton = Selector('.item_editor_submit.ist_button.ist_button_red');
        this.inboxButton = Selector('#filter_inbox');
        this.taskItems = Selector('.sel_item_content');
        this.newTaskBtn = Selector('#quick_add_task_holder');
    }

    async addNewTask(text, date) {
        await t.click(this.newTaskBtn)
            .typeText(this.taskTextInput, text)
            .click(this.taskScheduleInput)
            .typeText(this.taskDateInput, date)
            .click(this.taskDatePreview)
            .click(this.taskSubmitButton);
    }
}

export default StartPage;