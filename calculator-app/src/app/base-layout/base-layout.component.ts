/*
-Travis Rosen
-07/09/2022
-base-layout.component.ts
*/


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  title: string;

  constructor(private router: Router) {
    this.title = 'Calculator'
   }

  ngOnInit(): void {
  }

}
