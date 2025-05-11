import { Component } from '@angular/core';
import {HomeServices} from "../../../../services/home.services";

@Component({
  selector: 'app-character',
  templateUrl: 'characters.page.html',
  styleUrls: ['characters.page.scss'],
  standalone: false,
})
export class CharactersPage {
  public caracters: any;

  constructor(
    private service: HomeServices
  ) {
    this.getCaracter();
  }

  async getCaracter(){
    this.caracters = await this.service.getCaracter();
    console.log(this.caracters);
  }

  selectCaracter(carac: any){
    console.log(carac);
  }
}
