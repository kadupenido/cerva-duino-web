import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ConexaoSocketService {

  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  // Enviar um evento
  sendMessage(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

  // Receber um evento
  onMessage(eventName: string, callback: (data: any) => void) {
    this.socket.on(eventName, callback);
  }

  // Desconectar do socket
  disconnect() {
    this.socket.disconnect();
  }
}
