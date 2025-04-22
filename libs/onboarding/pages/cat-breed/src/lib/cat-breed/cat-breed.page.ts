import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonButton,
  IonContent,
  IonFooter,
  IonItem,
  IonSelect,
} from '@ionic/angular/standalone';
import { CatService } from '@onboarding/cat-service';
import { NavController } from '@ionic/angular';
import { HeaderButton } from '../../../../../../ui/header/src';

@Component({
  selector: 'onboarding-cat-breed',
  imports: [CommonModule, IonButton, IonContent, IonFooter, IonItem, IonSelect],
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

  catName = computed(() => {
    return this.catService.getCats()[0].name;
  });

  public async goBack(): Promise<void> {
    await this.navController.navigateBack('onboarding/landing', {
      animated: false,
    });
  }

  submit() {}
}
