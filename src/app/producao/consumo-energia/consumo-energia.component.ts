import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConexaoSocketService } from '../conexao-socket.service';

@Component({
  selector: 'app-consumo-energia',
  templateUrl: './consumo-energia.component.html',
  styleUrl: './consumo-energia.component.css'
})

export class ConsumoEnergiaComponent implements OnInit, OnDestroy {

  data: any = {
    consumo: 0,
    corrente: 0,
    potencia:0
  };

  constructor(private conexaoSocketService: ConexaoSocketService) { }

  ngOnInit(): void {
    this.conexaoSocketService.onMessage('current-data', (data: any) => {
      this.data.consumo = data.consumo;
      this.data.corrente = data.corrente;
      this.data.potencia = data.potencia;
    })
  }

  ngOnDestroy(): void {
    this.conexaoSocketService.disconnect();
  }

}
