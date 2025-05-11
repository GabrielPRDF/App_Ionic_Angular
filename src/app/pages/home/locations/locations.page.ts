import { Component } from '@angular/core';
import {HomeServices} from "../../../../services/home.services";

@Component({
  selector: 'app-locations',
  templateUrl: 'locations.page.html',
  styleUrls: ['locations.page.scss'],
  standalone: false,
})
export class LocationsPage {
  public locations: any;

  constructor(
    private service: HomeServices
  ) {
    this.getLocation();
  }

  async getLocation(){
    this.locations = await this.service.getLocations();
    console.log(this.locations);
  }

  selectLocation(loc: any){
    console.log(loc);
  }

}
