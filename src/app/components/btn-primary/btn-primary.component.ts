import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

type BtnVarient = 'primary' | 'secondery';

@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss',
})
export class BtnPrimaryComponent {
  @Input('btn-text') btnTetx: string = '';
  @Output('submit') onSubmit = new EventEmitter();
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVarient = 'primary';

  submit() {
    this.onSubmit.emit();
  }
}
