import { Component, OnInit } from '@angular/core';
import { Movement } from './movement';
import { MovementService } from './movement.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.sass'],
  providers: [MovementService]
})


export class MovementsComponent implements OnInit
{
  movements: Movement[];

  constructor(private movementService: MovementService)
  {
  }

  getMovements(): void
  {
    this.movements = this.movementService.getMovements();
  }
  
  ngOnInit(): void
  {
    this.getMovements();
  }
}
