import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.scss']
})
export class CityItemComponent implements OnInit {
  @Input() city: any = {};
  @Input() id: any = '';
  @Output() getCityDetailsEmitter = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  getCityDetails(){
    this.getCityDetailsEmitter.emit(this.city)
  }
 
  getTimeFromDate(timestamp) {
    console.log('timestamp: ', timestamp);
    var date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return hours+":"+minutes
  }
 
}
