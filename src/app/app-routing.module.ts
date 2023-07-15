import { AuthGuard } from './core/guards/auth.guard';
import { ErrorPageComponent } from './commons/error-page/error-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent ,canActivate:[AuthGuard]},

  { path: 'error', component: ErrorPageComponent },
  { path: 'profile', component: ProfileComponent ,canActivate:[AuthGuard]},
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/// any routing component must place in this list
export  const routingComponents=[LoginComponent,HomeComponent,ErrorPageComponent,ProfileComponent]
