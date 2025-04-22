import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonButton,
  IonContent,
  IonFooter,
  IonItem,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
import { CatService } from '@onboarding/cat-service';
import { NavController } from '@ionic/angular';
import { HeaderButton, HeaderComponent } from '@ui/header';
import { Breed } from '@porridge/enums';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'onboarding-cat-breed',
  imports: [
    CommonModule,
    IonButton,
    IonContent,
    IonFooter,
    IonItem,
    IonSelect,
    IonSelectOption,
    ReactiveFormsModule,
    HeaderComponent,
  ],
  templateUrl: './cat-breed.page.html',
  styleUrl: './cat-breed.page.scss',
})
export class CatBreedPage {
  catService = inject(CatService);
  navController = inject(NavController);

  backButton: HeaderButton = {
    icon: 'arrow-back-outline',
    iconColour: 'black',
  };

  catBreedForm = new FormGroup({
    breed: new FormControl('', [Validators.required]),
  });

  catBreeds = computed(() => {
    return Object.values(Breed);
  });

  catName = computed(() => {
    return this.catService.getCats()[0].name;
  });

  public async goBack(): Promise<void> {
    await this.navController.navigateBack('onboarding/landing', {
      animated: false,
    });
  }

  async submit() {
    this.catService.updateCat(this.catService.getCats()[0].id!, {
      breed: this.catBreedForm.controls.breed.value!,
    });

    await this.navController.navigateForward('onboarding/cat-age', {
      animated: false,
    });
  }
}
