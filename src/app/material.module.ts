import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        MatButtonModule,
        MatGridListModule,
        MatCardModule
    ],
    exports: [
        MatButtonModule,
        MatGridListModule,
        MatCardModule
    ]
})

export class MaterialModule{}