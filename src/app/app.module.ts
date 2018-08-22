import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule } from '@angular/material';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { AuthInterceptorService } from './authInterceptor.service';

import { AppComponent } from './app.component';
import { MessageComponent } from './messages/message.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';

const routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'message', component: MessageComponent},
  {path: '', component: LoginComponent},
  {path: 'users', component: UserComponent},
  {path: 'post', component: PostComponent},
  {path: 'profile/:id', component: ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    PostComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
