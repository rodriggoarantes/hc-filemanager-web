import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [LoginFormComponent]
})
export class LoginModule { }
