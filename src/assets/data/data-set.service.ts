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
    'https://drive.google.com/uc?export=view&id=1Zi3wFSAOsUbB4p3iHISjPSgF7yVcxwGz';

  vehiclesArray: Vehicle[] = [
    {
      vehicleId: 1,
      vehicleName: 'MINI COOPER S',
      vehicleProbability: 1,
      vehicleClassId: 1,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 2,
      vehicleName: 'DS  AUTOMOBILES DS 21',
      vehicleProbability: 1,
      vehicleClassId: 1,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 3,
      vehicleName: 'LANCIA FULVIA HF',
      vehicleProbability: 1,
      vehicleClassId: 1,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 4,
      vehicleName: 'VOLKSWAGEN GOLF GTI 16V',
      vehicleProbability: 1,
      vehicleClassId: 2,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 5,
      vehicleName: 'PEUGEOT 205 GTI',
      vehicleProbability: 1,
      vehicleClassId: 2,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 6,
      vehicleName: 'FORD  ESCORT MKII',
      vehicleProbability: 1,
      vehicleClassId: 3,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 7,
      vehicleName: 'RENAULT ALPINE  A110 1600 S',
      vehicleProbability: 1,
      vehicleClassId: 3,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 8,
      vehicleName: 'FIAT 131 ABARTH RALLY',
      vehicleProbability: 1,
      vehicleClassId: 3,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 9,
      vehicleName: 'OPEL KADETT C GT / E',
      vehicleProbability: 1,
      vehicleClassId: 3,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 10,
      vehicleName: 'BMW E30 M3 EVO RALLY',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 11,
      vehicleName: 'OPEL ASCONA 400',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 12,
      vehicleName: 'LANCIA STRATOS',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 13,
      vehicleName: 'DATSUN 240Z',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 14,
      vehicleName: 'RENAULT 5 TURBO',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 15,
      vehicleName: 'FORD SIERRA COSWORTH RS500',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 16,
      vehicleName: 'PEUGEOT 306 MAXI',
      vehicleProbability: 1,
      vehicleClassId: 5,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 17,
      vehicleName: 'SEAT IBIZA KIT CAR',
      vehicleProbability: 1,
      vehicleClassId: 5,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 18,
      vehicleName: 'VOLKSWAGEN GOLF KIT CAR',
      vehicleProbability: 1,
      vehicleClassId: 5,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 19,
      vehicleName: 'MITSUBISHI LANCER EVOLUTION VI',
      vehicleProbability: 1,
      vehicleClassId: 6,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 20,
      vehicleName: 'SUBARU IMPREZA 1995',
      vehicleProbability: 1,
      vehicleClassId: 6,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 21,
      vehicleName: 'SUBARU LEGACY RS',
      vehicleProbability: 1,
      vehicleClassId: 6,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 22,
      vehicleName: 'LANCIA DELTA HF INTEGRALE',
      vehicleProbability: 1,
      vehicleClassId: 6,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 23,
      vehicleName: 'FORD ESCORT RS COSWORTH',
      vehicleProbability: 1,
      vehicleClassId: 6,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 24,
      vehicleName: 'LANCIA 037 EVO 2',
      vehicleProbability: 1,
      vehicleClassId: 7,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 25,
      vehicleName: 'OPEL MANTA 400',
      vehicleProbability: 1,
      vehicleClassId: 7,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 26,
      vehicleName: 'BMW M1 PROCAR RALLY',
      vehicleProbability: 1,
      vehicleClassId: 7,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 27,
      vehicleName: 'PORSCHE 911 SC RS',
      vehicleProbability: 1,
      vehicleClassId: 7,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 28,
      vehicleName: 'AUDI SPORT QUATTRO S1 E2',
      vehicleProbability: 1,
      vehicleClassId: 8,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 29,
      vehicleName: 'PEUGEOT 205 T16 EVO 2',
      vehicleProbability: 1,
      vehicleClassId: 8,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 30,
      vehicleName: 'LANCIA DELTA S4',
      vehicleProbability: 1,
      vehicleClassId: 8,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 31,
      vehicleName: 'FORD RS200',
      vehicleProbability: 1,
      vehicleClassId: 8,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 32,
      vehicleName: 'MG METRO 6R4',
      vehicleProbability: 1,
      vehicleClassId: 8,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 33,
      vehicleName: 'FORD FIESTA R2',
      vehicleProbability: 1,
      vehicleClassId: 9,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 34,
      vehicleName: 'OPEL ADAM R2',
      vehicleProbability: 1,
      vehicleClassId: 9,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 35,
      vehicleName: 'PEUGEOT 208 R2',
      vehicleProbability: 1,
      vehicleClassId: 9,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 36,
      vehicleName: 'SUBARU WRX STI NR4',
      vehicleProbability: 1,
      vehicleClassId: 10,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 37,
      vehicleName: 'MITSUBISHI LANCER EVOLUTION X',
      vehicleProbability: 1,
      vehicleClassId: 10,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 38,
      vehicleName: 'FORD FIESTA R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 39,
      vehicleName: 'PEUGEOT 208 R5 T16',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 40,
      vehicleName: 'VOLKSWAGEN POLO GTI R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 41,
      vehicleName: 'MITSUBISHI SPACESTAR R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 42,
      vehicleName: 'SKODA FABIA R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 43,
      vehicleName: 'CITROEN C3 R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 44,
      vehicleName: 'FORD FIESTA R5 MKII',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 45,
      vehicleName: 'SKODA FABIA RALLY',
      vehicleProbability: 1,
      vehicleClassId: 12,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 46,
      vehicleName: 'CITROEN C4 RALLY',
      vehicleProbability: 1,
      vehicleClassId: 12,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 47,
      vehicleName: 'FORD FOCUS RS RALLY 2001',
      vehicleProbability: 1,
      vehicleClassId: 12,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 48,
      vehicleName: 'SUBARU IMPREZA S4 RALLY',
      vehicleProbability: 1,
      vehicleClassId: 12,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 49,
      vehicleName: 'SUBARU IMPREZA 2001',
      vehicleProbability: 1,
      vehicleClassId: 12,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 50,
      vehicleName: 'FORD FOCUS RS RALLY 2007',
      vehicleProbability: 1,
      vehicleClassId: 12,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 51,
      vehicleName: 'SUBARU IMPREZA',
      vehicleProbability: 1,
      vehicleClassId: 12,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 52,
      vehicleName: 'PEUGEOT 206 RALLY',
      vehicleProbability: 1,
      vehicleClassId: 12,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 53,
      vehicleName: 'BMW M2 COMPETITION',
      vehicleProbability: 1,
      vehicleClassId: 13,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 54,
      vehicleName: 'CHEVROLET CAMARO GT4.R',
      vehicleProbability: 1,
      vehicleClassId: 13,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 55,
      vehicleName: 'PORSCHE RGT RALLY SPEC',
      vehicleProbability: 1,
      vehicleClassId: 13,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 56,
      vehicleName: 'ASTON MARTIN V8 VANTAGE GT4',
      vehicleProbability: 1,
      vehicleClassId: 13,
      vehicleClassImageUrl: ''
    },
    {
      vehicleId: 57,
      vehicleName: 'FORD MUSTANG GT4',
      vehicleProbability: 1,
      vehicleClassId: 13,
      vehicleClassImageUrl: ''
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
        locationImageUrl: '',
      },
      {
        locationId: 2,
        locationName: 'POWYS - WALES',
        locationProbability: 1,
        locationImageUrl: '',
      },
      {
        locationId: 3,
        locationName: 'ARGOLIS - GREECE',
        locationProbability: 1,
        locationImageUrl: '',
      },
      {
        locationId: 4,
        locationName: 'BAUMHOLDER - GERMANY',
        locationProbability: 1,
        locationImageUrl: '',
      },
      {
        locationId: 5,
        locationName: 'JAMSA - FINLAND',
        locationProbability: 1,
        locationImageUrl: '',
      },
      {
        locationId: 6,
        locationName: 'VARMLAND - SWEDEN',
        locationProbability: 1,
        locationImageUrl: '',
      },
      {
        locationId: 7,
        locationName: 'RIBADELLES - SPAIN',
        locationProbability: 1,
        locationImageUrl: '',
      },
      {
        locationId: 8,
        locationName: 'MONARO - AUSTRALIA',
        locationProbability: 1,
        locationImageUrl: '',
      },
      {
        locationId: 9,
        locationName: 'HAWKES BAY - NEW ZELAND',
        locationProbability: 1,
        locationImageUrl: '',
      },
      {
        locationId: 10,
        locationName: 'CATAMARCA PROV. - ARGENTINA',
        locationProbability: 1,
        locationImageUrl: '',
      },
      {
        locationId: 11,
        locationName: 'LECZNA COUNTY - POLAND',
        locationProbability: 1,
        locationImageUrl: '',
      },
      {
        locationId: 12,
        locationName: 'NEW ENGLAND - USA',
        locationProbability: 1,
        locationImageUrl: '',
      },
      {
        locationId: 13,
        locationName: 'PERTH AND KINROSS - SCOTLAND',
        locationProbability: 1,
        locationImageUrl: '',
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
