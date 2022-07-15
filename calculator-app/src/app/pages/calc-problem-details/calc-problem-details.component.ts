/**
-Travis Rosen
-07/12/2022
-calc-problems-details.component.ts
-Logic for problems details page
 */



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalcProblemsService } from 'src/app/services/calc-problems.service';
import { CalculatorProblem } from 'src/app/services/interfaces/problems.interface';

@Component({
  selector: 'app-calc-problem-details',
  templateUrl: './calc-problem-details.component.html',
  styleUrls: ['./calc-problem-details.component.css']
})
export class CalcProblemDetailsComponent implements OnInit {
  //variables
  problem: CalculatorProblem;
  problemId: string;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private calcProblemsService: CalcProblemsService) {
    //Finding problem by id
    this.problemId = this.route.snapshot.paramMap.get('problemId');
    this.calcProblemsService.findProblemById(this.problemId).subscribe(res => {
      this.problem = res['data'];
    }, err => {
      console.log(err);
    }, () => {
      this.form.controls.title.setValue(this.problem.title);
      this.form.controls.description.setValue(this.problem.description);
    })
   }

  //EUsing validators to make fields required
  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])]
    });
  }

  //function to save updated calculator problem by calling on update api from service
  savedProblem(): void {
    const updatedCalcProblem: CalculatorProblem = {
      title: this.form.controls.title.value,
      description: this.form.controls.description.value
    }
    this.calcProblemsService.updateProblem(this.problemId, updatedCalcProblem).subscribe(res => {
      this.router.navigate(['/'])
    });
  }

  //Function to cancel the update
  cancel(): void {
    this.router.navigate(['/'])
  }
}
