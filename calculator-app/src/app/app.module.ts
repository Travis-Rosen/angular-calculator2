/*
-Travis Rosen
-07/09/2022
-app.module.ts
-Imports for application
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { ContactComponent } from './pages/contact/contact.component';
import { DeleteDialogComponent } from './pages/delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { CalcProblemDetailsComponent } from './pages/calc-problem-details/calc-problem-details.component';
import { FormsModule } from '@angular/forms';
import { CalcProblemCreateComponent } from './pages/calc-problem-create/calc-problem-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaseLayoutComponent,
    ContactComponent,
    DeleteDialogComponent,
    CalcProblemDetailsComponent,
    CalcProblemCreateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule


  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
