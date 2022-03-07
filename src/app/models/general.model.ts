export class Location {
    locationId: number;
    locationName: string;
    locationProbability: number;
    locationImageUrl: string;

    constructor(){
        this.locationId = 0,
        this.locationName = '',
        this.locationProbability = 1,
        this.locationImageUrl = '';
    }
    
}

export class Groups{
    groupId: number;
    groupName: string;
    groupProbability: number;
    groupImageUrl: string;

    constructor(){
        this.groupId = 0,
        this.groupName = '',
        this.groupProbability = 1,
        this.groupImageUrl = ''
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
    vehicleClassImageUrl: string;

    constructor(){
        this.vehicleId = 0;
        this.vehicleName = '';
        this.vehicleProbability = 1;
        this.vehicleClassId = 0;
        this.vehicleClassImageUrl = '';
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