import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'login', 
    loadChildren: './login/login.module#LoginPageModule',
    canActivate: [LoginGuard]
  },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsPageModule' },
  { path: 'contacts/:id', loadChildren: './contacts/contacts.module#ContactsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
