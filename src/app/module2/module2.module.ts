import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Component2Component } from './component2/component2.component';


@NgModule({
  declarations: [Component2Component],
  imports: [
    CommonModule,
    Module2RoutingModule
  ],
})
export class Module2Module { }
