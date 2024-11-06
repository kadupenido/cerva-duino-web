import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConexaoSocketService } from '../conexao-socket.service';

@Component({
  selector: 'app-brassagem',
  templateUrl: './brassagem.component.html',
  styleUrl: './brassagem.component.css'
})
export class BrassagemComponent implements OnInit, OnDestroy {

  data: any = {
    temperatura: 0,
    setPoint: 0,
    resistencia: false,
    recirculacao: false
  };

  constructor(private conexaoSocketService: ConexaoSocketService) { }

  ngOnInit(): void {
    this.conexaoSocketService.onMessage('mlt-temp', (data: any) => {
      this.data.temperatura = data;
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    this.conexaoSocketService.disconnect();
  }

  public mltSetPoint() {
    this.conexaoSocketService.sendMessage('mlt-setpoint', this.data.setPoint);
  }

  public mltResistencia() {
    this.data.resistencia = !this.data.resistencia;
    this.conexaoSocketService.sendMessage('mlt-resistencia', this.data.resistencia);
  }

  public mltRecirculacao() {
    this.data.recirculacao = !this.data.recirculacao;
    this.conexaoSocketService.sendMessage('mlt-recirculacao', this.data.recirculacao);
  }

}
