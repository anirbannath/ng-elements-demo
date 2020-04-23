import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'poc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent { }
