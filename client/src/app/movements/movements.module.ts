import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementListComponent } from './movement-list/movement-list.component';
import { MovementsRoutingModule } from './movements-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MovementsRoutingModule
  ],
  declarations: [
    MovementListComponent
  ]
})
export class MovementsModule { }
