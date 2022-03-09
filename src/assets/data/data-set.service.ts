import { Injectable } from '@angular/core';
import {
  Groups,
  ServiceArea,
  Location,
  SurfaceWear,
  Vehicle,
} from 'src/app/models/general.model';

@Injectable({
  providedIn: 'root',
})
export class DataSetService {
  constructor() {}
  question =
    '../assets/images/others/question.webp';

  vehiclesArray: Vehicle[] = [
    {
      vehicleId: 1,
      vehicleName: 'MINI COOPER S',
      vehicleProbability: 1,
      vehicleClassId: 1,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 2,
      vehicleName: 'DS  AUTOMOBILES DS 21',
      vehicleProbability: 1,
      vehicleClassId: 1,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 3,
      vehicleName: 'LANCIA FULVIA HF',
      vehicleProbability: 1,
      vehicleClassId: 1,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 4,
      vehicleName: 'VOLKSWAGEN GOLF GTI 16V',
      vehicleProbability: 1,
      vehicleClassId: 2,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 5,
      vehicleName: 'PEUGEOT 205 GTI',
      vehicleProbability: 1,
      vehicleClassId: 2,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 6,
      vehicleName: 'FORD  ESCORT MKII',
      vehicleProbability: 1,
      vehicleClassId: 3,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 7,
      vehicleName: 'RENAULT ALPINE  A110 1600 S',
      vehicleProbability: 1,
      vehicleClassId: 3,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 8,
      vehicleName: 'FIAT 131 ABARTH RALLY',
      vehicleProbability: 1,
      vehicleClassId: 3,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 9,
      vehicleName: 'OPEL KADETT C GT / E',
      vehicleProbability: 1,
      vehicleClassId: 3,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 10,
      vehicleName: 'BMW E30 M3 EVO RALLY',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 11,
      vehicleName: 'OPEL ASCONA 400',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 12,
      vehicleName: 'LANCIA STRATOS',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 13,
      vehicleName: 'DATSUN 240Z',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 14,
      vehicleName: 'RENAULT 5 TURBO',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 15,
      vehicleName: 'FORD SIERRA COSWORTH RS500',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 16,
      vehicleName: 'PEUGEOT 306 MAXI',
      vehicleProbability: 1,
      vehicleClassId: 5,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 17,
      vehicleName: 'SEAT IBIZA KIT CAR',
      vehicleProbability: 1,
      vehicleClassId: 5,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 18,
      vehicleName: 'VOLKSWAGEN GOLF KIT CAR',
      vehicleProbability: 1,
      vehicleClassId: 5,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 19,
      vehicleName: 'MITSUBISHI LANCER EVOLUTION VI',
      vehicleProbability: 1,
      vehicleClassId: 6,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 20,
      vehicleName: 'SUBARU IMPREZA 1995',
      vehicleProbability: 1,
      vehicleClassId: 6,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 21,
      vehicleName: 'SUBARU LEGACY RS',
      vehicleProbability: 1,
      vehicleClassId: 6,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 22,
      vehicleName: 'LANCIA DELTA HF INTEGRALE',
      vehicleProbability: 1,
      vehicleClassId: 6,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 23,
      vehicleName: 'FORD ESCORT RS COSWORTH',
      vehicleProbability: 1,
      vehicleClassId: 6,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 24,
      vehicleName: 'LANCIA 037 EVO 2',
      vehicleProbability: 1,
      vehicleClassId: 7,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 25,
      vehicleName: 'OPEL MANTA 400',
      vehicleProbability: 1,
      vehicleClassId: 7,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 26,
      vehicleName: 'BMW M1 PROCAR RALLY',
      vehicleProbability: 1,
      vehicleClassId: 7,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 27,
      vehicleName: 'PORSCHE 911 SC RS',
      vehicleProbability: 1,
      vehicleClassId: 7,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 28,
      vehicleName: 'AUDI SPORT QUATTRO S1 E2',
      vehicleProbability: 1,
      vehicleClassId: 8,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 29,
      vehicleName: 'PEUGEOT 205 T16 EVO 2',
      vehicleProbability: 1,
      vehicleClassId: 8,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 30,
      vehicleName: 'LANCIA DELTA S4',
      vehicleProbability: 1,
      vehicleClassId: 8,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 31,
      vehicleName: 'FORD RS200',
      vehicleProbability: 1,
      vehicleClassId: 8,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 32,
      vehicleName: 'MG METRO 6R4',
      vehicleProbability: 1,
      vehicleClassId: 8,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 33,
      vehicleName: 'FORD FIESTA R2',
      vehicleProbability: 1,
      vehicleClassId: 9,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 34,
      vehicleName: 'OPEL ADAM R2',
      vehicleProbability: 1,
      vehicleClassId: 9,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 35,
      vehicleName: 'PEUGEOT 208 R2',
      vehicleProbability: 1,
      vehicleClassId: 9,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 36,
      vehicleName: 'SUBARU WRX STI NR4',
      vehicleProbability: 1,
      vehicleClassId: 10,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 37,
      vehicleName: 'MITSUBISHI LANCER EVOLUTION X',
      vehicleProbability: 1,
      vehicleClassId: 10,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 38,
      vehicleName: 'FORD FIESTA R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 39,
      vehicleName: 'PEUGEOT 208 R5 T16',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 40,
      vehicleName: 'VOLKSWAGEN POLO GTI R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 41,
      vehicleName: 'MITSUBISHI SPACESTAR R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 42,
      vehicleName: 'SKODA FABIA R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 43,
      vehicleName: 'CITROEN C3 R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 44,
      vehicleName: 'FORD FIESTA R5 MKII',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 45,
      vehicleName: 'SKODA FABIA RALLY',
      vehicleProbability: 1,
      vehicleClassId: 12,
      vehicleImageUrlWebp: '../assets/images/vehicles/200CC/SKODA.webp'
    },
    {
      vehicleId: 46,
      vehicleName: 'CITROEN C4 RALLY',
      vehicleProbability: 1,
      vehicleClassId: 12,
      vehicleImageUrlWebp: '../assets/images/vehicles/200CC/CITROEN.webp'
    },
    {
      vehicleId: 47,
      vehicleName: 'FORD FOCUS RS RALLY 2001',
      vehicleProbability: 1,
      vehicleClassId: 12,
      vehicleImageUrlWebp: '../assets/images/vehicles/200CC/FORD2001.webp'
    },
    {
      vehicleId: 48,
      vehicleName: 'SUBARU IMPREZA S4 RALLY',
      vehicleProbability: 1,
      vehicleClassId: 12,
      vehicleImageUrlWebp: '../assets/images/vehicles/200CC/IMPREZAS4.webp'
    },
    {
      vehicleId: 49,
      vehicleName: 'SUBARU IMPREZA 2001',
      vehicleProbability: 1,
      vehicleClassId: 12,
      vehicleImageUrlWebp: '../assets/images/vehicles/200CC/IMPREZA2001.webp'
    },
    {
      vehicleId: 50,
      vehicleName: 'FORD FOCUS RS RALLY 2007',
      vehicleProbability: 1,
      vehicleClassId: 12,
      vehicleImageUrlWebp: '../assets/images/vehicles/200CC/FORD2007.webp'
    },
    {
      vehicleId: 51,
      vehicleName: 'SUBARU IMPREZA',
      vehicleProbability: 1,
      vehicleClassId: 12,
      vehicleImageUrlWebp: '../assets/images/vehicles/200CC/IMPREZA.webp'
    },
    {
      vehicleId: 52,
      vehicleName: 'PEUGEOT 206 RALLY',
      vehicleProbability: 1,
      vehicleClassId: 12,
      vehicleImageUrlWebp: '../assets/images/vehicles/200CC/PEUGEOT.webp'
    },
    {
      vehicleId: 53,
      vehicleName: 'BMW M2 COMPETITION',
      vehicleProbability: 1,
      vehicleClassId: 13,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 54,
      vehicleName: 'CHEVROLET CAMARO GT4.R',
      vehicleProbability: 1,
      vehicleClassId: 13,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 55,
      vehicleName: 'PORSCHE RGT RALLY SPEC',
      vehicleProbability: 1,
      vehicleClassId: 13,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 56,
      vehicleName: 'ASTON MARTIN V8 VANTAGE GT4',
      vehicleProbability: 1,
      vehicleClassId: 13,
      vehicleImageUrlWebp: ''
    },
    {
      vehicleId: 57,
      vehicleName: 'FORD MUSTANG GT4',
      vehicleProbability: 1,
      vehicleClassId: 13,
      vehicleImageUrlWebp: ''
    },
  ];

  getQuestion() {
    return this.question;
  }

  getLocations() {
    let locationsList: Location[] = [
      {
        locationId: 1,
        locationName: 'MONTE CARLO - MONACO',
        locationProbability: 1,
        locationImageUrlWebp: '../assets/images/locations/MONACO.webp',
      },
      {
        locationId: 2,
        locationName: 'POWYS - WALES',
        locationProbability: 1,
        locationImageUrlWebp: '../assets/images/locations/WALES.webp',
      },
      {
        locationId: 3,
        locationName: 'ARGOLIS - GREECE',
        locationProbability: 1,
        locationImageUrlWebp: '../assets/images/locations/GREECE.webp',
      },
      {
        locationId: 4,
        locationName: 'BAUMHOLDER - GERMANY',
        locationProbability: 1,
        locationImageUrlWebp: '../assets/images/locations/GERMANY.webp',
      },
      {
        locationId: 5,
        locationName: 'JAMSA - FINLAND',
        locationProbability: 1,
        locationImageUrlWebp: '../assets/images/locations/FINLAND.webp',
      },
      {
        locationId: 6,
        locationName: 'VARMLAND - SWEDEN',
        locationProbability: 1,
        locationImageUrlWebp: '../assets/images/locations/SWEDEN.webp',
      },
      {
        locationId: 7,
        locationName: 'RIBADELLES - SPAIN',
        locationProbability: 1,
        locationImageUrlWebp: '../assets/images/locations/SPAIN.webp',
      },
      {
        locationId: 8,
        locationName: 'MONARO - AUSTRALIA',
        locationProbability: 1,
        locationImageUrlWebp: '../assets/images/locations/AUSTRALIA.webp',
      },
      {
        locationId: 9,
        locationName: 'HAWKES BAY - NEW ZELAND',
        locationProbability: 1,
        locationImageUrlWebp: '../assets/images/locations/NEW ZELAND.webp',
      },
      {
        locationId: 10,
        locationName: 'CATAMARCA PROV. - ARGENTINA',
        locationProbability: 1,
        locationImageUrlWebp: '../assets/images/locations/ARGENTINA.webp',
      },
      {
        locationId: 11,
        locationName: 'LECZNA COUNTY - POLAND',
        locationProbability: 1,
        locationImageUrlWebp: '../assets/images/locations/POLAND.webp',
      },
      {
        locationId: 12,
        locationName: 'NEW ENGLAND - USA',
        locationProbability: 1,
        locationImageUrlWebp: '../assets/images/locations/USA.webp',
      },
      {
        locationId: 13,
        locationName: 'PERTH AND KINROSS - SCOTLAND',
        locationProbability: 1,
        locationImageUrlWebp: '../assets/images/locations/SCOTLAND.webp',
      },
    ];
    return locationsList;
  }

  getGroups() {
    let groupList: Groups[] = [
      {
        groupId: 1,
        groupName: 'H1',
        groupProbability: 1,
        groupImageUrl: '',
      },
      {
        groupId: 2,
        groupName: 'H2 FWD',
        groupProbability: 1,
        groupImageUrl: '',
      },
      {
        groupId: 3,
        groupName: 'H2 RWD',
        groupProbability: 1,
        groupImageUrl: '',
      },
      {
        groupId: 4,
        groupName: 'H3',
        groupProbability: 1,
        groupImageUrl: '',
      },
      {
        groupId: 5,
        groupName: 'KIT CAR',
        groupProbability: 1,
        groupImageUrl: '',
      },
      {
        groupId: 6,
        groupName: 'GROUP A',
        groupProbability: 1,
        groupImageUrl: '',
      },
      {
        groupId: 7,
        groupName: 'GROUP B RDW',
        groupProbability: 1,
        groupImageUrl: '',
      },
      {
        groupId: 8,
        groupName: 'GROUP B 4X4',
        groupProbability: 1,
        groupImageUrl: '',
      },
      {
        groupId: 9,
        groupName: 'R2',
        groupProbability: 1,
        groupImageUrl: '',
      },
      {
        groupId: 10,
        groupName: 'NR4',
        groupProbability: 1,
        groupImageUrl: '',
      },
      {
        groupId: 11,
        groupName: 'R5',
        groupProbability: 1,
        groupImageUrl: '',
      },
      {
        groupId: 12,
        groupName: '2000CC',
        groupProbability: 1,
        groupImageUrl: '',
      },
      {
        groupId: 13,
        groupName: 'RALLY GT',
        groupProbability: 1,
        groupImageUrl: '',
      },
    ];
    return groupList;
  }

  getSurfaceWear() {
    let surfaceWearList: SurfaceWear[] = [
      {
        surfaceWearId: 1,
        surfaceWearName: 'NONE',
        surfaceWearProbability: 1,
        surfaceClassImageUrl: '',
      },
      {
        surfaceWearId: 2,
        surfaceWearName: 'LOW',
        surfaceWearProbability: 1,
        surfaceClassImageUrl: '',
      },
      {
        surfaceWearId: 3,
        surfaceWearName: 'MEDIUM',
        surfaceWearProbability: 1,
        surfaceClassImageUrl: '',
      },
      {
        surfaceWearId: 4,
        surfaceWearName: 'HIGH',
        surfaceWearProbability: 1,
        surfaceClassImageUrl: '',
      },
      {
        surfaceWearId: 5,
        surfaceWearName: 'MAXIMUM',
        surfaceWearProbability: 1,
        surfaceClassImageUrl: '',
      },
    ];
    return surfaceWearList;
  }

  getVehicleByGroup(groupId: number): Vehicle[] {
    return this.vehiclesArray.filter((x) => x.vehicleClassId == groupId);
  }

  getServiceArea() {
    let serviceAreaList: ServiceArea[] = [
      {
        serviceAreaId: 1,
        serviceAreaName: 'NONE',
        serviceAreaProbability: 1,
        serviceAreaImageUrl: '',
      },
      {
        serviceAreaId: 2,
        serviceAreaName: 'SHORT',
        serviceAreaProbability: 1,
        serviceAreaImageUrl: '',
      },
      {
        serviceAreaId: 3,
        serviceAreaName: 'MEDIUM',
        serviceAreaProbability: 1,
        serviceAreaImageUrl: '',
      },
      {
        serviceAreaId: 4,
        serviceAreaName: 'LONG',
        serviceAreaProbability: 1,
        serviceAreaImageUrl: '',
      },
    ];
    return serviceAreaList;
  }
}
