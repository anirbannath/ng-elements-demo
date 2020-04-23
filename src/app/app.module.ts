import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { createCustomElement } from '@angular/elements';
import { CardComponent } from './card/card.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { ControlsComponent } from './controls/controls.component';
import { DisplayScoreComponent } from './display-score/display-score.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    CardBodyComponent,
    CardHeaderComponent,
    ControlsComponent,
    DisplayScoreComponent
  ],
  entryComponents: [
    HeaderComponent,
    CardComponent,
    CardBodyComponent,
    CardHeaderComponent,
    ControlsComponent,
    DisplayScoreComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const elementList = [
      { component: HeaderComponent, selector: 'poc-header' },
      { component: CardComponent, selector: 'poc-card' },
      { component: CardHeaderComponent, selector: 'poc-card-header' },
      { component: CardBodyComponent, selector: 'poc-card-body' },
      { component: ControlsComponent, selector: 'poc-controls' },
      { component: DisplayScoreComponent, selector: 'poc-display-score' },
    ];

    for (const { component, selector } of elementList) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(selector, el);
    }
  }
}
