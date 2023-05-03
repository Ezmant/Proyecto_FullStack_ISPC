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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'petFriendly', component: PetFriendlyComponent },
  { path: 'veterinarios', component: VeterinariosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NosotrosComponent,
    ContactoComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
