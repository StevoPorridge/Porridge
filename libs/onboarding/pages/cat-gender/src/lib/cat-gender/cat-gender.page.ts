import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { backButton, HeaderComponent } from '@ui/header';
import { IonButton, IonContent, IonItem } from '@ionic/angular/standalone';
import { CatService } from '@onboarding/cat-service';
import { NavController } from '@ionic/angular';
import { Gender } from '@porridge/enums';

@Component({
  selector: 'lib-cat-gender',
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonButton,
    IonContent,
    ReactiveFormsModule,
    IonItem,
  ],
  templateUrl: './cat-gender.page.html',
  styleUrl: './cat-gender.page.scss',
})
export class CatGenderPage {
  catService = inject(CatService);
  navController = inject(NavController);
  catGenderForm = new FormGroup({
    gender: new FormControl('', [Validators.required]),
  });
  catName = computed(() => {
    return this.catService.getCats()[0].name;
  });
  protected readonly backButton = backButton;
  protected readonly Gender = Gender;

  async genderSelected(gender: Gender): Promise<void> {
    this.catService.updateCat(this.catService.getCats()[0].id!, {
      gender,
    });

    await this.navController.navigateForward('main/tabs/home');
  }

  public async goBack(): Promise<void> {
    await this.navController.navigateBack('onboarding/cat-name');
  }
}
