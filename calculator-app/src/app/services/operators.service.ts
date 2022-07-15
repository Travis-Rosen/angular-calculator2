/**
-Travis Rosen
-07/09/2022
-calc-numbers.service
-Service to provide the operators that will populate the calculator
 */


import { Injectable } from '@angular/core';
import { CalcOperators } from './interfaces/operators.interface';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {
  //Function that defines and calls on operators to populate calculator
  getAllOperators(): CalcOperators[] {
    const calcOperators: CalcOperators[] = [

      {
        operator: '+'
      },
      {
         operator: '-'
      },
      {
        operator: '*'
      },
      {
        operator: '/'
      },
    ];
    return calcOperators;
  }

  constructor() { }
}
