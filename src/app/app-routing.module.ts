import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TwoOddsComponent } from './two-odds/two-odds.component';
import { FaqComponent } from './faq/faq.component';
import { PaymentsComponent } from './payments/payments.component';
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';


const routes: Routes = [

  {path:'',redirectTo: 'dashboard', pathMatch:'full'},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'home',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  { path: 'contact-us', component: ContactUsComponent },
  {path:'two-odds',component:TwoOddsComponent},
  {path:'faq',component:FaqComponent},
  {path:'payments',component:PaymentsComponent},
  {path:'subscription-plan',component:SubscriptionPlanComponent},
  
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
