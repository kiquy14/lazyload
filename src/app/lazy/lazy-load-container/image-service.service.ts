import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor() {
  }

  checkImage(){
    console.log("check image");
  }
}