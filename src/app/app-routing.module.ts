import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuarios/components/usuario.component';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

const routes: Routes = [{
  path: 'usuarios',
  component: UsuarioComponent
}];

@NgModule({
  declarations:[],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
