import { ErrorPageComponent } from './commons/error-page/error-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
   {
    path: 'home', component: HomeComponent
  },
   {
    path: 'error', component: ErrorPageComponent
  },
  // {
  //   path: 'forgot-password', component: ForgotPasswordComponent
  // },
  // {
  //   path: 'access-denied', component: AccessDeniedComponent
  // },
  // {
  //   path: 'validate-otp', component: OtpValidationComponent
  // },
  // {
  //   path: 'reset-password', component: ResetPasswordComponent
  // },
  // {
  //   path: 'set-password', component: SetPasswordComponent
  // }
  {
    path: '**', redirectTo: '/login', pathMatch: 'full'
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
