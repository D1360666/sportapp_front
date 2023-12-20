import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './components/usuario.component';

@NgModule({
  declarations: [
    UsuarioComponent
  ],
  exports:[
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UsuariosModule { }
