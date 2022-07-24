import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { GalleriaModule } from 'primeng/galleria';
import { TabMenuModule } from 'primeng/tabmenu';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'',component: AppComponent},
  ])
  ],
  exports: [
    GalleriaModule,
    TabMenuModule
  ],
  declarations: []
})
export class PrimeNgModule { }
