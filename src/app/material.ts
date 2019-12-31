import {
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatProgressSpinnerModule } from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
  ]
})
export class MaterialModule { }
