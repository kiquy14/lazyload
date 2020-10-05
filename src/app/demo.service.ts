import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root' //'platform' | 'any'
})
export class DemoService {

  currentTime = new Date().getTime();
  constructor() { }

}
