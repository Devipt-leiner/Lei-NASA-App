import { Component, OnInit } from '@angular/core';
import { GetMarsPhotos } from 'src/app/core/interfaces/mars.interfaces';
import { NasaService } from 'src/app/core/services/nasa.service';

@Component({
  selector: 'app-mars-template',
  templateUrl: './mars-template.component.html',
  styleUrls: ['./mars-template.component.css']
})
export class MarsTemplateComponent implements OnInit {
  results: GetMarsPhotos[] = [];

  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.nasaService.getMarsRoverPhotos().subscribe((response: any) => {
      this.results = response.photos;
    });
  }

}
