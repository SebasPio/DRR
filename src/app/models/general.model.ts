export class Location {
    locationId: number;
    locationName: string;
    locationProbability: number;
    locationImageUrlWebp: string;

    constructor(){
        this.locationId = 0,
        this.locationName = '',
        this.locationProbability = 1,
        this.locationImageUrlWebp = '';
    }
    
}

export class Groups{
    groupId: number;
    groupName: string;
    groupProbability: number;
    groupImageUrlWebp: string;

    constructor(){
        this.groupId = 0,
        this.groupName = '',
        this.groupProbability = 1,
        this.groupImageUrlWebp = ''
    }
}

export class SurfaceWear{
    surfaceWearId: number;
    surfaceWearName: string;
    surfaceWearProbability: number;
    surfaceClassImageUrl: string;

    constructor(){
        this.surfaceWearId = 0,
        this.surfaceWearName = '',
        this.surfaceWearProbability = 1,
        this.surfaceClassImageUrl = ''
    }
}

export class Vehicle{
    vehicleId: number;
    vehicleName: string;
    vehicleProbability: number;
    vehicleClassId: number;
    vehicleImageUrlWebp: string;

    constructor(){
        this.vehicleId = 0;
        this.vehicleName = '';
        this.vehicleProbability = 1;
        this.vehicleClassId = 0;
        this.vehicleImageUrlWebp = '';
    }
}
export class ServiceArea{
    serviceAreaId: number;
    serviceAreaName: string;
    serviceAreaProbability: number;
    serviceAreaImageUrl: string;

    constructor(){
        this.serviceAreaId = 0;
        this.serviceAreaName = '';
        this.serviceAreaProbability = 1;
        this.serviceAreaImageUrl = '';
    }
}

export class Weather{
    weatherId: number;
    weatherName: string;
    weatherProbability: number;
    locationId: number;

    constructor(){
        this.weatherId = 0;
        this.weatherName = '';
        this.weatherProbability = 1;
        this.locationId = 0;
    }
}