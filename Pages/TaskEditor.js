import { t, Selector } from 'testcafe';
class taskEditorPage {
    constructor() {
        this.taskTitleInput = Selector('.public-DraftStyleDefault-ltr');
        this.taskDescriptionInput = Selector('div.task_editor__input_fields > textarea');
        this.addTaskBtn = Selector('.reactist_button--primary');
    }
}
export default new taskEditorPage();