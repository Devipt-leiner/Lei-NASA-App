import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NasaService } from 'src/app/core/services/nasa.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  activeItem!: MenuItem;
  items!: MenuItem[];
  template: string = 'earth';

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Earth',
        icon: 'pi pi-fw pi-home',
        command: (event) => {
          this.template = 'earth';
        },
      },
      {
        label: 'Mars Rover Fotos',
        icon: 'pi pi-fw pi-images',
        command: (event) => {
          this.template = 'mars';
        },
      },
    ];
    this.activeItem = this.items[0];
  }
}
