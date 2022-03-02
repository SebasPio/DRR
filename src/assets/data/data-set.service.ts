import { Injectable } from '@angular/core';
import {
  Groups,
  ServiceArea,
  Stages,
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
    },
    {
      vehicleId: 2,
      vehicleName: 'DS  AUTOMOBILES DS 21',
      vehicleProbability: 1,
      vehicleClassId: 1,
    },
    {
      vehicleId: 3,
      vehicleName: 'LANCIA FULVIA HF',
      vehicleProbability: 1,
      vehicleClassId: 1,
    },
    {
      vehicleId: 4,
      vehicleName: 'VOLKSWAGEN GOLF GTI 16V',
      vehicleProbability: 1,
      vehicleClassId: 2,
    },
    {
      vehicleId: 5,
      vehicleName: 'PEUGEOT 205 GTI',
      vehicleProbability: 1,
      vehicleClassId: 2,
    },
    {
      vehicleId: 6,
      vehicleName: 'FORD  ESCORT MKII',
      vehicleProbability: 1,
      vehicleClassId: 3,
    },
    {
      vehicleId: 7,
      vehicleName: 'RENAULT ALPINE  A110 1600 S',
      vehicleProbability: 1,
      vehicleClassId: 3,
    },
    {
      vehicleId: 8,
      vehicleName: 'FIAT 131 ABARTH RALLY',
      vehicleProbability: 1,
      vehicleClassId: 3,
    },
    {
      vehicleId: 9,
      vehicleName: 'OPEL KADETT C GT / E',
      vehicleProbability: 1,
      vehicleClassId: 3,
    },
    {
      vehicleId: 10,
      vehicleName: 'BMW E30 M3 EVO RALLY',
      vehicleProbability: 1,
      vehicleClassId: 4,
    },
    {
      vehicleId: 11,
      vehicleName: 'OPEL ASCONA 400',
      vehicleProbability: 1,
      vehicleClassId: 4,
    },
    {
      vehicleId: 12,
      vehicleName: 'LANCIA STRATOS',
      vehicleProbability: 1,
      vehicleClassId: 4,
    },
    {
      vehicleId: 13,
      vehicleName: 'DATSUN 240Z',
      vehicleProbability: 1,
      vehicleClassId: 4,
    },
    {
      vehicleId: 14,
      vehicleName: 'RENAULT 5 TURBO',
      vehicleProbability: 1,
      vehicleClassId: 4,
    },
    {
      vehicleId: 15,
      vehicleName: 'FORD SIERRA COSWORTH RS500',
      vehicleProbability: 1,
      vehicleClassId: 4,
    },
    {
      vehicleId: 16,
      vehicleName: 'PEUGEOT 306 MAXI',
      vehicleProbability: 1,
      vehicleClassId: 5,
    },
    {
      vehicleId: 17,
      vehicleName: 'SEAT IBIZA KIT CAR',
      vehicleProbability: 1,
      vehicleClassId: 5,
    },
    {
      vehicleId: 18,
      vehicleName: 'VOLKSWAGEN GOLF KIT CAR',
      vehicleProbability: 1,
      vehicleClassId: 5,
    },
    {
      vehicleId: 19,
      vehicleName: 'MITSUBISHI LANCER EVOLUTION VI',
      vehicleProbability: 1,
      vehicleClassId: 6,
    },
    {
      vehicleId: 20,
      vehicleName: 'SUBARU IMPREZA 1995',
      vehicleProbability: 1,
      vehicleClassId: 6,
    },
    {
      vehicleId: 21,
      vehicleName: 'SUBARU LEGACY RS',
      vehicleProbability: 1,
      vehicleClassId: 6,
    },
    {
      vehicleId: 22,
      vehicleName: 'LANCIA DELTA HF INTEGRALE',
      vehicleProbability: 1,
      vehicleClassId: 6,
    },
    {
      vehicleId: 23,
      vehicleName: 'FORD ESCORT RS COSWORTH',
      vehicleProbability: 1,
      vehicleClassId: 6,
    },
    {
      vehicleId: 24,
      vehicleName: 'LANCIA 037 EVO 2',
      vehicleProbability: 1,
      vehicleClassId: 7,
    },
    {
      vehicleId: 25,
      vehicleName: 'OPEL MANTA 400',
      vehicleProbability: 1,
      vehicleClassId: 7,
    },
    {
      vehicleId: 26,
      vehicleName: 'BMW M1 PROCAR RALLY',
      vehicleProbability: 1,
      vehicleClassId: 7,
    },
    {
      vehicleId: 27,
      vehicleName: 'PORSCHE 911 SC RS',
      vehicleProbability: 1,
      vehicleClassId: 7,
    },
    {
      vehicleId: 28,
      vehicleName: 'AUDI SPORT QUATTRO S1 E2',
      vehicleProbability: 1,
      vehicleClassId: 8,
    },
    {
      vehicleId: 29,
      vehicleName: 'PEUGEOT 205 T16 EVO 2',
      vehicleProbability: 1,
      vehicleClassId: 8,
    },
    {
      vehicleId: 30,
      vehicleName: 'LANCIA DELTA S4',
      vehicleProbability: 1,
      vehicleClassId: 8,
    },
    {
      vehicleId: 31,
      vehicleName: 'FORD RS200',
      vehicleProbability: 1,
      vehicleClassId: 8,
    },
    {
      vehicleId: 32,
      vehicleName: 'MG METRO 6R4',
      vehicleProbability: 1,
      vehicleClassId: 8,
    },
    {
      vehicleId: 33,
      vehicleName: 'FORD FIESTA R2',
      vehicleProbability: 1,
      vehicleClassId: 9,
    },
    {
      vehicleId: 34,
      vehicleName: 'OPEL ADAM R2',
      vehicleProbability: 1,
      vehicleClassId: 9,
    },
    {
      vehicleId: 35,
      vehicleName: 'PEUGEOT 208 R2',
      vehicleProbability: 1,
      vehicleClassId: 9,
    },
    {
      vehicleId: 36,
      vehicleName: 'SUBARU WRX STI NR4',
      vehicleProbability: 1,
      vehicleClassId: 10,
    },
    {
      vehicleId: 37,
      vehicleName: 'MITSUBISHI LANCER EVOLUTION X',
      vehicleProbability: 1,
      vehicleClassId: 10,
    },
    {
      vehicleId: 38,
      vehicleName: 'FORD FIESTA R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
    },
    {
      vehicleId: 39,
      vehicleName: 'PEUGEOT 208 R5 T16',
      vehicleProbability: 1,
      vehicleClassId: 11,
    },
    {
      vehicleId: 40,
      vehicleName: 'VOLKSWAGEN POLO GTI R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
    },
    {
      vehicleId: 41,
      vehicleName: 'MITSUBISHI SPACESTAR R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
    },
    {
      vehicleId: 42,
      vehicleName: 'SKODA FABIA R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
    },
    {
      vehicleId: 43,
      vehicleName: 'CITROEN C3 R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
    },
    {
      vehicleId: 44,
      vehicleName: 'FORD FIESTA R5 MKII',
      vehicleProbability: 1,
      vehicleClassId: 11,
    },
    {
      vehicleId: 45,
      vehicleName: 'SKODA FABIA RALLY',
      vehicleProbability: 1,
      vehicleClassId: 12,
    },
    {
      vehicleId: 46,
      vehicleName: 'CITROEN C4 RALLY',
      vehicleProbability: 1,
      vehicleClassId: 12,
    },
    {
      vehicleId: 47,
      vehicleName: 'FORD FOCUS RS RALLY 2001',
      vehicleProbability: 1,
      vehicleClassId: 12,
    },
    {
      vehicleId: 48,
      vehicleName: 'SUBARU IMPREZA S4 RALLY',
      vehicleProbability: 1,
      vehicleClassId: 12,
    },
    {
      vehicleId: 49,
      vehicleName: 'SUBARU IMPREZA 2001',
      vehicleProbability: 1,
      vehicleClassId: 12,
    },
    {
      vehicleId: 50,
      vehicleName: 'FORD FOCUS RS RALLY 2007',
      vehicleProbability: 1,
      vehicleClassId: 12,
    },
    {
      vehicleId: 51,
      vehicleName: 'SUBARU IMPREZA',
      vehicleProbability: 1,
      vehicleClassId: 12,
    },
    {
      vehicleId: 52,
      vehicleName: 'PEUGEOT 206 RALLY',
      vehicleProbability: 1,
      vehicleClassId: 12,
    },
    {
      vehicleId: 53,
      vehicleName: 'BMW M2 COMPETITION',
      vehicleProbability: 1,
      vehicleClassId: 13,
    },
    {
      vehicleId: 54,
      vehicleName: 'CHEVROLET CAMARO GT4.R',
      vehicleProbability: 1,
      vehicleClassId: 13,
    },
    {
      vehicleId: 55,
      vehicleName: 'PORSCHE RGT RALLY SPEC',
      vehicleProbability: 1,
      vehicleClassId: 13,
    },
    {
      vehicleId: 56,
      vehicleName: 'ASTON MARTIN V8 VANTAGE GT4',
      vehicleProbability: 1,
      vehicleClassId: 13,
    },
    {
      vehicleId: 57,
      vehicleName: 'FORD MUSTANG GT4',
      vehicleProbability: 1,
      vehicleClassId: 13,
    },
  ];

  getQuestion() {
    return this.question;
  }

  getStages() {
    let stagesList: Stages[] = [
      {
        stageId: 1,
        stageName: 'MONTE CARLO - MONACO',
        stageProbability: 1,
      },
      {
        stageId: 2,
        stageName: 'POWYS - WALES',
        stageProbability: 1,
      },
      {
        stageId: 3,
        stageName: 'ARGOLIS - GREECE',
        stageProbability: 1,
      },
      {
        stageId: 4,
        stageName: 'BAUMHOLDER - GERMANY',
        stageProbability: 1,
      },
      {
        stageId: 5,
        stageName: 'JAMSA - FINLAND',
        stageProbability: 1,
      },
      {
        stageId: 6,
        stageName: 'VARMLAND - SWEDEN',
        stageProbability: 1,
      },
      {
        stageId: 7,
        stageName: 'RIBADELLES - SPAIN',
        stageProbability: 1,
      },
      {
        stageId: 8,
        stageName: 'MONARO - AUSTRALIA',
        stageProbability: 1,
      },
      {
        stageId: 9,
        stageName: 'HAWKES BAY - NEW ZELAND',
        stageProbability: 1,
      },
      {
        stageId: 10,
        stageName: 'CATAMARCA PROV. - ARGENTINA',
        stageProbability: 1,
      },
      {
        stageId: 11,
        stageName: 'LECZNA COUNTY - POLAND',
        stageProbability: 1,
      },
      {
        stageId: 12,
        stageName: 'NEW ENGLAND - USA',
        stageProbability: 1,
      },
      {
        stageId: 13,
        stageName: 'PERTH AND KINROSS - SCOTLAND',
        stageProbability: 1,
      },
    ];
    return stagesList;
  }

  getGroups() {
    let groupList: Groups[] = [
      {
        groupId: 1,
        groupName: 'H1',
        groupProbability: 1,
      },
      {
        groupId: 2,
        groupName: 'H2 FWD',
        groupProbability: 1,
      },
      {
        groupId: 3,
        groupName: 'H2 RWD',
        groupProbability: 1,
      },
      {
        groupId: 4,
        groupName: 'H3',
        groupProbability: 1,
      },
      {
        groupId: 5,
        groupName: 'KIT CAR',
        groupProbability: 1,
      },
      {
        groupId: 6,
        groupName: 'GROUP A',
        groupProbability: 1,
      },
      {
        groupId: 7,
        groupName: 'GROUP B RDW',
        groupProbability: 1,
      },
      {
        groupId: 8,
        groupName: 'GROUP B 4X4',
        groupProbability: 1,
      },
      {
        groupId: 9,
        groupName: 'R2',
        groupProbability: 1,
      },
      {
        groupId: 10,
        groupName: 'NR4',
        groupProbability: 1,
      },
      {
        groupId: 11,
        groupName: 'R5',
        groupProbability: 1,
      },
      {
        groupId: 12,
        groupName: '2000CC',
        groupProbability: 1,
      },
      {
        groupId: 13,
        groupName: 'RALLY GT',
        groupProbability: 1,
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
      },
      {
        surfaceWearId: 2,
        surfaceWearName: 'LOW',
        surfaceWearProbability: 1,
      },
      {
        surfaceWearId: 3,
        surfaceWearName: 'MEDIUM',
        surfaceWearProbability: 1,
      },
      {
        surfaceWearId: 4,
        surfaceWearName: 'HIGH',
        surfaceWearProbability: 1,
      },
      {
        surfaceWearId: 5,
        surfaceWearName: 'MAXIMUM',
        surfaceWearProbability: 1,
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
      },
      {
        serviceAreaId: 2,
        serviceAreaName: 'SHORT',
        serviceAreaProbability: 1,
      },
      {
        serviceAreaId: 3,
        serviceAreaName: 'MEDIUM',
        serviceAreaProbability: 1,
      },
      {
        serviceAreaId: 4,
        serviceAreaName: 'LONG',
        serviceAreaProbability: 1,
      },
    ];
    return serviceAreaList;
  }
}
