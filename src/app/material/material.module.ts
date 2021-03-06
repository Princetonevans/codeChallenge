import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatCardModule, MatBadgeModule, MatIconModule, MatDividerModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
