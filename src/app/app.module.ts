import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "./token.interceptor";
import { UserDisplayPipe } from "./user-display.pipe";
import { PostComponent } from "./post/post.component";
import { WallComponent } from "./wall/wall.component";
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    UserDisplayPipe,
    PostComponent,
    WallComponent,
    ProfileComponent,
    LoginComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
})
export class AppModule {}
