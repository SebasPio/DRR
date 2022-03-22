import { NgModule, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatIconModule} from '@angular/material/icon'

@NgModule({
    imports: [
        MatButtonModule,
        MatGridListModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonToggleModule,
        MatIconModule
    ],
    exports: [
        MatButtonModule,
        MatGridListModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonToggleModule,
        MatIconModule    ]
})

export class MaterialModule{}