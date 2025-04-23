import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { backButton, HeaderComponent } from '@ui/header';
import { NavController } from '@ionic/angular';
import {
  IonButton,
  IonContent,
  IonDatetime,
  IonFooter,
  IonItem,
} from '@ionic/angular/standalone';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CatService } from '@onboarding/cat-service';
import { dateNotInFutureValidator } from '@utility/validators/form-control-validators';

@Component({
  selector: 'onboarding-cat-age',
  imports: [
    CommonModule,
    HeaderComponent,
    IonButton,
    IonContent,
    IonFooter,
    IonItem,
    ReactiveFormsModule,
    IonDatetime,
  ],
  templateUrl: './cat-age.page.html',
  styleUrl: './cat-age.page.scss',
})
export class CatAgePage {
  navController = inject(NavController);
  catService = inject(CatService);
  catAgeForm = new FormGroup({
    dateOfBirth: new FormControl('', [
      Validators.required,
      dateNotInFutureValidator(),
    ]),
  });
  currentDate = new Date();
  catName = computed(() => {
    return this.catService.getCats()[0].name;
  });
  protected readonly backButton = backButton;

  public async goBack(): Promise<void> {
    await this.navController.navigateBack('onboarding/cat-breed');
  }

  async submit() {
    console.log('date selected: ', this.catAgeForm.controls.dateOfBirth.value!);
    console.log(
      'timestamp: ',
      new Date(this.catAgeForm.controls.dateOfBirth.value!).getTime(),
    );
    this.catService.updateCat(this.catService.getCats()[0].id!, {
      dateOfBirth: new Date(
        this.catAgeForm.controls.dateOfBirth.value!,
      ).getTime(),
    });

    await this.navController.navigateForward('onboarding/cat-gender');
  }
}
