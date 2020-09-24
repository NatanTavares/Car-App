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
    if (error instanceof Error) {
      const er: Error = error;
      console.log('> er.message:', er.message);
      this.mostrarErro(er.message);
    }
  }

  async mostrarErro(msg: string) {
    const alert = await this._alert.create({
      cssClass: 'alert-padrao',
      header: 'Atenção',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}