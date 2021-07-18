import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { SharedModule } from './components/shared/shared.module';
import { ArticleModule } from './components/article/article.module';
import { UserModule } from './components/user/user.module';
import { AdministrationModule } from './components/administration/administration.module';

import { ResponseHandlerInterceptor } from './core/interceptors/response-handler.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
    SharedModule,
    ArticleModule,
    UserModule,
    AdministrationModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
