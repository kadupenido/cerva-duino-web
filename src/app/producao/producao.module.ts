import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducaoComponent } from './producao.component';
import { BrassagemComponent } from './brassagem/brassagem.component';
import { FervuraComponent } from './fervura/fervura.component';
import { AguaQuenteComponent } from './agua-quente/agua-quente.component';
import { ConsumoEnergiaComponent } from './consumo-energia/consumo-energia.component';
import { ConexaoSocketService } from './conexao-socket.service';
import { FormsModule } from '@angular/forms';
import { NgxGaugeModule } from 'ngx-gauge';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    ProducaoComponent,
    BrassagemComponent,
    FervuraComponent,
    AguaQuenteComponent,
    ConsumoEnergiaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxGaugeModule,
    MatCardModule,
    MatSliderModule
  ],
  exports: [
    ProducaoComponent
  ],
  providers: [
    ConexaoSocketService
  ]
})
export class ProducaoModule { }
