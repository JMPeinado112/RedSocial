import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilUsuariComponent } from './perfil-usuari/perfil-usuari.component';
import { PanellAdminComponent } from './panell-admin/panell-admin.component';
import { LlistaComponent } from './llista/llista.component';
import { LlistaUsuariComponent } from './llista-usuari/llista-usuari.component';

const routes: Routes = [{
  path: 'admin',
  component: PanellAdminComponent
},
{
  path: 'aaa',
  component: LlistaUsuariComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
