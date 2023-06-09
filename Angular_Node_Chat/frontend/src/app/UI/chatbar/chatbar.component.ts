import { Component } from '@angular/core';
import { MessagesService } from 'src/app/messages/messages.service';

@Component({
  selector: 'app-chatbar',
  templateUrl: './chatbar.component.html',
  styleUrls: ['./chatbar.component.scss'],
})
export class ChatbarComponent {
  newMessageBody: string;

  constructor(private messageService: MessagesService) {}

  postMessage() {
    this.messageService.postMessages(this.newMessageBody);
  }
}
