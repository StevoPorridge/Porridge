import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderButton, HeaderComponent } from '@ui/header';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'onboarding-cat-age',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './cat-age.page.html',
  styleUrl: './cat-age.page.css',
})
export class CatAgePage {
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
