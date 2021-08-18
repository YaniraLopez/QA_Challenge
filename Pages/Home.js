import { t, Selector } from 'testcafe';
import taskEditorPage from '../Pages/TaskEditor';
 
class HomePage {
    constructor() {
        this.leftMenu = Selector('.left_menu');
        this.quickAddBtn = Selector('#quick_add_task_holder');
        this.taskListElement = Selector('.today_view .task_list_item');
        this.taskTitleStr = Selector('li.task_list_item div.task_content');
        this.taskDecriptionStr = Selector('li.task_list_item div.task_description');
    }
    QuickAddtaskFlow = async (randomTxt) => {
        await t
        .click(this.quickAddBtn.with({ visibilityCheck: true }))
        .typeText(taskEditorPage.taskTitleInput.with({ visibilityCheck: true }), 'Title ' + randomTxt)
        .typeText(taskEditorPage.taskDescriptionInput, 'Description ' + randomTxt)
        .click(taskEditorPage.addTaskBtn);
    }
    ValidateNewTask = async (randomTxt) => {
            let result = false;
            for(let i=0; i< (await this.taskDecriptionStr.count); i++){
                if ((await this.taskDecriptionStr.nth(i).innerText).includes(randomTxt)){
                    result=true;
                    break;
                }
                continue;
            }
        return result;
    }
}
export default new HomePage();