import { t, Selector } from 'testcafe';
class HomePage {
    constructor() {
        this.agendaSection = Selector('.today_view');
        this.quickAddBtn = Selector('#quick_add_task_holder');
        this.taskListElmt = Selector('.task_list_item');
    }
}
export default new HomePage();