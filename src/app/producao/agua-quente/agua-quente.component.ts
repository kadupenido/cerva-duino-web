import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConexaoSocketService } from '../conexao-socket.service';

@Component({
  selector: 'app-agua-quente',
  templateUrl: './agua-quente.component.html',
  styleUrl: './agua-quente.component.css'
})

export class AguaQuenteComponent implements OnInit, OnDestroy {

  data: any = {
    temperatura: 0,
    setPoint: 0,
    resistencia: false
  };

  constructor(private conexaoSocketService: ConexaoSocketService) { }

  ngOnInit(): void {
    this.conexaoSocketService.onMessage('hlt-temp', (data: any) => {
      this.data.temperatura = data;
    });
  }

  ngOnDestroy(): void {
    this.conexaoSocketService.disconnect();
  }

  public hltSetPoint() {
    this.conexaoSocketService.sendMessage('hlt-setpoint', this.data.setPoint);
  }

  public hltResistencia() {

    this.data.resistencia = !this.data.resistencia;
    this.conexaoSocketService.sendMessage('hlt-resistencia', this.data.resistencia);
  }

}
