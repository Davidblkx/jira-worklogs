import { ActionReducerMap } from '@ngrx/store';

import { MainStateCollection } from '../models/main.state';
import * as fromMain from './main.reducer';

export interface AppState {
  profiles: MainStateCollection;
}

export const reducers: ActionReducerMap<AppState, any> = {
  profiles: fromMain.reducer,
};
