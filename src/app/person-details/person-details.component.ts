import { Component, OnInit } from '@angular/core';
import {PersonServicesService} from '../person-services.service'
@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  persons:any[]=[];
  constructor(private _service: PersonServicesService) { 
    
  }
 
 
  ngOnInit(): void {
    this._service.getData().subscribe(data=>this.persons=data)
  }

}
