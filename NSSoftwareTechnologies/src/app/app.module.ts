import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/Router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TechComponent } from './components/tech/tech.component';
import { ServicesComponent } from './components/services/services.component';
import { ChooseComponent } from './components/choose/choose.component';
import { CountComponent } from './components/count/count.component';
import { CarsoulComponent } from './components/carsoul/carsoul.component';
import { FooterComponent } from './components/footer/footer.component';
import { AbtComponent } from './abt/abt.component';
import { RouterModule, Routes } from '@angular/router';
import { VishwaComponent } from './vishwa/vishwa.component';
import { LkoComponent } from './lko/lko.component';
import { TejaComponent } from './teja/teja.component';
import { VishuComponent } from './vishu/vishu.component';
import { ManComponent } from './man/man.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path: 'home', component: VishwaComponent,
  },
  {
    path: 'aboutus', component: LkoComponent,
  
  },
  {
    path: 'services', component: TejaComponent,
  },
  {
    path: 'contact', component: VishuComponent,
  },
  {
    path: 'gallery', component: ManComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    AboutUsComponent,
    TechComponent,
    ServicesComponent,
    ChooseComponent,
    CountComponent,
    CarsoulComponent,
    FooterComponent,
    AbtComponent,
    VishwaComponent,
    LkoComponent,
    TejaComponent,
    VishuComponent,
    ManComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
