import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/Router';
import { HomeComponent } from './components/home/home.component';
import { TechComponent } from './components/tech/tech.component';
import { ServicesComponent } from './components/services/services.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
