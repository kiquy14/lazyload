import { Component, OnInit } from '@angular/core';
import {DemoService} from "../../demo.service";

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  constructor(public demoService: DemoService) { }

  ngOnInit(): void {
    console.log("Component1Component ", this.demoService.currentTime)
  }

}
