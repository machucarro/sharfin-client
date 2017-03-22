import { Component, OnInit } from '@angular/core';
import { Movement } from '../models/movement';
import { MovementService } from '../services/movement.service';

@Component({
  selector: 'movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.sass'],
  providers: [MovementService]
})


export class MovementListComponent implements OnInit
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
