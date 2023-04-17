import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DemoRoutingModule} from './demo-routing.module';
import {ButtonsComponent} from './buttons/buttons.component';
import {Routes} from "@angular/router";
import {MaterialModule} from "../common/material.module";




@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule
  ]
})
export class DemoModule { }
