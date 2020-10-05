import {Component, NgModule, OnInit} from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";

@Component({
  selector: 'app-lazy-load-component',
  templateUrl: './lazy-load-component.component.html',
  styleUrls: ['./lazy-load-component.component.scss']
})
export class LazyLoadComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// @NgModule({
//   declarations: [LazyLoadComponentComponent],
//   imports: []
// })
// class LazyLoadComponentModule {
// }
