import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';
import * as moment from 'moment';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService:ApiService ) { }
  cityList = [];
  seaLevelList = [];
  id = '';

  ngOnInit(): void {
    this.getWhether();
  }

  getWhether() {
    this.apiService.getConfig()
      .subscribe((data) => {
        this.cityList = data['list']
      });
  }
 
  getCityDetailsHandler(city){
    this.seaLevelList = [];
    if(city.id == this.id){
      this.id = ''
      return
    }
    this.id = city.id
    this.apiService.getDetail(city.name)
    .subscribe((data) => {
      this.getSeaLevelList(data['list'])
    });
  }
  getSeaLevelList(list){
    list.forEach(element => {
      const requiredTime = moment(element.dt_txt).format("H:mm")
      if(requiredTime === '9:00'){
        this.seaLevelList.push(element)
      }
    });
  }

}
