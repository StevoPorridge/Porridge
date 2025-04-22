import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonButton,
  IonContent,
  IonFooter,
  IonInput,
  IonItem,
  NavController,
} from '@ionic/angular/standalone';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '@authentication/service';

@Component({
  selector: 'onboarding-sign-up',
  imports: [
    CommonModule,
    IonContent,
    IonButton,
    IonInput,
    FormsModule,
    ReactiveFormsModule,
    IonFooter,
    IonItem,
  ],
  templateUrl: './sign-up.page.html',
  styleUrl: './sign-up.page.scss',
})
export class SignUpPage {
  navController = inject(NavController);
  authenticationService = inject(AuthenticationService);

  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  error = '';

  public showError(control: AbstractControl): boolean {
    if (control.hasError('email')) {
      this.error = 'Your email is invalid';
    }

    if (control.hasError('minlength')) {
      this.error = 'Your password must be at least 8 characters';
    }

    return control.dirty && control.invalid;
  }

  public async signUp(): Promise<void> {
    if (!this.signUpForm.invalid) {
      const user = await this.authenticationService.signUp(
        this.signUpForm.controls.email.value!,
        this.signUpForm.controls.password.value!,
      );

      if (user) {
        await this.navController.navigateForward('onboarding/cat-name');
      }

      this.error = 'Sign up failed!';
    }
  }
}
