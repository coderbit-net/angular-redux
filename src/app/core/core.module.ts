import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { store, appState } from './core.state';
import { AppComponent } from './component/core.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public ngRedux: NgRedux<appState>) {
    ngRedux.provideStore(store);
  }
}
