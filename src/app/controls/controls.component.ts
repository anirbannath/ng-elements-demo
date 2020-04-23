import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'poc-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlsComponent {

  @Output() controlValueChange = new EventEmitter<number>();

  onClick(value: number) {
    this.controlValueChange.emit(value);
  }

}
