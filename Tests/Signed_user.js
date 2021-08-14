import { nanoid } from 'nanoid';
//Import clases to use elements inside of it
import LoginPage from '../Pages/LogIn';
import HomePage from '../Pages/Home';
import taskEditorPage from '../Pages/TaskEditor';
//set URL path for env file location
require('dotenv').config({ path: '/Users/yanira.lopez/Documents/QA_Challenge/Credencials/.env' });
//Global variables for credencials
const email = process.env.USER_EMAIL;
const password = process.env.PASSWORD;
const wrong_password = process.env.WRONG_PASSWORD;

fixture`Frontend test scripts`
    .page`https://todoist.com/Users/showLogin`
    .beforeEach(async t => {
        await t
            .maximizeWindow();
    })
test
    ('successful login', async t => {
        LoginPage.loginFlow(email, password);
        await t.expect(HomePage.agendaSection.exists).ok('the login was successful', { timeout: 10000 });
    });
test
    ('Without password login', async t => {
        await t
            .typeText(LoginPage.emailInput, email)
            .click(LoginPage.loginBtn)
            .expect(LoginPage.errorMsg.textContent).contains('Blank password');
    });
test
    ('Without email login', async t => {
        await t
            .typeText(LoginPage.passwordInput, password)
            .click(LoginPage.loginBtn)
            .expect(LoginPage.errorMsg.textContent).contains('Invalid email address');
    });
test
    ('Without values', async t => {
        await t
            .click(LoginPage.loginBtn)
            .expect(LoginPage.errorMsg.textContent).contains('Invalid email address');
    });
test
    ('With user nickname login', async t => {
        LoginPage.loginFlow(email.substring(0, 6), password);
        await t
            .click(LoginPage.loginBtn)
            .expect(LoginPage.errorMsg.textContent).contains('Invalid email address');
    });
test
    ('With wrong password login', async t => {
        LoginPage.loginFlow(email, wrong_password);
        await t.expect(LoginPage.errorMsg.textContent).contains('Wrong email or password');
    });
test
    ('Create a new task', async t => {
        LoginPage.loginFlow(email, password);
        await t
            .click(HomePage.quickAddBtn.with({ visibilityCheck: true }))
            .typeText(taskEditorPage.taskTitleInput.with({ visibilityCheck: true }), 'Title ' + nanoid())
            .typeText(taskEditorPage.taskDescriptionInput, 'Description ' + nanoid())
            .click(taskEditorPage.addTaskBtn)
            .wait(10000)
            .expect(HomePage.taskListElmt.with({ visibilityCheck: true }).exists).ok('the task was create successful');
    });