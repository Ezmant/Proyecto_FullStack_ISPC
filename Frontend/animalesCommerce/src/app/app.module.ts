import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { PetFriendlyComponent } from './pages/pet-friendly/pet-friendly.component';
import { VeterinariosComponent } from './pages/veterinarios/veterinarios.component';
import { LoguearseComponent } from './auth/loguearse/loguearse.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgradecimientosComponent } from './pages/agradecimientos/agradecimientos.component';
import { ReportarComponent } from './pages/reportar/reportar.component';
import { RegistrarseComponent } from './auth/registrarse/registrarse.component';
import { FinalizarAdopcionComponent } from './pages/finalizar-adopcion/finalizar-adopcion.component';
import { ListaAdopcionComponent } from './pages/lista-adopcion/lista-adopcion.component';
import { CartComponent } from './pages/cart/cart.component';
/* import { ProductDetailsComponent} from './pages/product-details/product-details.component'; */
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'petFriendly', component: PetFriendlyComponent },
  { path: 'veterinarios', component: VeterinariosComponent },
  { path: 'loguearse', component: LoguearseComponent },
  { path: 'agradecimientos', component: AgradecimientosComponent },
  { path: 'reportar', component: ReportarComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'finalizarAdopcion', component: FinalizarAdopcionComponent },
  { path: 'listaAdopcion', component: ListaAdopcionComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NosotrosComponent,
    ContactoComponent,
    HomeComponent,
    PetFriendlyComponent,
    VeterinariosComponent,
    LoguearseComponent,
    AgradecimientosComponent,
    ReportarComponent,
    RegistrarseComponent,
    FinalizarAdopcionComponent,
    ListaAdopcionComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
