import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit, AfterViewInit {

  show = false;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    //this.show = true;
  }

}
