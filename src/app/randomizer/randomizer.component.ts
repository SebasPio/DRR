import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Groups,
  ServiceArea,
  Location,
  SurfaceWear,
  Vehicle,
  Weather,
} from '../models/general.model';
import { DataSetService } from '../../assets/data/data-set.service';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  flipAnimation,
} from 'angular-animations';
import { delay } from 'rxjs';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    flipAnimation(),
  ],
})

export class RandomizerComponent implements OnInit {
  disabledSelection: boolean = false;
  isExecuted: boolean = false;
  question: string = '';
  numberSublocations: number = 5;
  selectedAll: boolean = false;
  nonePercent = 50;
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
  groupLoading: number = 0;
  //SURFACEWEAR VARIABLES
  isSurfaceWearSelected: boolean = false;
  surfaceWearList: SurfaceWear[] = [];
  surfaceWearSelected: SurfaceWear[] = [];
  surfaceWearAnimationState = false;
  surfaceWearLoading: number = 0;
  //VEHICLE
  isVehicleSelected: boolean = false;
  vehicleList: Vehicle[] = [];
  vehicleSelected: Vehicle = new Vehicle();
  vehicleAnimationState = false;
  vehicleLoading: number = 0;
  //SERVICEAREA
  isServiceAreaSelected: boolean = false;
  serviceAreaList: ServiceArea[] = [];
  serviceAreaListNotNone: ServiceArea[] = [];
  serviceAreaSelected: ServiceArea[] = [];
  serviceAreaAnimationState = false;
  serviceAreaLoading: number = 0;
  //Weather
  isWeatherSelected: boolean = false;
  weatherList: Weather[] = [];
  weatherSelected: Weather[] = [];
  weatherAnimationState = false;
  weatherLoading: number = 0;

  constructor(private dataService: DataSetService) {}

  ngOnInit(): void {
    this.locationList = this.dataService.getLocations();
    this.groupList = this.dataService.getGroups();
    this.surfaceWearList = this.dataService.getSurfaceWear();
    this.serviceAreaListNotNone = this.dataService.getServiceAreaWithoutNone();
    this.serviceAreaList = this.dataService.getServiceAreaByNonePercen(this.nonePercent);
    this.getImagesUri();
    console.log(this.locationList);
  }

  changeSlider(event: any){
    console.log(event.value);
    this.nonePercent = event.value;
    this.serviceAreaList = [];
    this.serviceAreaList = this.dataService.getServiceAreaByNonePercen(event.value);
  }

  formatLabel(value: number) {
      return value + '%';
  }

  getImagesUri() {
    this.question = this.dataService.getQuestion();
  }

  getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * max + min);
  }

  execute() {
    this.isExecuted = true;
    new Promise((f) => setTimeout(f, 1000)).then(() => {
      window.scroll({
        top: 320,
        left: 100,
        behavior: 'smooth',
      });
    });
  }

  async getLocationRandom() {
    this.disabledSelection = true;
    let rand = this.getRandom(0, 13);
    this.locationSelected = this.locationList[rand];
    this.isLocationSelected = true;
    for (let index = 0; index < 13; index++) {
      this.locationAnimate();
      let rand = this.getRandom(0, 13);
      this.locationSelected = this.locationList[rand];
      await new Promise((f) => setTimeout(f, 20 * index));
    }
    if (this.isWeatherSelected) {
      this.isWeatherSelected = false;
      this.weatherAnimate();
    }
    this.disabledSelection = false;
  }

  async getGropupRandom() {
    this.disabledSelection = true;
    let rand = this.getRandom(0, 13);
    this.groupSelected = this.groupList[rand];
    this.isGroupSelected = true;
    for (let index = 0; index < 13; index++) {
      this.groupAnimate();
      let rand = this.getRandom(0, 13);
      this.groupSelected = this.groupList[rand];
      await new Promise((f) => setTimeout(f, 20 * index));
    }
    this.groupAnimate();
    if (this.isVehicleSelected) {
      this.isVehicleSelected = false;
      this.vehicleAnimate();
    }
    this.disabledSelection = false;
  }

  async getSurfaceWearRandom() {
    this.disabledSelection = true;
    this.surfaceWearSelected = [];
    let rand = this.getRandom(0, 5);
    this.isSurfaceWearSelected = true;

    for (let index = 0; index < 13; index++) {
      this.surfaceWearSelected = [];
      for (let index = 0; index < this.numberSublocations; index++) {
        this.surfaceWearAnimate();
        let rand = this.getRandom(0, 5);
        this.surfaceWearSelected.push(this.surfaceWearList[rand]);
      }
      await new Promise((f) => setTimeout(f, 10 * index));
    }
    this.disabledSelection = false;
  }

  async getVehicleByGroup() {
    this.disabledSelection = true;
    this.vehicleList = [];
    if (this.groupSelected == null || this.groupSelected == undefined) {
      this.disabledSelection = false;
      return;
    } else if (this.groupSelected.groupId == 0) {
      this.disabledSelection = false;
      return;
    } else {
      this.vehicleList = this.dataService.getVehicleByGroup(
        this.groupSelected.groupId
      );

      let rand = this.getRandom(0, this.vehicleList.length);
      this.vehicleSelected = this.vehicleList[rand];
      this.isVehicleSelected = true;
      for (let index = 0; index < 13; index++) {
        this.vehicleAnimate();
        let rand = this.getRandom(0, this.vehicleList.length);
        this.vehicleSelected = this.vehicleList[rand];
        await new Promise((f) => setTimeout(f, 20 * index));
      }
    }
    this.disabledSelection = false;
  }

  async getWeatherByLocation() {
    this.disabledSelection = true;
    this.weatherList = [];
    if (this.isLocationSelected == null || this.locationSelected == undefined) {
      this.disabledSelection = false;
      return;
    } else if (this.locationSelected.locationId == 0) {
      this.disabledSelection = false;
      return;
    } else {
      console.log(this.locationSelected.locationId);
      this.weatherList = this.dataService.getWeatherByLocation(
        this.locationSelected.locationId
      );      
      this.isWeatherSelected = true;
      for (let index = 0; index < 13; index++) {
        this.weatherSelected = [];
        this.weatherAnimate();
        for (let index = 0; index < this.numberSublocations; index++) {
          let rand = this.getRandom(0, this.weatherList.length);
          this.weatherSelected.push(this.weatherList[rand]);
        }
        await new Promise((f) => setTimeout(f, 10 * index));
      }
      this.disabledSelection = false;
    }
  }

  async getServiceAreaRandom() {
    this.disabledSelection = true;
    this.serviceAreaSelected = [];

    this.isServiceAreaSelected = true;
    for (let index = 0; index < 13; index++) {
      this.serviceAreaSelected = [];
      this.serviceAreaAnimate()

      let rand = this.getRandom(0, this.serviceAreaListNotNone.length);
      this.serviceAreaSelected.push(this.serviceAreaListNotNone[rand])

      for (let i = 0; i < this.numberSublocations-1; i++) {
        let rand = this.getRandom(0, this.serviceAreaList.length);
        this.serviceAreaSelected.push(this.serviceAreaList[rand]);
      }
      await new Promise((f) => setTimeout(f, 10 * index));
    }
    this.disabledSelection = false;
  }

  locationAnimate() {
    console.log('locations animate');
    this.locationAnimationState = false;
    setTimeout(() => {
      this.locationAnimationState = true;
    }, 1);
  }

  weatherAnimate() {
    console.log('weather animate');
    this.weatherAnimationState = false;
    setTimeout(() => {
      this.weatherAnimationState = true;
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

  chooseAll() {
    this.getLocationRandom().then(()=>{
      this.getWeatherByLocation();
    });
    this.getGropupRandom().then(() => {
      this.getVehicleByGroup();
    });
    this.getSurfaceWearRandom();
    this.getServiceAreaRandom();
  }
}
