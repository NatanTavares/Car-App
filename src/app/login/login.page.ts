import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Login } from 'src/models/Login';
import { LoginService } from 'src/services/LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  public login: Login = new Login;

  constructor(private _menu: MenuController, 
    private _router: Router, 
    private _loginService: LoginService) {
      
  }

  onLogin() {
    console.log('> This.login:', this.login);
    this._loginService.login(this.login).subscribe(res => {
      console.log(res);
    });
  }

  onCadastro() {
    console.log('> This._route:', this._router);
    this._router.navigate(['/cadastrar-usuario']);
  }

  ngOnInit() {
    // this._menu.swipeGesture(false);
  }

  ionViewDidEnter() {
    this._menu.swipeGesture(false);
  }

  inoViewWillLeave() {
    this._menu.swipeGesture(true);
  }
}
