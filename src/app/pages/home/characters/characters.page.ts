import { Component } from '@angular/core';
import {CaracterService} from "../../../../services/caracter.service";

@Component({
  selector: 'app-character',
  templateUrl: 'characters.page.html',
  styleUrls: ['characters.page.scss'],
  standalone: false,
})
export class CharactersPage {
  public caracters: any;

  constructor(
    private service: CaracterService
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
