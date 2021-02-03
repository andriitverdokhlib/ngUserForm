import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PreviewComponent } from './pages/preview/preview.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import { ValidationErrorComponent } from './pages/questionnaire/validation-error/validation-error.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    QuestionnaireComponent,
    ValidationErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
