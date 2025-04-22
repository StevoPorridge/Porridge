import { Component, Input } from '@angular/core';
import { Cat } from '../../../../../../apps/porridge/src/app/models/cat.model';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { TimestampToDatePipe } from '../../../../../../apps/porridge/src/app/pipes/timestamp-to-date.pipe';

@Component({
  selector: 'porridge-cat-tile',
  templateUrl: 'cat-tile.component.html',
  styleUrls: ['cat-tile.component.scss'],
  imports: [
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    TimestampToDatePipe,
  ],
})
export class CatTileComponent {
  @Input({ required: true }) cat!: Cat;
}
