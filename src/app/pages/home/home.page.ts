import {Component, inject} from '@angular/core';
import {IonContent, NavController} from '@ionic/angular/standalone';
import {HeaderComponent} from 'src/app/components/header/header.component';
import {HeaderButton} from "../../models/header-button.model";

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
    iconColour: 'black'
  }

  async goToProfile(): Promise<void> {
    await this.navController.navigateForward('my-cats');
  }
}


