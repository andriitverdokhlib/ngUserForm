import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  public questionnaireForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.setUpForm();
  }

  private setUpForm(): void {
    this.questionnaireForm = this.formBuilder.group({
      bio: this.formBuilder.control('', [Validators.required, Validators.minLength(20)]),
      services: this.formBuilder.group({
        software: this.formBuilder.control(''),
        customerSupport: this.formBuilder.control(''),
        other: this.formBuilder.group({
          selected: this.formBuilder.control(''),
          text: this.formBuilder.control('')
        })
      }),
      additionalOptions: this.formBuilder.group({
        other: this.formBuilder.control('')
      }),
      questionArray: this.formBuilder.array([
        this.addQuestionField(),
      ])
    })
  }

  public addQuestionField(): FormGroup {
    return this.formBuilder.group({
      question: this.formBuilder.control(''),
      type: this.formBuilder.control(''),
      questionIsRequired: this.formBuilder.control(''),
      answer: this.formBuilder.group({
        answerOption: this.formBuilder.control(''),
        selectComment: this.formBuilder.control(''),
        comment: this.formBuilder.control('')
      })
    })
  }

  public addQuestionOption(): void {
    const question: FormArray = this.questionnaireForm.get('questionArray')['controls'] as FormArray;
    question.push(this.addQuestionField());
  }

  public removeQuestionOption(index: number): void {
    const question: Array<FormGroup> = this.questionnaireForm.get('questionArray')['controls'];;
    question.splice(index, 1);
  }

  public submit(): void {
    const formValue = JSON.stringify(this.questionnaireForm.value);
    this.router.navigate(['/preview'], { queryParams: { formValue }});
  }

}
