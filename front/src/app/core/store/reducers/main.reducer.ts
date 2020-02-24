import { createReducer, on } from '@helpers/reducers';

import * as mainActions from '../actions/main.actions';
import { MainStateCollection } from '../models/main.state';

export const reducer = createReducer<MainStateCollection, mainActions.IActions>(
  {} as MainStateCollection,
  on(mainActions.Load, (s, a) => ({...s, default: JSON.parse(a.source)})),
);
