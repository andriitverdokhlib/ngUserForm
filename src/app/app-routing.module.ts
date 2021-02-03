import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewComponent } from './pages/preview/preview.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: QuestionnaireComponent
  },
  {
    path: 'preview',
    component: PreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
