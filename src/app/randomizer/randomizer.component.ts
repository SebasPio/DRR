import { Component, OnInit } from '@angular/core';
import { Groups, ServiceArea, Stages, SurfaceWear, Vehicle } from '../models/general.model';
import { DataSetService } from '../../assets/data/data-set.service'
@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css']
})
export class RandomizerComponent implements OnInit {
  isExecuted: boolean = false;
  question: string = '';
  numberSubstages: number = 5;
  //STAGE VARIABLES
  isStageSelected: boolean = false;
  stageList: Stages[] = [];
  stageSelected: Stages = new Stages();
  //VEHICLECLASS VARIABLES
  isGroupSelected: boolean = false;
  groupList: Groups[] = [];
  groupSelected: Groups = new Groups();
  //SURFACEWEAR VARIABLES
  isSurfaceWearSelected: boolean = false;
  surfaceWearList: SurfaceWear[] = [];
  surfaceWearSelected: SurfaceWear[] = [];
  //VEHICLE
  isVehicleSelected: boolean = false;
  vehicleList: Vehicle[] = [];
  vehicleSelected: Vehicle = new Vehicle();
  //SERVICEAREA
  isServiceAreaSelected: boolean = false;
  serviceAreaList: ServiceArea[] = [];
  serviceAreaSelected: ServiceArea[] = [];

  
  constructor(private dataService: DataSetService) { }


  ngOnInit(): void {
    this.stageList = this.dataService.getStages();
    this.groupList = this.dataService.getGroups();
    this.surfaceWearList = this.dataService.getSurfaceWear();
    this.serviceAreaList = this.dataService.getServiceArea();
    this.getImagesUri();
    console.log(this.stageList);
  }

  getImagesUri(){
    this.question = this.dataService.getQuestion();
  }

  getRandom(min: number, max: number): number{
    return Math.floor((Math.random() * max) + min);
  }

  execute(){
    this.isExecuted = true;
    new Promise(f => setTimeout(f, 1000)).then(()=>{
      window.scroll({
        top: 320,
        left: 100,
        behavior: 'smooth'
      });
    });
  }

  getStageRandom(){
    let rand = this.getRandom(0,13);
    this.stageSelected = this.stageList[rand]
    this.isStageSelected = true;
  }

  getGropupRandom(){
    let rand = this.getRandom(0,13);
    this.groupSelected = this.groupList[rand]
    this.isGroupSelected = true;
    this.isVehicleSelected = false;
  }

  getSurfaceWearRandom(){
    this.surfaceWearSelected = [];
    for (let index = 0; index < this.numberSubstages; index++) {
      let rand = this.getRandom(0,5);
      this.surfaceWearSelected.push(this.surfaceWearList[rand])
    }
    this.isSurfaceWearSelected = true;
  }

  getVehicleByGroup(){
    this.vehicleList = [];
    if(this.groupSelected == null || this.groupSelected == undefined){
      return;
    }
    else if(this.groupSelected.groupId == 0){
      return;
    }
    else{
      this.vehicleList =  this.dataService.getVehicleByGroup(this.groupSelected.groupId);
      console.log(this.vehicleList.length)
       let rand = this.getRandom(0,this.vehicleList.length);
       console.log(this.vehicleList[rand])
       this.vehicleSelected = this.vehicleList[rand]
       this.isVehicleSelected = true;
    }
  }

  getServiceAreaRandom(){
    this.serviceAreaSelected = [];
    for (let index = 0; index < this.numberSubstages; index++) {
      let rand = this.getRandom(0,4);
      this.serviceAreaSelected.push(this.serviceAreaList[rand])
    }
    this.isServiceAreaSelected = true;
  }
  

}
