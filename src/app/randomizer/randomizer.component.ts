import { Component, OnInit } from '@angular/core';
import { Groups, ServiceArea, Location , SurfaceWear, Vehicle } from '../models/general.model';
import { DataSetService } from '../../assets/data/data-set.service'
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, flipAnimation } from 'angular-animations';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    flipAnimation(),
  ]
})
export class RandomizerComponent implements OnInit {
  isExecuted: boolean = false;
  question: string = '';
  numberSublocations: number = 5;
  selectedAll:boolean = false;
  //LOCATION VARIABLES
  isLocationSelected: boolean = false;
  locationList: Location[] = [];
  locationSelected: Location = new Location();
  locationAnimationState = false;
  //GROUP VARIABLES
  isGroupSelected: boolean = false;
  groupList: Groups[] = [];
  groupSelected: Groups = new Groups();
  groupAnimationState = false;
  //SURFACEWEAR VARIABLES
  isSurfaceWearSelected: boolean = false;
  surfaceWearList: SurfaceWear[] = [];
  surfaceWearSelected: SurfaceWear[] = [];
  surfaceWearAnimationState = false;
  //VEHICLE
  isVehicleSelected: boolean = false;
  vehicleList: Vehicle[] = [];
  vehicleSelected: Vehicle = new Vehicle();
  vehicleAnimationState = false;
  //SERVICEAREA
  isServiceAreaSelected: boolean = false;
  serviceAreaList: ServiceArea[] = [];
  serviceAreaSelected: ServiceArea[] = [];
  serviceAreaAnimationState = false;
  
  constructor(private dataService: DataSetService) { }


  ngOnInit(): void {
    this.locationList = this.dataService.getLocations();
    this.groupList = this.dataService.getGroups();
    this.surfaceWearList = this.dataService.getSurfaceWear();
    this.serviceAreaList = this.dataService.getServiceArea();
    this.getImagesUri();
    console.log(this.locationList);
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

  getLocationRandom(){
    let rand = this.getRandom(0,13);
    this.locationSelected = this.locationList[rand]
    this.isLocationSelected = true;
    this.locationAnimate();
  }

  getGropupRandom(){
    let rand = this.getRandom(0,13);
    this.groupSelected = this.groupList[rand]
    this.isGroupSelected = true;
    this.groupAnimate();
    if(this.isVehicleSelected){
      this.isVehicleSelected = false;
      this.vehicleAnimate();
    }
  }

  getSurfaceWearRandom(){
    this.surfaceWearSelected = [];
    for (let index = 0; index < this.numberSublocations; index++) {
      let rand = this.getRandom(0,5);
      this.surfaceWearSelected.push(this.surfaceWearList[rand])
    }
    this.isSurfaceWearSelected = true;
    this.surfaceWearAnimate();
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
    this.vehicleAnimate();
  }

  getServiceAreaRandom(){
    this.serviceAreaSelected = [];
    for (let index = 0; index < this.numberSublocations; index++) {
      let rand = this.getRandom(0,4);
      this.serviceAreaSelected.push(this.serviceAreaList[rand])
    }
    this.isServiceAreaSelected = true;
    this.serviceAreaAnimate();
  }
  
  
  locationAnimate() {
    this.locationAnimationState = false;
    setTimeout(() => {
      this.locationAnimationState = true;
    }, 1);
  }
  
  groupAnimate() {
    this.groupAnimationState = false;
    setTimeout(() => {
      this.groupAnimationState = true;
    }, 1);
  }
  
  surfaceWearAnimate() {
    this.surfaceWearAnimationState = false;
    setTimeout(() => {
      this.surfaceWearAnimationState = true;
    }, 1);
  }
  
  vehicleAnimate() {
    this.vehicleAnimationState = false;
    setTimeout(() => {
      this.vehicleAnimationState = true;
    }, 1);
  }
  
  serviceAreaAnimate() {
    this.serviceAreaAnimationState = false;
    setTimeout(() => {
      this.serviceAreaAnimationState = true;
    }, 1);
  }

  chooseAll(){
    this.getLocationRandom();
    this.getGropupRandom();
    this.getVehicleByGroup();
    this.getSurfaceWearRandom();
    this.getServiceAreaRandom();
  }


}
