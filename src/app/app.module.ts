import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  entryComponents: [
    HeaderComponent
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
      { component: HeaderComponent, selector: 'poc-header' }
    ];

    for (const { component, selector } of elementList) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(selector, el);
    }
  }
}
