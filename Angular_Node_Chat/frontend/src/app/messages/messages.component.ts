import { Component, OnInit } from '@angular/core';
import { Message, SocketMessage } from './models/message';
import { io } from 'socket.io-client';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  connected = false;

  messages: Message[] = [];

  socket = io('http://localhost:3000', {
    autoConnect: false,
  });

  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.socket.on('connect', () => {
      this.connected = true;
    });

    this.socket.on('messages', (data: SocketMessage) => {
      if (data.action == 'create') {
        this.messages.push(data.message);
      }
    });
  }
}
