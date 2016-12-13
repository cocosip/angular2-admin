
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Salert } from './salert';
@Component({
  selector: 'app-salert',
  templateUrl: './salert.component.html',
  styleUrls: ['./salert.component.css']
})
export class SalertComponent implements OnInit {

  @Input()
  salert: Salert;
  @Output() onConfirmed = new EventEmitter<boolean>();

  constructor() { }
  ngOnInit() {
  }

  sure() {
    this.salert.isActive = false;
  }

  confirm(agreed: boolean) {
    this.salert.isActive = false;
    this.onConfirmed.emit(agreed);
  }
}


