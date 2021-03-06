import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageUploadModule } from 'ng2-imageupload';
import { Ng2ImgMaxModule } from 'ng2-img-max';

// used to create fake backend
import { fakeBackendProvider } from './core/helpers';

import { HomeComponent } from './components/home/home.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ApoieProjetoComponent } from './components/apoie-projeto/apoie-projeto.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent as BookFormComponent } from './components/book/form/form.component';
import { DetailsComponent as BookDetailComponent } from './components/book/details/details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './core/directives/alert/alert.component';
import { PanelComponent } from './components/panel/panel.component';
import { AccountComponent } from './components/account/account.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RequestedsComponent } from './components/book/requesteds/requesteds.component';
import { DonationsComponent } from './components/book/donations/donations.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { AuthGuardUser } from './core/guards/auth.guard.user';
import { AuthGuardAdmin } from './core/guards/auth.guard.admin';

import { JwtInterceptor, ErrorInterceptor } from './core/helpers';
import { BookService } from './core/services/book/book.service';
import { CategoryService } from './core/services/category/category.service';
import { AuthenticationService } from './core/services/authentication/authentication.service';
import { UserService } from './core/services/user/user.service';
import { AlertService } from './core/services/alert/alert.service';
import { GoogleAnalyticsService } from './core/services/analytics/google-analytics.service';
import { AddressService } from './core/services/address/address.service';
import { ContactUsService } from './core/services/contact-us/contact-us.service';

import { AppConfigModule } from './app-config.module';
import { ListComponent } from './components/book/list/list.component';
import { DonateComponent } from './components/book/donate/donate.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { NgxMaskModule } from 'ngx-mask';
import { RequestComponent } from './components/book/request/request.component';
import { ConfirmationDialogComponent } from './core/directives/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './core/services/confirmation-dialog/confirmation-dialog.service';

import {RouteReuseStrategy} from '@angular/router';
import {CustomReuseStrategy} from './core/router/custom-reuse-strategy';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    BookDetailComponent,
    HomeComponent,
    QuemSomosComponent,
    ApoieProjetoComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent,
    ListComponent,
    PanelComponent,
    AccountComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    DonateComponent,
    ContactUsComponent,
    RequestComponent,
    RequestedsComponent,
    ContactUsComponent,
    DonationsComponent,
    ConfirmationDialogComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppConfigModule,
    Ng2SmartTableModule,
    NgbModule.forRoot(),
    NgbModalModule,
    ImageUploadModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    Ng2ImgMaxModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    AuthGuardUser,
    BookService,
    CategoryService,
    AlertService,
    AuthenticationService,
    ContactUsService,
    GoogleAnalyticsService,
    AddressService,
    UserService,
    ConfirmationDialogService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: RECAPTCHA_SETTINGS, useValue: { siteKey: '6LcxaXAUAAAAAGM8zgwQvgMuykwiBPgMr0P7sNL3' } as RecaptchaSettings },
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
    AuthGuardAdmin
    // provider used to create fake backend
    // fakeBackendProvider
  ],
  entryComponents: [
    DonateComponent,
    RequestComponent,
    ConfirmationDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(protected _googleAnalyticsService: GoogleAnalyticsService) { } // <-- We inject the service here to keep it alive whole time
 }
