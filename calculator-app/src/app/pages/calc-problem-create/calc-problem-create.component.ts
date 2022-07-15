/**
-Travis Rosen
-07/12/2022
-calc-problems-create.component.ts
-Logic for problems create page
 */



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculatorProblem } from 'src/app/services/interfaces/problems.interface';
import { CalcProblemsService } from 'src/app/services/calc-problems.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calc-problem-create',
  templateUrl: './calc-problem-create.component.html',
  styleUrls: ['./calc-problem-create.component.css']
})
export class CalcProblemCreateComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private calcProblemsService: CalcProblemsService) {
  }
  //Using validators to make required fields
  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])]
    });
  }
  //Function that will create a new problem object and calls on createProblem() from CalcProblemsService
  create(): void {
    const newProblem: CalculatorProblem = {
      title: this.form.controls.title.value,
      description: this.form.controls.description.value
    }
    this.calcProblemsService.createProblem(newProblem).subscribe(res => {
      this.router.navigate(['/']);
    }, err => {
      console.log(err);
    });
  }
  //Cancel function that will navigate back to home page
  cancel(): void {
    this.router.navigate(['/'])
  }


}
