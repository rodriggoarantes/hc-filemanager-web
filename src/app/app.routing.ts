import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaComponent } from './pessoa/pessoa.component';
import { LoginFormComponent } from './login/login-form/login-form.component';

const APP_ROUTES: Routes = [
{ path: '', component: LoginFormComponent },
{ path: 'cadastro', component: PessoaComponent }
];

@NgModule({
imports: [RouterModule.forRoot(APP_ROUTES)],
exports: [RouterModule]
})
export class AppRoutingModule { }
