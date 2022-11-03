import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messegeService: MessageService) { }

  ngOnInit(): void {
    console.log();
  }

}
