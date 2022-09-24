import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

  /**
   * The messageService property must be public because you're going to bind to it in the template.
   * Angular only binds to public component properties.
   * This template binds directly to the component's messageService.
   *
   * @param messageService
   */
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
  }

}
