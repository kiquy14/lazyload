import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LazyLoadContainerComponent} from './lazy-load-container/lazy-load-container.component';
import {FormsModule} from "@angular/forms";
import {RatingModule} from "ngx-bootstrap/rating";

const routes: Routes = [
  { path: '', component: LazyLoadContainerComponent }
];

@NgModule({
  declarations: [LazyLoadContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    RatingModule,


  ]
})
export class LazyModule { }
