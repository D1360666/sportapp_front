import { Component, Input } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  @Input() nuevo: Usuario={
    id:0,
    nombre:'',
    apellido:'',
    ci:0,
    fnacimiento: new Date,
    direccion:'',
    telefono:'',
    email:'',
    usuario:'',
    password:''
  }
  constructor(private usuarioService: UsuarioService){}
  saveUsuario(){


  }
}
