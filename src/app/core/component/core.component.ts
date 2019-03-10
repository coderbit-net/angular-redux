import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { appState } from '../core.state';
import {
  featureOne,
  FEATURE_ONE_TRIGGERED
} from 'src/app/modules/feature-one/feature-one.types';

@Component({
  selector: 'app-root',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class AppComponent {
  @select('featureOne') featureOne$: Observable<featureOne>;

  constructor(private ngRedux: NgRedux<appState>) {
    this.featureOne$.subscribe(featureOne => {
      this.featureOne = featureOne;

      this.clickedState = `${featureOne.clicked}`;
    });
  }

  featureOne: featureOne;
  clickedState: string;
  title: string = 'angular-redux';

  testReduxAction() {
    this.ngRedux.dispatch({
      type: FEATURE_ONE_TRIGGERED
    });
  }
}
