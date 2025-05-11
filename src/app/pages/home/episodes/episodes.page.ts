import { Component } from '@angular/core';
import {HomeServices} from "../../../../services/home.services";

@Component({
  selector: 'app-episodes',
  templateUrl: 'episodes.page.html',
  styleUrls: ['episodes.page.scss'],
  standalone: false,
})
export class EpisodesPage {
  public episodes: any;

  constructor(
    private service: HomeServices
  ) {
    this.getEpisode();
  }

  async getEpisode(){
    this.episodes = await this.service.getEpisodes();
    console.log(this.episodes);
  }

  selectEpisode(epi: any){
    console.log(epi);
  }
}
