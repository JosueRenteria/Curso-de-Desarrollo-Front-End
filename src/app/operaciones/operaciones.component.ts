import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})

//implements OnInit, pero, con este no me funciona.
export class OperacionesComponent implements OnInit{
  titulo = "Operaciones Basicas"
  numeroUno: number = 0;
  numeroDos: number = 0;
  resultado: number = 0;

  constructor(){}
  ngOnInit(): void{

  }

  multiplicar(): void{
    this.resultado = this.numeroUno * this.numeroDos;
    console.log(this.resultado)
  }

  sumar(): void{
    this.resultado = this.numeroUno + this.numeroDos;
  }

  restar(): void{
    this.resultado = this.numeroUno - this.numeroDos;
  }

  dividir(): void{
    this.resultado = this.numeroUno / this.numeroDos;
  }

}
