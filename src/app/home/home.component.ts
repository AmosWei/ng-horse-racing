import { Component, OnInit } from '@angular/core';
import { RacingService } from '../racing.service';
import { IHorse } from "../model/IHorse";
import { IDistance } from "../model/IDistance";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public horseList: Array<IHorse> = [];

  constructor(
    public RacingService: RacingService,
  ) { }

  ngOnInit(): void {
    this.getHorses();
  }


  trimWording(text:any){
    text.replaceAll('-', ' ')
    return text;
  }

  getHorses() {
    this.RacingService.getHorses().subscribe(
      (res) => {
        this.horseList = res;
      }
    )
  }

}
