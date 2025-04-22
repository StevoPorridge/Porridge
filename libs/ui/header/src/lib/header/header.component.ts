import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonIcon,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HeaderButton } from '../../../../../../apps/porridge/src/app/models/header-button.model';

@Component({
  selector: 'porridge-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonToolbar, IonButton, IonButtons, IonIcon],
})
export class HeaderComponent {
  @Input() leftButton: HeaderButton | undefined;
  @Input() rightButton: HeaderButton | undefined;

  @Output() leftButtonTapped = new EventEmitter();
  @Output() rightButtonTapped = new EventEmitter();

  leftButtonAction() {
    this.leftButtonTapped.emit();
  }

  rightButtonAction() {
    this.rightButtonTapped.emit();
  }
}
