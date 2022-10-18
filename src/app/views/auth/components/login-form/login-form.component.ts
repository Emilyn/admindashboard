import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {

    formGroup: UntypedFormGroup;
    showResult = false
    showPassword = false

    @Input() thirPartyLogin = true
    constructor(private formBuilder: UntypedFormBuilder,public auth: AuthService) {}

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            username: ['', [
                Validators.required
            ]],
            password: ['', [
                Validators.required
            ]]
        });
    }
 
    login() {
        console.log(this.formGroup);
    }

    onShowPasswordClick () {
        this.showPassword = !this.showPassword
    }
 
    onReset() {
        this.formGroup.reset();
    }

    loginWithRedirect(): void {
        this.auth.loginWithRedirect({ screen_hint: 'signup' });
      }
    
}
