import { Component } from '@angular/core';
import {CaracterService} from "../../../../services/caracter.service";

@Component({
  selector: 'app-character',
  templateUrl: 'character.page.html',
  styleUrls: ['character.page.scss'],
  standalone: false,
})
export class CharacterPage {
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
}
