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

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.parametro = JSON.stringify(this.router.getCurrentNavigation()?.extras);
    console.log(this.parametro);
  }

  voltar(){
    this.router.navigate(["/tabs/characters"])
  }
}
