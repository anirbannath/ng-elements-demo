import { Component, Input, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'poc-display-score',
  templateUrl: './display-score.component.html',
  styleUrls: ['./display-score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayScoreComponent {

  private _score: number = 0;
  @Input()
  get score() { return this._score; }
  set score(value: number) {
    this._score = value;
    this._cd.markForCheck();
  };

  @HostBinding('class.success')
  get isScoreSuccess() { return this.score > 0 }

  @HostBinding('class.danger')
  get isScoreDanger() { return this.score < 0 }

  constructor(private _cd: ChangeDetectorRef) { }

}
