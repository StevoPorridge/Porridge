import { Component, inject } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular/standalone';
import { HeaderButton } from '../../../../../../../../../libs/ui/header/src/lib/models/header-button.model';
import { HeaderComponent } from '@ui/header';

@Component({
  selector: 'porridge-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, HeaderComponent],
})
export class HomePage {
  navController = inject(NavController);

  rightButton: HeaderButton = {
    icon: 'people-outline',
    iconColour: 'black',
  };

  async goToProfile(): Promise<void> {
    await this.navController.navigateForward('main/my-cats');
  }
}
