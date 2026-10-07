import { Component } from '@angular/core';
// Importando FormsModule para capiturar os valores do formulário
import {FormsModule} from '@angular/forms';
// Importar para funcionar if mais não usa else apenas ngIf
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-calculadora',
  imports: [FormsModule,CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calcularResultado(){
    console.log("teste");
    this.resultado = this.numero1 + this.numero2;
  }

}
