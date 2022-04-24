import { NgModule, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule} from '@angular/material/button-toggle'
import { MatIconModule} from '@angular/material/icon'
import { MatSliderModule } from '@angular/material/slider'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatListModule } from '@angular/material/list'

@NgModule({
    imports: [
        MatButtonModule,
        MatGridListModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonToggleModule,
        MatIconModule,
        MatSliderModule,
        MatExpansionModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatGridListModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonToggleModule,
        MatIconModule ,
        MatSliderModule,
        MatExpansionModule,
        MatListModule
       ]
})

export class MaterialModule{}