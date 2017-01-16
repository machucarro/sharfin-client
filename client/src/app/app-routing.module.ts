import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovementsComponent } from './movements/movements.component';

const appRoutes: Routes = [
  { path: 'movements', component: MovementsComponent },
  { path: '',   redirectTo: '/movements', pathMatch: 'full' },
  { path: '**', component: MovementsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}