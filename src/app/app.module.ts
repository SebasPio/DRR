import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RandomizerComponent } from './randomizer/randomizer.component';
import { SettingsComponent } from './settings/settings.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule} from '@angular/flex-layout'


@NgModule({
  declarations: [
    AppComponent,
    RandomizerComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
