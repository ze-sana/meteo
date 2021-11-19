import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-day-meteo',
  templateUrl: './day-meteo.component.html',
  styleUrls: ['./day-meteo.component.css']
})
export class DayMeteoComponent implements OnInit {
  @Input() dayMeteo : any | undefined;

  @Output() notify  = new EventEmitter;
  
  constructor() { }

  ngOnInit(): void {
  }

  
}


