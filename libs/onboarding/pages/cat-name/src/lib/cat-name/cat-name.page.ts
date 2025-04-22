import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';
import { HeaderButton, HeaderComponent } from '../../../../../../ui/header/src';

@Component({
  selector: 'onboarding-cat-name',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './cat-name.page.html',
  styleUrl: './cat-name.page.scss',
})
export class CatNamePage {
  navController = inject(NavController);

  backButton: HeaderButton = {
    icon: 'arrow-back-outline',
    iconColour: 'black',
  };

  public async goBack(): Promise<void> {
    await this.navController.navigateBack('onboarding/landing', {
      animated: false,
    });
  }
}
