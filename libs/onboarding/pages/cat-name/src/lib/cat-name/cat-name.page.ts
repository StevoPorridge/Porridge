import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';
import { HeaderButton, HeaderComponent } from '../../../../../../ui/header/src';
import {
  IonButton,
  IonContent,
  IonFooter,
  IonInput,
  IonItem,
} from '@ionic/angular/standalone';
import { CatService } from '@onboarding/cat-service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'onboarding-cat-name',
  imports: [
    CommonModule,
    HeaderComponent,
    IonButton,
    IonContent,
    IonFooter,
    IonItem,
    IonInput,
    ReactiveFormsModule,
  ],
  templateUrl: './cat-name.page.html',
  styleUrl: './cat-name.page.scss',
})
export class CatNamePage {
  navController = inject(NavController);
  catService = inject(CatService);

  backButton: HeaderButton = {
    icon: 'arrow-back-outline',
    iconColour: 'black',
  };

  catNameForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  public async addCat(): Promise<void> {
    this.catService.resetCats();

    let name = 'your kitty';

    if (
      this.catNameForm.controls.name.value &&
      this.catNameForm.controls.name.value !== ''
    ) {
      name = this.catNameForm.controls.name.value;
    }
    this.catService.addCat({ name });
    await this.navController.navigateForward('onboarding/cat-breed', {
      animated: false,
    });
  }

  public async goBack(): Promise<void> {
    await this.navController.navigateBack('onboarding/landing', {
      animated: false,
    });
  }
}
