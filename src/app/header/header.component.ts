import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'poc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent { }
