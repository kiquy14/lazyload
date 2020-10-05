import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DebugComponent} from "./debug/debug.component";


const routes: Routes = [
  {
    path: '',
    component: DebugComponent
  },
  {
    path: 'lazy-load',
    loadChildren: () => import("./lazy/lazy.module").then(m=>m.LazyModule)
  },
  {
    path: 'module1',
    loadChildren: () => import("./module1/module1.module").then(m => m.Module1Module)
  },
  {
    path: 'module2',
    loadChildren: () => import("./module2/module2.module").then( m => m.Module2Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
