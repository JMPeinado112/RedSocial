import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilUsuariComponent } from './perfil-usuari/perfil-usuari.component';
import { LlistaUsuariComponent } from './llista-usuari/llista-usuari.component';
import { DetallsUsuariComponent } from './detalls-usuari/detalls-usuari.component';
import { RegistreUsuariComponent } from './registre-usuari/registre-usuari.component';
import { PanellAdminComponent } from './panell-admin/panell-admin.component';
import { LlistaComponent } from './llista/llista.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PerfilUsuariComponent,
    LlistaUsuariComponent,
    DetallsUsuariComponent,
    RegistreUsuariComponent,
    PanellAdminComponent,
    LlistaComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [PerfilUsuariComponent]
})
export class AppModule { }
