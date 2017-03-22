import { Injectable } from '@angular/core';
import { Movement } from '../models/movement';
import { MOVEMENTS } from './mock-movements';

@Injectable()
export class MovementService {

  constructor() { }

  getMovements(): Movement[]
  {
    return MOVEMENTS;
  }
}
