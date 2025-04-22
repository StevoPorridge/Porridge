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
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

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

  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  error = '';

  public showError(control: AbstractControl): boolean {
    return control.dirty && control.invalid;
  }

  public signUp(): void {
    if (!this.signUpForm.invalid) {
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        this.signUpForm.controls.email.value!,
        this.signUpForm.controls.password.value!,
      )
        .then((userCredential) => {
          const user = userCredential.user;

          this.navController.navigateForward('');
        })
        .catch((error) => {
          console.log('error: ', error);
        });
    }
  }
}
