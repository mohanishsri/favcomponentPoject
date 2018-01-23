import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { updatedNameComponent } from './Propercasse.component';
import { updatedNewNameComponent } from './Propercase_new.components';
import { BootstrappanelComponent } from './bootstrappanel/bootstrappanel.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    updatedNameComponent,
    updatedNewNameComponent,
    BootstrappanelComponent,
    InputFormatDirective,
    ZippyComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
