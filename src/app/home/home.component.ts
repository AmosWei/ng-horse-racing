import { Component, OnInit } from '@angular/core';
import { RacingService } from '../racing.service';
import { IHorse } from "../model/IHorse";
import { IDistance } from "../model/IDistance";
import { elementAt } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public horseList: Array<IHorse> = [];
  public distanceDetail: any = [];
  public endRaceTime: number = 0;
  public distances: any = [];
  public isPaused: boolean = false;

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

  pause(){
    this.isPaused = true;
  }

  getHorses() {
    this.RacingService.getHorses().subscribe(
      (res) => {
        this.horseList = res;
      }
    )
  }

  getHorseID(){
    let id = this.horseList.map((a) => {return a.id;});
    id.map((element) => {
      this.getDistances(element);
    })
  }

  getDistances(id: number) {
    let second: number = 0;
    if(!this.isPaused){
      let handle = setInterval(() => {
        this.RacingService.getDistances(id, second).subscribe(
          (res) => {
            this.distanceDetail = res;
            console.log(this.distanceDetail);
            second++;
            if(second == 6){
              clearInterval(handle);
            }
          }
        );
      },1000);
    }
  }
  
  getDistanceByHorse(id: any){
    
  }

  start(){
    this.getHorseID();
  }
}