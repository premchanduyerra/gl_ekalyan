import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';



//import all the ng prime component in this list
const ngPrimeComponents = [
  InputTextModule,
  PasswordModule,
  ButtonModule,
  MenubarModule,
  CardModule,
  ProgressSpinnerModule,
  CheckboxModule,
]



@NgModule({
  imports: [
    CommonModule,
    ngPrimeComponents
  ],
  exports: [
    ngPrimeComponents
  ]
 })
export class NgPrimeModule { }

