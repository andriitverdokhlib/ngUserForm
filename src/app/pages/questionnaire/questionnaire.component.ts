import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  public questionnaireForm;

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
        other: this.formBuilder.control(''),
        questionIsRequired: this.formBuilder.control('')
      }),
      question: this.formBuilder.group({
          text: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
          type: this.formBuilder.control('', [Validators.required, Validators.minLength(3)])
      }),
      answer: this.formBuilder.array([
        this.answerGroup,
        this.answerGroup,
        this.answerGroup
      ]) 

    })
  }

  private get answerGroup(): FormGroup {
    return this.formBuilder.group({
      answerOption: this.formBuilder.control(''),
      selectComment: this.formBuilder.control(''),
      comment: this.formBuilder.control('')
    })
  }


  public submit(): void {
    const formValue = JSON.stringify(this.questionnaireForm.value);
    this.router.navigate(['/preview'], { queryParams: { formValue }});
  }

}
