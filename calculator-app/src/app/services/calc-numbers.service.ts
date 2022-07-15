/**
-Travis Rosen
-07/09/2022
-calc-numbers.service
-Service to provide the numbers that will populate the calculator app
 */

import { Injectable } from '@angular/core';
import { CalcNumbers } from './interfaces/numbers.interface';

@Injectable({
  providedIn: 'root'
})
export class CalcNumbersService {

  constructor() { }
  //Function to define and call on numbers to populate calculator
  getAllNumbers(): CalcNumbers[] {
    const calcNumbers: CalcNumbers[] = [
      {
        num: '1'
      },
      {
        num: '2'
      },
      {
        num: '3'
      },
      {
        num: '4'
      },
      {
        num: '5'
      },
      {
        num: '6'
      },
      {
        num: '7'
      },
      {
        num: '8'
      },
      {
        num: '9'
      },
      {
        num: '0'
      },
    ];
    return calcNumbers;
  }

}
