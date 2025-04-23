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
import { backButton, HeaderComponent } from '@ui/header';
import { LocalStorageService } from '@state/local-storage';
import { AuthenticationService } from '@authentication/service';

@Component({
  selector: 'onboarding-sign-in',
  imports: [
    CommonModule,
    IonButton,
    IonContent,
    FormsModule,
    HeaderComponent,
    IonFooter,
    ReactiveFormsModule,
    IonItem,
    IonInput,
  ],
  templateUrl: './sign-in.page.html',
  styleUrl: './sign-in.page.scss',
})
export class SignInPage {
  navController = inject(NavController);
  authenticationService = inject(AuthenticationService);
  store = inject(LocalStorageService);
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  error = '';
  protected readonly backButton = backButton;

  public showError(control: AbstractControl): boolean {
    if (control.hasError('email')) {
      this.error = 'Your email is invalid';
    }

    if (control.hasError('minlength')) {
      this.error = 'Your password must be at least 8 characters';
    }

    return control.dirty && control.invalid;
  }

  public async signIn(): Promise<void> {
    if (!this.signInForm.invalid) {
      const user = await this.authenticationService.signIn(
        this.signInForm.controls.email.value!,
        this.signInForm.controls.password.value!,
      );

      console.log('user: ', user);
      if (user) {
        await this.navController.navigateForward('main/tabs/home', {
          animated: false,
        });
      }

      this.error = 'Sign up failed!';
    }
  }

  public async goBack(): Promise<void> {
    await this.navController.navigateBack('onboarding/landing');
  }
}
