import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {firstValueFrom} from "rxjs";

@Injectable({ providedIn: 'root' })
export class CaracterService {
  constructor(
    private http: HttpClient,
  ){}

  public async getCaracter(){
    const result =  await firstValueFrom(this.http.get("https://rickandmortyapi.com/api/character"));
    console.log(result);
  }
}
