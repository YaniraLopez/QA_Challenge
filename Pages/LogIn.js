import { t, Selector } from 'testcafe';
class LoginPage {
    constructor() {
        this.emailInput = Selector('.input_email');
        this.passwordInput = Selector('.form_field_control');
        this.loginBtn = Selector('.submit_btn');
        this.errorMsg = Selector('.error_msg');
    }
    loginFlow = async (useremail, password) => {
        await t
            .typeText(this.emailInput, useremail)
            .typeText(this.passwordInput, password)
            .click(this.loginBtn)
    }
}
export default new LoginPage();