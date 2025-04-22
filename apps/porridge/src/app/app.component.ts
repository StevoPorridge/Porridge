import { Component, inject, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';
import { addIcons } from 'ionicons';
import { closeCircleOutline, homeOutline, peopleOutline } from 'ionicons/icons';

@Component({
  selector: 'porridge-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  platform = inject(Platform);

  ngOnInit() {
    this.platform.ready().then(async () => {
      // icons
      addIcons({ homeOutline, closeCircleOutline, peopleOutline });

      // status bar
      if (!this.platform.is('mobileweb')) {
        await StatusBar.setOverlaysWebView({ overlay: true });
        await StatusBar.setStyle({ style: Style.Light });
      }
    });
  }
}
