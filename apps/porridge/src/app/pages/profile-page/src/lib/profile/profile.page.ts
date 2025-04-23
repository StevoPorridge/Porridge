import { Component, computed, inject } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular/standalone';
import { HeaderButton } from '../../../../../../../../../libs/ui/header/src/lib/models/header-button.model';
import { HeaderComponent } from '@ui/header';
import { CatTileComponent } from '@ui/cat-tile';
import { CatService } from '@onboarding/cat-service';

@Component({
  selector: 'porridge-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  imports: [IonContent, HeaderComponent, CatTileComponent],
})
export class ProfilePage {
  navController = inject(NavController);
  catService = inject(CatService);

  rightButton: HeaderButton = {
    icon: 'close-circle-outline',
    iconColour: 'black',
  };

  public cats = computed(() => {
    return this.catService.getCats();
  });

  async goBack(): Promise<void> {
    await this.navController.navigateBack('main/tabs/home');
  }
}
