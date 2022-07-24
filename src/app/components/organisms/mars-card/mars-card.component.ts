import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mars-card',
  templateUrl: './mars-card.component.html',
  styleUrls: ['./mars-card.component.css']
})
export class MarsCardComponent implements OnInit {

  @Input() image: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
