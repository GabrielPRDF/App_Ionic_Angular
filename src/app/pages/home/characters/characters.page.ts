import { Component } from '@angular/core';
import {HomeServices} from "../../../../services/home.services";
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: 'characters.page.html',
  styleUrls: ['characters.page.scss'],
  standalone: false,
})
export class CharactersPage {
  public caracters: any;

  constructor(
    private service: HomeServices,
    private router: Router
  ) {
    this.getCaracter();
  }

  async getCaracter(){
    this.caracters = await this.service.getCaracter();
    console.log(this.caracters);
  }

  selectCaracter(carac: any){
    console.log(carac);
    this.router.navigateByUrl('/caracter', carac);
  }
}
