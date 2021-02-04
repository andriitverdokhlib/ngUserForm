import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidationErrorComponent{

  @Input('form')
  public form: string;

  @Input('char')
  public char: string;

}
