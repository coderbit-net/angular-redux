import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//redux start
import { applyMiddleware, compose, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { NgReduxModule, NgRedux } from "@angular-redux/store";
import { createLogger } from "redux-logger";
import RootReducer from "./reducers";
//redux end

import { AppComponent } from "./app.component";

interface appState {}

const middlewares = [createLogger()];

export const store: Store<appState> = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<appState>) {
    ngRedux.provideStore(store);
    store.dispatch({ type: "test", payload: { message: "Redux is up and running" } });
  }
}
