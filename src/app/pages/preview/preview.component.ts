import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUserForm } from 'src/app/models/user-form-model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  public questionnaireValues: IUserForm;

  constructor(
    private readonly activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getValueFromQueryParam();
  }

  private getValueFromQueryParam(): void {
    const formValue = this.activedRoute.snapshot.queryParamMap.get('formValue');
    this.questionnaireValues = JSON.parse(formValue);
  }

}
