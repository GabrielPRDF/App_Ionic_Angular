import { Component } from '@angular/core';
import {CaracterService} from "../../../../services/caracter.service";

@Component({
  selector: 'app-character',
  templateUrl: 'character.page.html',
  styleUrls: ['character.page.scss'],
  standalone: false,
})
export class CharacterPage {

  constructor(
    private service: CaracterService
  ) {}

  getCaracter(){
    this.service.getCaracter();
  }
}
