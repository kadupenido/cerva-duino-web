import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConexaoSocketService } from '../conexao-socket.service';

@Component({
  selector: 'app-fervura',
  templateUrl: './fervura.component.html',
  styleUrl: './fervura.component.css'
})
export class FervuraComponent implements OnInit, OnDestroy {

  data: any = {
    temperatura: 0,
    potencia: 0,
    resistencia: false
  };

  constructor(private conexaoSocketService: ConexaoSocketService) { }

  ngOnInit(): void {
    this.conexaoSocketService.onMessage('bk-temp', (data: any) => {
      this.data.temperatura = data;
    })
  }

  ngOnDestroy(): void {
    this.conexaoSocketService.disconnect();
  }

  public bkResistencia() {
    this.data.resistencia = !this.data.resistencia;
    this.conexaoSocketService.sendMessage('bk-resistencia', this.data.resistencia);
  }

  public bkPotencia(event: any) {
    this.data.potencia = event.value;
    this.conexaoSocketService.sendMessage('bk-potencia', event.target.value);
  }

}
