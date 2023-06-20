import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'aboutus', component:AboutusComponent},
  { path:'contactus', component:ContactusComponent},
  { path:'signup', component:SignupComponent},
  { path:'login', component:LoginComponent},
  { path:'dashboard', component:DashboardComponent},
  { path:'mybookings', component:MybookingsComponent},
  { path:'logout', component:LogoutComponent},
  {path:'profile',component:ProfileComponent},
  {path:'forgot-password',component:ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
