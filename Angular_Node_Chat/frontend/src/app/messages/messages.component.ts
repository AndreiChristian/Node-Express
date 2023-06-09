import { Component, OnInit } from '@angular/core';
import { Message, SocketMessage } from './models/message';
import { io } from 'socket.io-client';
import { MessagesService } from './messages.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  connected = false;

  messages$: Observable<Message[]>;

  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.messagesService.getMessages();
    this.messages$ = this.messagesService.messages$;
  }
}
