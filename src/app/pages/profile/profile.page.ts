import {Component, computed, inject} from '@angular/core';
import {IonContent, IonTitle, NavController} from '@ionic/angular/standalone';
import {HeaderComponent} from 'src/app/components/header/header.component';
import {Cat} from "../../models/cat.model";
import {Gender} from "../../enums/gender.enum";
import {HeaderButton} from "../../models/header-button.model";
import {CatTileComponent} from "../../components/ui/cat-tile/cat-tile.component";
import {Breed} from "../../enums/breeds.enum";


@Component({
  selector: 'porridge-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  imports: [IonContent, HeaderComponent, CatTileComponent, IonTitle],
})
export class ProfilePage {
  navController = inject(NavController);

  rightButton: HeaderButton = {
    icon: 'close-circle-outline',
    iconColour: 'black'
  }

  public cats = computed(() => {
    const catArray: Cat[] = []

    catArray.push({
      name: "Belle",
      dateOfBirth: 1430035200000,
      breed: Breed.Moggy,
      gender: Gender.FEMALE,
      image: 'assets/test-images/belle1.jpg'
    })

    catArray.push({
      name: "Tucker",
      dateOfBirth: 1303411200000,
      breed: Breed.Moggy,
      gender: Gender.MALE,
      image: 'assets/test-images/belle2.jpg'
    })

    return catArray;
  })

  async goBack(): Promise<void> {
    await this.navController.navigateBack('tabs/home');
  }
}


