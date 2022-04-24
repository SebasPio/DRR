import { Injectable } from '@angular/core';
import {
  Groups,
  ServiceArea,
  Location,
  SurfaceWear,
  Vehicle,
  Weather,
} from 'src/app/models/general.model';

@Injectable({
  providedIn: 'root',
})
export class DataSetService {
  constructor() {}
  question =
    '../assets/images/others/question.webp';

  
  //H1 - 1
  //H2 FWD - 2
  //H2 RWD - 3
  //H3 - 4
  //KIT CAR - 5
  //GROUP A - 6
  //GROUP B RDW - 7
  //GROUP B 4x4 - 8
  //R2 - 9
  //NR4 - 10
  //R5 - 11
  //200CC - 12
  //RALLY GT - 13

  locationsArray: Location[] = [
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

  weatherArray: Weather[] = [
    //MONACO
    {
      weatherId: 1,
      weatherName: 'Daytime/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 1,
    },
    {
      weatherId: 2,
      weatherName: 'Sunset/Cloudy/Dry Surface',
      weatherProbability: 1,
      locationId: 1,
    },
    {
      weatherId: 3,
      weatherName: 'Sunset/Light Snow/Dry Surfacee',
      weatherProbability: 1,
      locationId: 1,
    },
    {
      weatherId: 4,
      weatherName: 'Dusk/Cloudy/Dry Surface',
      weatherProbability: 1,
      locationId: 1,
    },
    {
      weatherId: 5,
      weatherName: 'Night/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 1,
    },
    {
      weatherId: 6,
      weatherName: 'Night/Light Snow/Dry Surface',
      weatherProbability: 1,
      locationId: 1,
    },
    //WALES
    {
      weatherId: 7,
      weatherName: 'Daytime/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 2,
    },
    {
      weatherId: 8,
      weatherName: 'Daytime/Heavy Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 2,
    },
    {
      weatherId: 9,
      weatherName: 'Sunset/Cloudy/Dry Surface',
      weatherProbability: 1,
      locationId: 2,
    },
    {
      weatherId: 10,
      weatherName: 'Sunset/Cloudy/Wet Surface',
      weatherProbability: 1,
      locationId: 2,
    },
    {
      weatherId: 11,
      weatherName: 'Night/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 2,
    },
    {
      weatherId: 12,
      weatherName: 'Night/Heavy Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 2,
    },
    //GREECE
    {
      weatherId: 13,
      weatherName: 'Daytime/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 3,
    },
    {
      weatherId: 14,
      weatherName: 'Daytime/Overcast/Dry Surface',
      weatherProbability: 1,
      locationId: 3,
    },
    {
      weatherId: 15,
      weatherName: 'Night/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 3,
    },
    {
      weatherId: 16,
      weatherName: 'Sunset/Cloudy/Dry Surface',
      weatherProbability: 1,
      locationId: 3,
    },
    {
      weatherId: 17,
      weatherName: 'Sunset/Heavy Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 3,
    },
    {
      weatherId: 18,
      weatherName: 'Dusk/Cloudy/Dry Surface',
      weatherProbability: 1,
      locationId: 3,
    },
    //GERMANY
    {
      weatherId: 19,
      weatherName: 'Daytime	Clear	Dry Surface',
      weatherProbability: 1,
      locationId: 4,
    },
    {
      weatherId: 20,
      weatherName: 'Daytime	Heavy Rain	Wet Surface',
      weatherProbability: 1,
      locationId: 4,
    },
    {
      weatherId: 21,
      weatherName: 'Sunset	Cloudy	Dry Surface',
      weatherProbability: 1,
      locationId: 4,
    },
    {
      weatherId: 22,
      weatherName: 'Sunset	Heavy Rain	Wet Surface',
      weatherProbability: 1,
      locationId: 4,
    },
    {
      weatherId: 23,
      weatherName: 'Dusk	Cloudy	Dry Surface',
      weatherProbability: 1,
      locationId: 4,
    },
    {
      weatherId: 24,
      weatherName: 'Night	Clear	Dry Surface',
      weatherProbability: 1,
      locationId: 4,
    },
    //FINLAND
    {
      weatherId: 25,
      weatherName: 'Daytime	Clear	Dry Surface',
      weatherProbability: 1,
      locationId: 5,
    },
    {
      weatherId: 26,
      weatherName: 'Daytime/Overcast/Dry Surface',
      weatherProbability: 1,
      locationId: 5,
    },
    {
      weatherId: 27,
      weatherName: 'Sunset/Cloudy/Dry Surface',
      weatherProbability: 1,
      locationId: 5,
    },
    {
      weatherId: 28,
      weatherName: 'Dusk/Cloudy/Wet Surface',
      weatherProbability: 1,
      locationId: 5,
    },
    {
      weatherId: 29,
      weatherName: 'Dusk/Overcast/Dry Surface',
      weatherProbability: 1,
      locationId: 5,
    },
    {
      weatherId: 30,
      weatherName: 'Night/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 5,
    },
    {
      weatherId: 31,
      weatherName: 'Daytime/Heavy Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 5,
    },
    {
      weatherId: 32,
      weatherName: 'Dusk/Heavy Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 5,
    },
    //SWEDEN
    {
      weatherId: 33,
      weatherName: 'Daytime/Cloudy/Snow',
      weatherProbability: 1,
      locationId: 6,
    },
    {
      weatherId: 34,
      weatherName: 'Daytime/Heavy Snow/Snow',
      weatherProbability: 1,
      locationId: 6,
    },
    {
      weatherId: 35,
      weatherName: 'Sunset/Partly Cloudy/Snow',
      weatherProbability: 1,
      locationId: 6,
    },
    {
      weatherId: 36,
      weatherName: 'Sunset/Heavy Snow/Snow',
      weatherProbability: 1,
      locationId: 6,
    },
    {
      weatherId: 37,
      weatherName: 'Dusk/Cloudy/Snow',
      weatherProbability: 1,
      locationId: 6,
    },
    {
      weatherId: 38,
      weatherName: 'Night/Cloudy/Snow',
      weatherProbability: 1,
      locationId: 6,
    },
    {
      weatherId: 39,
      weatherName: 'Night/Heavy Snow/Snow',
      weatherProbability: 1,
      locationId: 6,
    },
    //SPAIN
    {
      weatherId: 40,
      weatherName: 'Daytime/Cloudy/Snow',
      weatherProbability: 1,
      locationId: 7,
    },
    {
      weatherId: 41,
      weatherName: 'Daytime/Heavy Snow/Snow',
      weatherProbability: 1,
      locationId: 7,
    },
    {
      weatherId: 42,
      weatherName: 'Sunset/Partly Cloudy/Snow',
      weatherProbability: 1,
      locationId: 7,
    },
    {
      weatherId: 43,
      weatherName: 'Sunset/Heavy Snow/Snow',
      weatherProbability: 1,
      locationId: 7,
    },
    {
      weatherId: 44,
      weatherName: 'Dusk/Cloudy/Snow',
      weatherProbability: 1,
      locationId: 7,
    },
    {
      weatherId: 45,
      weatherName: 'Night/Cloudy/Snow',
      weatherProbability: 1,
      locationId: 7,
    },
    {
      weatherId: 46,
      weatherName: 'Night/Heavy Snow/Snow',
      weatherProbability: 1,
      locationId: 7,
    },
    {
      weatherId: 47,
      weatherName: 'Dusk/Cloudy/Snow',
      weatherProbability: 1,
      locationId: 7,
    },
    {
      weatherId: 48,
      weatherName: 'Night/Cloudy/Snow',
      weatherProbability: 1,
      locationId: 7,
    },
    {
      weatherId: 49,
      weatherName: 'Night/Heavy Snow/Snow',
      weatherProbability: 1,
      locationId: 7,
    },
    //AUSTRALIA
    {
      weatherId: 50,
      weatherName: 'Daytime/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 8,
    },
    {
      weatherId: 51,
      weatherName: 'Daytime/Cloudy/Wet Surface',
      weatherProbability: 1,
      locationId: 8,
    },
    {
      weatherId: 52,
      weatherName: 'Sunset/Cloudy/Dry Surface',
      weatherProbability: 1,
      locationId: 8,
    },
    {
      weatherId: 53,
      weatherName: 'Sunset/Overcast/Dry Surface',
      weatherProbability: 1,
      locationId: 8,
    },
    {
      weatherId: 54,
      weatherName: 'Dusk/cloudy/Dry Surface',
      weatherProbability: 1,
      locationId: 8,
    },
    {
      weatherId: 55,
      weatherName: 'Night/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 8,
    },
    {
      weatherId: 56,
      weatherName: 'Daytime/Showers/Wet Surface',
      weatherProbability: 1,
      locationId: 8,
    },
    {
      weatherId: 57,
      weatherName: 'Daytime/Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 8,
    },
    {
      weatherId: 58,
      weatherName: 'Sunset/Cloudy/Wet Surface',
      weatherProbability: 1,
      locationId: 8,
    },
    //NEW ZELANDA
    {
      weatherId: 59,
      weatherName: 'Daytime/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 9,
    },
    {
      weatherId: 60,
      weatherName: 'Daytime/Cloudy/Wet Surface',
      weatherProbability: 1,
      locationId: 9,
    },
    {
      weatherId: 61,
      weatherName: 'Sunset/Cloudy/Dry Surfacee',
      weatherProbability: 1,
      locationId: 9,
    },
    {
      weatherId: 62,
      weatherName: 'Dusk/Heavy Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 9,
    },
    {
      weatherId: 63,
      weatherName: 'Night/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 9,
    },
    {
      weatherId: 64,
      weatherName: 'Night/Cloudy/Wet Surface',
      weatherProbability: 1,
      locationId: 9,
    },
    {
      weatherId: 65,
      weatherName: 'Dusk/Light Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 9,
    },
    {
      weatherId: 66,
      weatherName: 'Daytime/Showers/Wet Surface',
      weatherProbability: 1,
      locationId: 9,
    },
    {
      weatherId: 67,
      weatherName: 'Night/Light Showers/Wet Surface',
      weatherProbability: 1,
      locationId: 9,
    },
    //ARGENTINA
    {
      weatherId: 68,
      weatherName: 'Daytime/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 10,
    },
    {
      weatherId: 69,
      weatherName: 'Daytime/Overcast/Dry Surface',
      weatherProbability: 1,
      locationId: 10,
    },
    {
      weatherId: 70,
      weatherName: 'Sunset/Cloudy/Dry Surface',
      weatherProbability: 1,
      locationId: 10,
    },
    {
      weatherId: 71,
      weatherName: 'Dusk/Cloudy/Dry Surface',
      weatherProbability: 1,
      locationId: 10,
    },
    {
      weatherId: 72,
      weatherName: 'Dusk/Heavy Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 1010,
    },
    {
      weatherId: 73,
      weatherName: 'Night/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 10,
    },
    {
      weatherId: 74,
      weatherName: 'Daytime/Light Showers/Wet Surface',
      weatherProbability: 1,
      locationId: 10,
    },
    {
      weatherId: 75,
      weatherName: 'Daytime/Light Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 10,
    },
    //POLAND
    {
      weatherId: 76,
      weatherName: 'Daytime/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 11,
    },
    {
      weatherId: 77,
      weatherName: 'Daytime/Heavy Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 11,
    },
    {
      weatherId: 78,
      weatherName: 'Sunset/Cloudy/Wet Surface',
      weatherProbability: 1,
      locationId: 11,
    },
    {
      weatherId: 79,
      weatherName: 'Dusk/Cloudy/Dry Surface',
      weatherProbability: 1,
      locationId: 11,
    },
    {
      weatherId: 80,
      weatherName: 'Night/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 11,
    },
    {
      weatherId: 81,
      weatherName: 'Night/Heavy Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 11,
    },
    {
      weatherId: 82,
      weatherName: 'Sunset/Light Showers/Wet Surface',
      weatherProbability: 1,
      locationId: 11,
    },
    {
      weatherId: 83,
      weatherName: 'Daytime/Overcast/Dry Surface',
      weatherProbability: 1,
      locationId: 11,
    },
    {
      weatherId: 84,
      weatherName: 'Night/Cloudy/Dry Surface',
      weatherProbability: 1,
      locationId: 11,
    },
    {
      weatherId: 85,
      weatherName: 'Sunset/Cloudy/Dry Surface',
      weatherProbability: 1,
      locationId: 11,
    },
    //USA
    {
      weatherId: 86,
      weatherName: 'Daytime/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 12,
    },
    {
      weatherId: 87,
      weatherName: 'Daytime/Heavy Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 12,
    },
    {
      weatherId: 88,
      weatherName: 'Sunset/Cloudy/Wet Surface',
      weatherProbability: 1,
      locationId: 12,
    },
    {
      weatherId: 89,
      weatherName: 'Dusk/Cloudy/Dry Surface',
      weatherProbability: 1,
      locationId: 12,
    },
    {
      weatherId: 90,
      weatherName: 'Night/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 12,
    },
    {
      weatherId: 91,
      weatherName: 'Night/Heavy Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 12,
    },
    {
      weatherId: 92,
      weatherName: 'Sunset/Light Showers/Wet Surface',
      weatherProbability: 1,
      locationId: 12,
    },
    {
      weatherId: 93,
      weatherName: 'Daytime/Overcast/Dry Surface',
      weatherProbability: 1,
      locationId: 12,
    },
    {
      weatherId: 94,
      weatherName: 'Night/Cloudy/Dry Surface',
      weatherProbability: 1,
      locationId: 12,
    },
    {
      weatherId: 95,
      weatherName: 'Sunset/Cloudy/Dry Surface',
      weatherProbability: 1,
      locationId: 12,
    },
    //SCOTLAND
    {
      weatherId: 86,
      weatherName: 'Daytime/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 13,
    },
    {
      weatherId: 87,
      weatherName: 'Daytime/Heavy Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 13,
    },
    {
      weatherId: 88,
      weatherName: 'Sunset/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 13,
    },
    {
      weatherId: 89,
      weatherName: 'Dusk/Heavy Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 13,
    },
    {
      weatherId: 90,
      weatherName: 'Night/Clear/Dry Surface',
      weatherProbability: 1,
      locationId: 13,
    },
    {
      weatherId: 91,
      weatherName: 'Night/Heavy Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 13,
    },
    {
      weatherId: 92,
      weatherName: 'Daytime/Cloudy/Wet Surface',
      weatherProbability: 1,
      locationId: 13,
    },
    {
      weatherId: 93,
      weatherName: 'Sunset/Heavy Rain/Wet Surface',
      weatherProbability: 1,
      locationId: 13,
    },
  ]

  groupsArray: Groups[] = [
    {
      groupId: 1,
      groupName: 'H1',
      groupProbability: 1,
      groupImageUrlWebp: '../assets/images/groups/H1FWD.webp',
    },
    {
      groupId: 2,
      groupName: 'H2 FWD',
      groupProbability: 1,
      groupImageUrlWebp: '../assets/images/groups/H2FWD.webp',
    },
    {
      groupId: 3,
      groupName: 'H2 RWD',
      groupProbability: 1,
      groupImageUrlWebp: '../assets/images/groups/H2.webp',
    },
    {
      groupId: 4,
      groupName: 'H3',
      groupProbability: 1,
      groupImageUrlWebp: '../assets/images/groups/H3.webp',
    },
    {
      groupId: 5,
      groupName: 'KIT CAR',
      groupProbability: 1,
      groupImageUrlWebp: '../assets/images/groups/KITCAR.webp',
    },
    {
      groupId: 6,
      groupName: 'GROUP A',
      groupProbability: 1,
      groupImageUrlWebp: '../assets/images/groups/GROUPA.webp',
    },
    {
      groupId: 7,
      groupName: 'GROUP B RDW',
      groupProbability: 1,
      groupImageUrlWebp: '../assets/images/groups/GROUPBRWD.webp',
    },
    {
      groupId: 8,
      groupName: 'GROUP B 4X4',
      groupProbability: 1,
      groupImageUrlWebp: '../assets/images/groups/GROUPB4WD.webp',
    },
    {
      groupId: 9,
      groupName: 'R2',
      groupProbability: 1,
      groupImageUrlWebp: '../assets/images/groups/R2.webp',
    },
    {
      groupId: 10,
      groupName: 'NR4',
      groupProbability: 1,
      groupImageUrlWebp: '../assets/images/groups/NR4.webp',
    },
    {
      groupId: 11,
      groupName: 'R5',
      groupProbability: 1,
      groupImageUrlWebp: '../assets/images/groups/R5.webp',
    },
    {
      groupId: 12,
      groupName: '2000CC',
      groupProbability: 1,
      groupImageUrlWebp: '../assets/images/groups/2000CC.webp',
    },
    {
      groupId: 13,
      groupName: 'RALLY GT',
      groupProbability: 1,
      groupImageUrlWebp: '../assets/images/groups/RALLYGT.webp',
    },
  ];

  vehiclesArray: Vehicle[] = [
    {
      vehicleId: 1,
      vehicleName: 'MINI COOPER S',
      vehicleProbability: 1,
      vehicleClassId: 1,
      vehicleImageUrlWebp: '../assets/images/vehicles/H1/MINI.webp'
    },
    {
      vehicleId: 2,
      vehicleName: 'DS AUTOMOBILES DS 21',
      vehicleProbability: 1,
      vehicleClassId: 1,
      vehicleImageUrlWebp: '../assets/images/vehicles/H1/DS21.webp'
    },
    {
      vehicleId: 3,
      vehicleName: 'LANCIA FULVIA HF',
      vehicleProbability: 1,
      vehicleClassId: 1,
      vehicleImageUrlWebp: '../assets/images/vehicles/H1/FULVIA.webp'
    },
    {
      vehicleId: 4,
      vehicleName: 'VOLKSWAGEN GOLF GTI 16V',
      vehicleProbability: 1,
      vehicleClassId: 2,
      vehicleImageUrlWebp: '../assets/images/vehicles/H2FWD/GTI16V.webp'
    },
    {
      vehicleId: 5,
      vehicleName: 'PEUGEOT 205 GTI',
      vehicleProbability: 1,
      vehicleClassId: 2,
      vehicleImageUrlWebp: '../assets/images/vehicles/H2FWD/205GTI.webp'
    },
    {
      vehicleId: 6,
      vehicleName: 'FORD  ESCORT MKII',
      vehicleProbability: 1,
      vehicleClassId: 3,
      vehicleImageUrlWebp: '../assets/images/vehicles/H2RWD/ESCORTMKII.webp'
    },
    {
      vehicleId: 7,
      vehicleName: 'RENAULT ALPINE  A110 1600 S',
      vehicleProbability: 1,
      vehicleClassId: 3,
      vehicleImageUrlWebp: '../assets/images/vehicles/H2RWD/A110.webp'
    },
    {
      vehicleId: 8,
      vehicleName: 'FIAT 131 ABARTH RALLY',
      vehicleProbability: 1,
      vehicleClassId: 3,
      vehicleImageUrlWebp: '../assets/images/vehicles/H2RWD/ABARTH.webp'
    },
    {
      vehicleId: 9,
      vehicleName: 'OPEL KADETT C GT / E',
      vehicleProbability: 1,
      vehicleClassId: 3,
      vehicleImageUrlWebp: '../assets/images/vehicles/H2RWD/KADETT.webp'
    },
    {
      vehicleId: 10,
      vehicleName: 'BMW E30 M3 EVO RALLY',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleImageUrlWebp: '../assets/images/vehicles/H3/BMWE30.webp'
    },
    {
      vehicleId: 11,
      vehicleName: 'OPEL ASCONA 400',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleImageUrlWebp: '../assets/images/vehicles/H3/ASCONA400.webp'
    },
    {
      vehicleId: 12,
      vehicleName: 'LANCIA STRATOS',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleImageUrlWebp: '../assets/images/vehicles/H3/STRATOS.webp'
    },
    {
      vehicleId: 13,
      vehicleName: 'DATSUN 240Z',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleImageUrlWebp: '../assets/images/vehicles/H3/240Z.webp'
    },
    {
      vehicleId: 14,
      vehicleName: 'RENAULT 5 TURBO',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleImageUrlWebp: '../assets/images/vehicles/H3/RENAULT5.webp'
    },
    {
      vehicleId: 15,
      vehicleName: 'FORD SIERRA COSWORTH RS500',
      vehicleProbability: 1,
      vehicleClassId: 4,
      vehicleImageUrlWebp: '../assets/images/vehicles/H3/RS500.webp'
    },
    {
      vehicleId: 16,
      vehicleName: 'PEUGEOT 306 MAXI',
      vehicleProbability: 1,
      vehicleClassId: 5,
      vehicleImageUrlWebp: '../assets/images/vehicles/KITCAR/306MAXI.webp'
    },
    {
      vehicleId: 17,
      vehicleName: 'SEAT IBIZA KIT CAR',
      vehicleProbability: 1,
      vehicleClassId: 5,
      vehicleImageUrlWebp: '../assets/images/vehicles/KITCAR/IBIZA.webp'
    },
    {
      vehicleId: 18,
      vehicleName: 'VOLKSWAGEN GOLF KIT CAR',
      vehicleProbability: 1,
      vehicleClassId: 5,
      vehicleImageUrlWebp: '../assets/images/vehicles/KITCAR/GOLF.webp'
    },
    {
      vehicleId: 19,
      vehicleName: 'MITSUBISHI LANCER EVOLUTION VI',
      vehicleProbability: 1,
      vehicleClassId: 6,
      vehicleImageUrlWebp: '../assets/images/vehicles/groupA/EVOLUTION.webp'
    },
    {
      vehicleId: 20,
      vehicleName: 'SUBARU IMPREZA 1995',
      vehicleProbability: 1,
      vehicleClassId: 6,
      vehicleImageUrlWebp: '../assets/images/vehicles/groupA/IMPREZA.webp'
    },
    {
      vehicleId: 21,
      vehicleName: 'SUBARU LEGACY RS',
      vehicleProbability: 1,
      vehicleClassId: 6,
      vehicleImageUrlWebp: '../assets/images/vehicles/groupA/LEGACY.webp'
    },
    {
      vehicleId: 22,
      vehicleName: 'LANCIA DELTA HF INTEGRALE',
      vehicleProbability: 1,
      vehicleClassId: 6,
      vehicleImageUrlWebp: '../assets/images/vehicles/groupA/LANCIA.webp'
    },
    {
      vehicleId: 23,
      vehicleName: 'FORD ESCORT RS COSWORTH',
      vehicleProbability: 1,
      vehicleClassId: 6,
      vehicleImageUrlWebp: '../assets/images/vehicles/groupA/COSWORTH.webp'
    },
    {
      vehicleId: 24,
      vehicleName: 'LANCIA 037 EVO 2',
      vehicleProbability: 1,
      vehicleClassId: 7,
      vehicleImageUrlWebp: '../assets/images/vehicles/groupBRwd/LANCIA037.webp'
    },
    {
      vehicleId: 25,
      vehicleName: 'OPEL MANTA 400',
      vehicleProbability: 1,
      vehicleClassId: 7,
      vehicleImageUrlWebp: '../assets/images/vehicles/groupBRwd/OPELMANTA.webp'
    },
    {
      vehicleId: 26,
      vehicleName: 'BMW M1 PROCAR RALLY',
      vehicleProbability: 1,
      vehicleClassId: 7,
      vehicleImageUrlWebp: '../assets/images/vehicles/groupBRwd/BMWM1.webp'
    },
    {
      vehicleId: 27,
      vehicleName: 'PORSCHE 911 SC RS',
      vehicleProbability: 1,
      vehicleClassId: 7,
      vehicleImageUrlWebp: '../assets/images/vehicles/groupBRwd/911.webp'
    },
    {
      vehicleId: 28,
      vehicleName: 'AUDI SPORT QUATTRO S1 E2',
      vehicleProbability: 1,
      vehicleClassId: 8,
      vehicleImageUrlWebp: '../assets/images/vehicles/groupB4x4/QUATTRO.webp'
    },
    {
      vehicleId: 29,
      vehicleName: 'PEUGEOT 205 T16 EVO 2',
      vehicleProbability: 1,
      vehicleClassId: 8,
      vehicleImageUrlWebp: '../assets/images/vehicles/groupB4x4/PEUGEOT.webp'
    },
    {
      vehicleId: 30,
      vehicleName: 'LANCIA DELTA S4',
      vehicleProbability: 1,
      vehicleClassId: 8,
      vehicleImageUrlWebp: '../assets/images/vehicles/groupB4x4/LANCIA.webp'
    },
    {
      vehicleId: 31,
      vehicleName: 'FORD RS200',
      vehicleProbability: 1,
      vehicleClassId: 8,
      vehicleImageUrlWebp: '../assets/images/vehicles/groupB4x4/RS200.webp'
    },
    {
      vehicleId: 32,
      vehicleName: 'MG METRO 6R4',
      vehicleProbability: 1,
      vehicleClassId: 8,
      vehicleImageUrlWebp: '../assets/images/vehicles/groupB4x4/6R4.webp'
    },
    {
      vehicleId: 33,
      vehicleName: 'FORD FIESTA R2',
      vehicleProbability: 1,
      vehicleClassId: 9,
      vehicleImageUrlWebp: '../assets/images/vehicles/R2/FIESTA.webp'
    },
    {
      vehicleId: 34,
      vehicleName: 'OPEL ADAM R2',
      vehicleProbability: 1,
      vehicleClassId: 9,
      vehicleImageUrlWebp: '../assets/images/vehicles/R2/ADAM.webp'
    },
    {
      vehicleId: 35,
      vehicleName: 'PEUGEOT 208 R2',
      vehicleProbability: 1,
      vehicleClassId: 9,
      vehicleImageUrlWebp: '../assets/images/vehicles/R2/PEUGEOT208.webp'
    },
    {
      vehicleId: 36,
      vehicleName: 'SUBARU WRX STI NR4',
      vehicleProbability: 1,
      vehicleClassId: 10,
      vehicleImageUrlWebp: '../assets/images/vehicles/N4/SUBARU.webp'
    },
    {
      vehicleId: 37,
      vehicleName: 'MITSUBISHI LANCER EVOLUTION X',
      vehicleProbability: 1,
      vehicleClassId: 10,
      vehicleImageUrlWebp: '../assets/images/vehicles/N4/EVOLUTIONX.webp'
    },
    {
      vehicleId: 38,
      vehicleName: 'FORD FIESTA R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleImageUrlWebp: '../assets/images/vehicles/R5/FIESTAR5.webp'
    },
    {
      vehicleId: 39,
      vehicleName: 'PEUGEOT 208 R5 T16',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleImageUrlWebp: '../assets/images/vehicles/R5/PEUGEOTT16.webp'
    },
    {
      vehicleId: 40,
      vehicleName: 'VOLKSWAGEN POLO GTI R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleImageUrlWebp: '../assets/images/vehicles/R5/POLO.webp'
    },
    {
      vehicleId: 41,
      vehicleName: 'MITSUBISHI SPACESTAR R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleImageUrlWebp: '../assets/images/vehicles/R5/SPACESTAR.webp'
    },
    {
      vehicleId: 42,
      vehicleName: 'SKODA FABIA R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleImageUrlWebp: '../assets/images/vehicles/R5/FABIA.webp'
    },
    {
      vehicleId: 43,
      vehicleName: 'CITROEN C3 R5',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleImageUrlWebp: '../assets/images/vehicles/R5/CITROEN.webp'
    },
    {
      vehicleId: 44,
      vehicleName: 'FORD FIESTA R5 MKII',
      vehicleProbability: 1,
      vehicleClassId: 11,
      vehicleImageUrlWebp: '../assets/images/vehicles/R5/FIESTAR5MKII.webp'
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
      vehicleImageUrlWebp: '../assets/images/vehicles/gtRally/BMWM2.webp'
    },
    {
      vehicleId: 54,
      vehicleName: 'CHEVROLET CAMARO GT4.R',
      vehicleProbability: 1,
      vehicleClassId: 13,
      vehicleImageUrlWebp: '../assets/images/vehicles/gtRally/GT4R.webp'
    },
    {
      vehicleId: 55,
      vehicleName: 'PORSCHE RGT RALLY SPEC',
      vehicleProbability: 1,
      vehicleClassId: 13,
      vehicleImageUrlWebp: '../assets/images/vehicles/gtRally/PORSCHERGT.webp'
    },
    {
      vehicleId: 56,
      vehicleName: 'ASTON MARTIN V8 VANTAGE GT4',
      vehicleProbability: 1,
      vehicleClassId: 13,
      vehicleImageUrlWebp: '../assets/images/vehicles/gtRally/VANTAGE.webp'
    },
    {
      vehicleId: 57,
      vehicleName: 'FORD MUSTANG GT4',
      vehicleProbability: 1,
      vehicleClassId: 13,
      vehicleImageUrlWebp: '../assets/images/vehicles/gtRally/GT4.webp'
    },
  ];

  surfacesWearArray: SurfaceWear[] = [
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

  serviceAreaArray: ServiceArea[] = [
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

  getQuestion() {
    return this.question;
  }

  getLocations() {
    return this.locationsArray;
  }

  getGroups() {
    return this.groupsArray;
  }

  getSurfaceWear() {
    return this.surfacesWearArray;
  }
  
  getServiceAreaWithoutNone() {
    return this.serviceAreaArray.filter(x=>x.serviceAreaId != 1);
  }

  getServiceAreaByNonePercen(percent: number): ServiceArea[]{
    let serviceArea: ServiceArea[] = [];
    let treeCounter = 2;
    for (let index = 0; index < 99; index++) {
      if(index < percent){
        let serv = this.serviceAreaArray.find(x=>x.serviceAreaName=='NONE');
        if(serv){
          serviceArea.push(serv)
        }
      }
      else{
        treeCounter++;
        if(treeCounter > 4){
          treeCounter = 2;
        }
        let serv = this.serviceAreaArray[treeCounter];
        if(serv){
          serviceArea.push(serv)
        }
      }      
    }
    return serviceArea;
  }


  getVehicleByGroup(groupId: number): Vehicle[] {
    return this.vehiclesArray.filter((x) => x.vehicleClassId == groupId);
  }

  getWeatherByLocation(locationId: number): Weather[]{
    return this.weatherArray.filter((x)=>x.locationId == locationId);
}

}
