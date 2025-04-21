import {Component, computed, inject} from '@angular/core';
import {IonContent, NavController} from '@ionic/angular/standalone';
import {HeaderComponent} from 'src/app/components/header/header.component';
import {Cat} from "../../models/cat.model";
import {Gender} from "../../models/gender.model";
import {HeaderButton} from "../../models/header-button.model";


@Component({
  selector: 'porridge-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  imports: [ IonContent, HeaderComponent],
})
export class ProfilePage {
  navController = inject(NavController);

  leftButton: HeaderButton = {
    icon: '',
    iconColour: 'black'
  }

  public cats = computed(() => {
    const catArray: Cat[] = []

    catArray.push({
      name: "Belle",
      dateOfBirth: 1430035200000 ,
      breed: 'Moggy',
      gender: Gender.FEMALE
    })

    catArray.push({
      name: "Tucker",
      dateOfBirth: 1303411200000 ,
      breed: 'Moggy',
      gender: Gender.MALE
    })

    return catArray;
  })

  async goBack(): Promise<void> {
    await this.navController.navigateBack('tabs/home');
  }
}


