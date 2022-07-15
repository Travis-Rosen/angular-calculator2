/*
-Travis Rosen
-07/09/2022
-calc.component.ts
-Logic for calculator component
*/

import { Component, OnInit } from '@angular/core';
//Import statements for calculator
import { CalcNumbersService } from '../../services/calc-numbers.service';
import { OperatorsService } from '../../services/operators.service';
import { CalcNumbers } from '../../services/interfaces/numbers.interface';
import { CalcOperators } from '../../services/interfaces/operators.interface';
import { CalculatorProblem } from '../../services/interfaces/problems.interface';
import { CalcProblemsService } from '../../services/calc-problems.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Defining problems & the columns that will be displayed on table
  problems: CalculatorProblem[];
  displayedColumns = ['title', 'description', 'functions']

  //Defining calculator number and operators arrays which will be pulled from respective services
  calcOperators: CalcOperators[];
  calcNumbers: CalcNumbers[];
  //Defining variables current number, operands, and waiting for second number
  currentNumber: string = '0';
  firstOperand: any = null;
  operator: any = null;
  waitForSecondNumber: boolean = false;

  constructor(private calcNumberService: CalcNumbersService, private operatorsService: OperatorsService, private dialog: MatDialog, private calcProblemsService: CalcProblemsService, private http: HttpClient) {
    //Calling on the functions within the number/operator service to populate calculator
    this.calcNumbers = calcNumberService.getAllNumbers();
    this.calcOperators = operatorsService.getAllOperators();
    //Call findAllProblems
    this.calcProblemsService.findAllProblems().subscribe( res => {
      console.log(this.problems);
      this.problems = res['data'];
    }, err => {
      console.log(err);
    });
   }

   ngOnInit(): void {
  }

  /**
   * Start of calculator functions
   */

   //function that will get the number(s) inputted and display them as current number
   getNumber(string) {
    console.log(string);
    if (this.waitForSecondNumber) {
      this.currentNumber = string;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = string : this.currentNumber += string;
    }
  }
  //Function to check if decimal is selected
  getDecimal(): void {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }
  //
  doCalculation(op: string, secondOp: any): any {
    switch (op) {
      case '+':
        return this.firstOperand += secondOp;
      case '-':
        return this.firstOperand -= secondOp;
      case '*':
        return this.firstOperand *= secondOp;
      case '/':
        return this.firstOperand /= secondOp;
      case '=':
        return secondOp;
    }
  }
  //
 getOperation(op: string) {
    console.log(op);
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;
    console.log(this.firstOperand);
  }
  //Function that will clear current numbers/operations at hand
  clear(): void {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  //Dialog to appear when user clicks delete function. This will call on deleteProblem() from CalcProblemsService.
  delete(recordId: string): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        recordId,
        dialogHeader: 'Delete Calculator Problem',
        dialogBody: `Are you sure you want to delete problem?`
      },
      disableClose: true,
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.calcProblemsService.deleteProblem(recordId).subscribe(res => {
          console.log('Problem deletion');
          this.problems = this.problems.filter(p => p._id !== recordId);
        });
      }
    });
  }

}
