// Updated app.module.ts
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { MatIconModule } from '@angular/material/icon'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { TwoOddsComponent } from './two-odds/two-odds.component';
import { PaymentsComponent } from './payments/payments.component';
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    ContactUsComponent,
    FaqComponent,
    TwoOddsComponent,
    PaymentsComponent,
    SubscriptionPlanComponent
  ],
  imports: [
   
    BrowserAnimationsModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
