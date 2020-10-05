import {Component, EventEmitter, Input, NgModule, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ImageServiceService} from "../image-service.service";
import {RatingModule} from "ngx-bootstrap/rating";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.scss']
})
export class ImageComponentComponent implements OnInit, OnChanges{
  @Input() title: string ="aaa";
  @Output() clicked = new EventEmitter<any>();

  constructor(public imageService: ImageServiceService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChange ", this.title);
  }
  click(){
    this.imageService.checkImage();
    this.clicked.emit(true);
  }


  max = 10;
  rate = 7;
  isReadonly = false;

  overStar: number | undefined;
  percent: number;

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  resetStar(): void {
    this.overStar = void 0;
  }

}

@NgModule({
  declarations:[ImageComponentComponent],
  imports: [
    RatingModule,
    FormsModule,
    CommonModule
  ]
})
class ImageComponentModule {
}

