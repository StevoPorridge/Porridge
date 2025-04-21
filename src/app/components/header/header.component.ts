import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'porridge-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  imports: [IonToolbar, IonTitle],
})
export class HeaderComponent {
  public environmentInjector = inject(EnvironmentInjector);
}
