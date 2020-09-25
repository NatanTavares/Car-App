import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginService } from 'src/interfaces/ILoginService';
import { Login } from 'src/models/Login';
import { Usuario } from 'src/models/Usuario';
import { Global } from 'src/shared/Global';

@Injectable({
  'providedIn': 'root',
})

export class LoginService implements ILoginService {
  public apiUrl: string = Global.ApiUrl + "usuarios/login";

  constructor(private _http: HttpClient) {

  }

  login(dadosUsuario: Login): Observable<Usuario> {
    if (!dadosUsuario.email)  throw new Error('O Email é obrigatorio.');
    if (!dadosUsuario.senha)  throw new Error('A Senha é obrigatoria.');
    
    return this._http.post<Usuario>(this.apiUrl, dadosUsuario);
  }

}