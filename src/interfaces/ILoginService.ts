import { Observable } from 'rxjs';
import { Login } from 'src/models/Login';
import { Usuario } from 'src/models/Usuario';
export interface ILoginService {
  login(dadosUsuario: Login) : Observable<Usuario>;
  
}