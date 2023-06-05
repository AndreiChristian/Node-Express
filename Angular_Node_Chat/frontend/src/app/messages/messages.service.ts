import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  socket = io('http://localhost:3000', {
    autoConnect: false,
  });

  constructor() {}

  initSocket() {
    this.socket.connect();
  }
}
