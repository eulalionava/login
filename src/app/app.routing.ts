import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Componentes
import { LoginComponent } from '../app/componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';

//Rutas
const appRoutes:Routes = [
  {path:'', component:LoginComponent},
  {path:'login' , component:LoginComponent},
  {path:'home',component:HomeComponent},

  {path:'**', component:LoginComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true});
