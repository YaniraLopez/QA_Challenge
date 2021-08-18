import { nanoid } from 'nanoid';
//Import clases to use elements inside of it
import LoginPage from '../Pages/LogIn';
import HomePage from '../Pages/Home';
//set URL path for env file location
require('dotenv').config({ path: './Configurations/.env' });
//Global variables for credencials
const email = process.env.USER_EMAIL;
const password = process.env.PASSWORD;
const wrong_password = process.env.WRONG_PASSWORD;
const url = process.env.URL;
let random = nanoid();

fixture`Frontend test scripts`
    .page(url)
    .beforeEach(async t => {
        await t
            .maximizeWindow();
    })
    test
    ('successful login', async t => {
        await LoginPage.loginFlow(email, password);
        await t.expect(HomePage.leftMenu.exists).ok('the login was successful', { timeout: 10000 });
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
        await LoginPage.loginFlow(email.substring(0, 6), password);
        await t
            .click(LoginPage.loginBtn)
            .expect(LoginPage.errorMsg.textContent).contains('Invalid email address');
    });
    test
    ('With wrong password login', async t => {
        await LoginPage.loginFlow(email, wrong_password);
        await t.expect(LoginPage.errorMsg.textContent).contains('Wrong email or password');
    });
    test
    .skip
    ('Create a new task', async t => {
        await LoginPage.loginFlow(email, password);
        await HomePage.QuickAddtaskFlow(random);
        await t .expect(await HomePage.ValidateNewTask(random)).eql(true,'The task was not created');
    });
    test
    .skip
    ('Create 10 new tasks', async t => {
        let i=0;
        let result = null;
        await LoginPage.loginFlow(email, password);
        while(i<=2)
        {
            random = nanoid();
            await HomePage.QuickAddtaskFlow(random);
            result = await HomePage.ValidateNewTask(random);
            i++;
        }
        await t .expect(result).eql(true,'The task was not created');
    });