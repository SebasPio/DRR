export class Stages {
    stageId: number;
    stageName: string;
    stageProbability: number;

    constructor(){
        this.stageId = 0,
        this.stageName = '',
        this.stageProbability = 1
    }
    
}

export class Groups{
    groupId: number;
    groupName: string;
    groupProbability: number;

    constructor(){
        this.groupId = 0,
        this.groupName = '',
        this.groupProbability = 1
    }
}

export class SurfaceWear{
    surfaceWearId: number;
    surfaceWearName: string;
    surfaceWearProbability: number;

    constructor(){
        this.surfaceWearId = 0,
        this.surfaceWearName = '',
        this.surfaceWearProbability = 1
    }
}

export class Vehicle{
    vehicleId: number;
    vehicleName: string;
    vehicleProbability: number;
    vehicleClassId: number;

    constructor(){
        this.vehicleId = 0;
        this.vehicleName = '';
        this.vehicleProbability = 1;
        this.vehicleClassId = 0;
    }
}
export class ServiceArea{
    serviceAreaId: number;
    serviceAreaName: string;
    serviceAreaProbability: number;

    constructor(){
        this.serviceAreaId = 0;
        this.serviceAreaName = '';
        this.serviceAreaProbability = 1;
    }
}