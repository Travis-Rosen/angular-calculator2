/**
-Travis Rosen
-07/12/2022
-calc-problems.service
-Service to provide the functions to call apis for calculator problems
 */

//Imports
import { Injectable } from '@angular/core';
import { CalculatorProblem } from './interfaces/problems.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalcProblemsService {
  constructor(private http: HttpClient) { }

  //findAll api
  findAllProblems(): Observable<any> {
    return this.http.get('/api/calculator');
  }

  //findById api
  findProblemById(problemId: string): Observable<any> {
    return this.http.get('/api/calculator/' + problemId);
  }

  //create api
  createProblem(newCalculatorProblem: CalculatorProblem): Observable<any> {
    return this.http.post('/api/calculator', {
      title: newCalculatorProblem.title,
      description: newCalculatorProblem.description
    });
  }

  //update api
  updateProblem(problemId: string, updatedProblem: CalculatorProblem): Observable<any> {
    return this.http.put('/api/calculator/' + problemId, {
      title: updatedProblem.title,
      description: updatedProblem.description
    });
  }

  //delete api
  deleteProblem(problemId: string): Observable<any> {
    return this.http.delete('/api/calculator/' + problemId);
  }
}
