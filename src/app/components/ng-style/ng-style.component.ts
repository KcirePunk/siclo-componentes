import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="grande">
      Hola mundo... esta es una etiqueta
    </p>

    <button class="btn btn-success" (click)="grande = grande + 5" >
      Aumentar
    </button>

    <button class="btn btn-danger" (click)="grande = grande - 5" >
      Disminuir
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  grande: number = 30;

  aumnetar(numero){
    return this.grande + numero;
  }

  constructor() { }

  ngOnInit() {
  }

}
