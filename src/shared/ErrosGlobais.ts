import { ErrorHandler, Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  'providedIn': 'root'
})

export class ErrosGlobais implements ErrorHandler {

  constructor(private _alert: AlertController) {

  }

  handleError(error: any): void {
    // throw new Error('Method not implemented.');
    console.log(error);
  }

  async presentAlert() {
    const alert = await this._alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

}