import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
    ],
    exports: [
      HeaderComponent,
      FooterComponent,
      SharedModule
    ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
