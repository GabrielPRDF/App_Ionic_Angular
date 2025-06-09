import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-caracter',
  templateUrl: './caracter.page.html',
  styleUrls: ['./caracter.page.scss'],
  standalone: false
})
export class CaracterPage implements OnInit {
  public parametro: any;
  public name: String = "";
  public gender: String = "";
  public imgPerfil: String = "";
  public location: any;
  public status: String = "";


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.parametro = JSON.stringify(this.router.getCurrentNavigation()?.extras);
    console.log("Dados", this.parametro);
    this.setParametros(JSON.parse(this.parametro));
  }

  public setParametros(dados : any) {
    this.name = dados.name;
    this.gender = dados.gender;
    this.imgPerfil = dados.image;
    this.location = dados.location;
    this.status = dados.status;
  }

  voltar(){
    this.router.navigate(["/tabs/characters"])
  }
}
