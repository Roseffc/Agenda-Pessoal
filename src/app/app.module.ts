import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AgendaContatosService } from './services/agenda-contatos.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ContatoCadastroComponent } from './contato-cadastro/contato-cadastro.component';

@NgModule({
  declarations: [	
    AppComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      LoginComponent,
      ContatoCadastroComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AgendaContatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
