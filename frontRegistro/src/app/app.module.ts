import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router'; 
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import {RegistroService} from './service/registro.service';
import { MostrarComponent } from './mostrar/mostrar.component';
import { ModificarComponent } from './modificar/modificar.component';



const appRoutes: Routes = [
  {path: 'registrate' , component: FormRegistroComponent},
  {path: 'mostrar', component: MostrarComponent},
  {path: '', redirectTo: '/mostrar', pathMatch: 'full'},
  {path: 'modificar/:id', component: ModificarComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormRegistroComponent,
    MostrarComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
