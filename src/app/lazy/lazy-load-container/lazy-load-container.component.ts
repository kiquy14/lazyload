import {
  Component,
  ComponentFactoryResolver,
  Injector,
  OnInit,
  SimpleChange,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-lazy-load-container',
  templateUrl: './lazy-load-container.component.html',
  styleUrls: ['./lazy-load-container.component.scss']
})
export class LazyLoadContainerComponent implements OnInit {
  @ViewChild("container", {read: ViewContainerRef}) container: ViewContainerRef;
  @ViewChild('imageContainer', {read: ViewContainerRef}) imageContainer: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector) { }

  count = 0;
  ngOnInit(): void {
  }

  async onLoad(){
    // load ComponentFactory
    const {LazyLoadComponentComponent} = await import("./lazy-load-component/lazy-load-component.component");
    const  compFactory = this.componentFactoryResolver.resolveComponentFactory(LazyLoadComponentComponent);

    //create Component
    this.container.createComponent(compFactory, 0, this.injector);

  }
  onLoad2(){
    // load ComponentFactory
    import("./lazy-load-component/lazy-load-component.component").then(m=> {

      const  compFactory = this.componentFactoryResolver.resolveComponentFactory(m.LazyLoadComponentComponent);
      //create Component
      this.container.createComponent(compFactory, undefined, this.injector);

    })
  }

  async loadImage() {
    this.imageContainer.clear();
    // load ComponentFactory
    const {ImageComponentComponent} = await import("./image-component/image-component.component");
    const compFactory = this.componentFactoryResolver.resolveComponentFactory(ImageComponentComponent);

    //create Component
     const  {instance : componentInstance}  = this.imageContainer.createComponent(compFactory, 0, this.injector);
     this.count = this.count + 1
     componentInstance.title = this.count.toString();
     componentInstance.clicked.subscribe(a =>{
       alert(a);
     })

      // Trigger first ngOnChanges manually
      componentInstance.ngOnChanges({
        title: new SimpleChange(null, this.count, true)
      });

  }


}
