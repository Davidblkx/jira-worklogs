import { of } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { JiraWorklogsService } from '../../jira';
import * as mainActions from '../actions/main.actions';
import { AppState } from '../reducers';

@Injectable()
export class MainEffects {

  triggerSave$ = createEffect(() => this._actions$.pipe(
    ofType(mainActions.ACTION_MAIN_LOAD),
    withLatestFrom(this._store$, (_, s) => s.profiles),
    switchMap(p => p.default ?
        of(new mainActions.Save(p.default))
        : of({type: 'default not found'}))
  ));

  constructor(
    private readonly _actions$: Actions<mainActions.Actions>,
    private readonly _store$: Store<AppState>,
    private readonly _jiraWorklogs: JiraWorklogsService,
  ) {}

}
