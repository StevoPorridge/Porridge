import {Component, EnvironmentInjector, EventEmitter, inject, Input, Output} from '@angular/core';
import {IonToolbar, IonTitle, IonButton, IonButtons, NavController} from '@ionic/angular/standalone';
import {HeaderButton} from "../../models/header-button.model";

@Component({
  selector: 'porridge-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  imports: [IonToolbar, IonTitle, IonButton, IonButtons],
})
export class HeaderComponent {

  @Input() leftButton: HeaderButton | undefined;
  @Input() rightButton: HeaderButton| undefined;

  @Output() leftButtonTapped = new EventEmitter();
  @Output() rightButtonTapped = new EventEmitter();

  leftButtonAction() {
    this.leftButtonTapped.emit();
  }

  rightButtonAction() {
    this.rightButtonTapped.emit();
  }
}
