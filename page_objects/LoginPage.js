import { Selector, t } from 'testcafe'

class LoginPage {

    constructor(){
        this.loginButton = Selector('.sel_login');
        this.email = Selector('#email');
        this.password = Selector('#password');
        this.submitButton = Selector('.submit_btn');
        this.parentIframe = Selector('.GB_frame');
        this.childIframe = Selector('#GB_frame');
        this.errorMessage = Selector('.error_msg');
    }

    async login(user, pass) {        
        await t.click(this.loginButton);
        await t.switchToIframe(this.parentIframe);
        await t.switchToIframe(this.childIframe);
        
        if (user !== '') {
            await t.typeText(this.email, user);
        }

        if (pass !== '') {
            await t.typeText(this.password, pass);
        }
        
        await t.click(this.submitButton);
    }
}

export default LoginPage;