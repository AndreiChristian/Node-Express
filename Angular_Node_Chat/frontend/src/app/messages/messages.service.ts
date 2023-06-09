import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { io } from 'socket.io-client';
import { Message } from './models/message';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  url = 'http://localhost:3000/api/messages';

  public messages$: Observable<Message[]>;

  subscription: Subscription;

  socket = io('http://localhost:3000', {
    autoConnect: false,
  });

  constructor(private http: HttpClient) {}

  initSocket() {
    this.socket.connect();
  }

  getMessages() {
    this.messages$ = this.http.get<Message[]>(this.url);
  }

  postMessages(body: string) {
    this.subscription = this.http
      .post(this.url, { body })
      .subscribe((data) => console.log(data));
    return this.subscription;
  }
}
