import { Component, OnInit } from '@angular/core';
import {DemoService} from "../../demo.service";

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  constructor(public demoService: DemoService) { }

  ngOnInit(): void {
    console.log("Component2Component ", this.demoService.currentTime)
  }

}
