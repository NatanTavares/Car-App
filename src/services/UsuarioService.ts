import { IUsuarioService } from 'src/interfaces/IUsuarioService';
import { Usuario } from 'src/models/Usuario';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/shared/Global';

@Injectable({ 'providedIn' : 'root' })

export class UsuarioService implements IUsuarioService {
    public apiUrl: string = Global.ApiUrl + "usuarios";

    constructor (private _httpClient: HttpClient) {}

    cadastrar(usuario: Usuario): Observable<Usuario> {
        if (!usuario.nome) throw new Error("O campo Nome é obrigatório!");
        if (!usuario.email) throw new Error("O campo Email é obrigatório!");
        if (!usuario.senha) throw new Error("O campo Senha é obrigatório!");
        if (usuario.confirmarSenha != usuario.senha) throw new Error("Senhas não coincidem!");

        throw new Error("You can to salve.");
    }

    atualizar(usuario: Usuario): Observable<Usuario> {
        throw new Error("Method not implemented.");
    }
    
    logar(usuario: Usuario): void {
        throw new Error("Method not implemented.");
    }
    
    retornarUsuarioLogado(): Usuario {
        throw new Error("Method not implemented.");
    }
}
