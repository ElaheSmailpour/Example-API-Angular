import { Component, OnInit } from '@angular/core';
import { PersonServicesService } from './person-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'example-Api';
  persons: any[] = [];
  constructor(private _personService: PersonServicesService) {
   
  }
  ngOnInit(): void {
    this._personService.getData().subscribe(data=>this.persons=data)
  }


}

