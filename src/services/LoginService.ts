import { Observable } from 'rxjs';
import { ILoginService } from 'src/interfaces/ILoginService';
import { Login } from 'src/models/Login';
import { Usuario } from 'src/models/Usuario';
import { Global } from 'src/shared/Global';

export class LoginService implements ILoginService {
  public apiUrl: string = Global.ApiUrl + "usuarios/login";

  login(dadosUsuario: Login): Observable<Usuario> {
    if (!dadosUsuario.email)  throw new Error('O Email é obrigatorio.');
    if (!dadosUsuario.senha)  throw new Error('A Senha é obrigatorio.');

    throw new Error('O login poderá ser efetuado.');
  }

}