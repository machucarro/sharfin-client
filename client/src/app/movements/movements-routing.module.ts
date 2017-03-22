import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovementListComponent } from './movement-list/movement-list.component';

const appRoutes: Routes = [
  { path: 'movements', component: MovementListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MovementsRoutingModule {}