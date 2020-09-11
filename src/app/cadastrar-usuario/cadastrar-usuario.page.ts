import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/services/UsuarioService';
import { Usuario } from 'src/models/Usuario';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.page.html',
  styleUrls: ['./cadastrar-usuario.page.scss'],
})
export class CadastrarUsuarioPage implements OnInit {

  public usuario: Usuario = new Usuario();
  
  constructor(private _usuarioService: UsuarioService) {
    console.log('> Usuario:', this.usuario)
  }

  ngOnInit() {
  }

  cadastrarUsuario() {
    console.log('> [cadastrarUsuario] usuario:', this.usuario);
    this._usuarioService.cadastrar(this.usuario);
  }

}
