import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];

  constructor() { }

  add(messege: string): void {
    if (this.messages.includes(messege)) {
      console.error('essa message já foi add...');
      return;
    }
    this.messages.push(messege);
  }

  clear(): void {
    this.messages = [];
  }

  getMessages(): string[] {
    return this.messages;
  }
}
