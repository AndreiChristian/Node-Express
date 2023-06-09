import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './UI/navbar/navbar.component';
import { ChatbarComponent } from './UI/chatbar/chatbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NavbarComponent,
    ChatbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
