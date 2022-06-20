import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { RegistrarAlquilerComponent } from './components/pages/registrar-alquiler/registrar-alquiler.component';
import { CatalogoComponent } from './components/pages/catalogo/catalogo.component';
import { CatalogoInicioComponent } from './components/pages/catalogo/catalogo-inicio/catalogo-inicio.component';
import { RegistrarClientesComponent } from './components/pages/registrar-clientes/registrar-clientes.component';
import { RegistrarMaquinariaComponent } from './components/pages/registrar-maquinaria/registrar-maquinaria.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrarAlquilerComponent,
    CatalogoComponent,
    CatalogoInicioComponent,
    RegistrarClientesComponent,
    RegistrarMaquinariaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AlifeFileToBase64Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
