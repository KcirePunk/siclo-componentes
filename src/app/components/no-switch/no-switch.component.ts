import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-switch',
  templateUrl: './no-switch.component.html',
  styles: []
})
export class NoSwitchComponent implements OnInit {

  alerta: string = "info";

  constructor() { }

  ngOnInit() {
  }

}
