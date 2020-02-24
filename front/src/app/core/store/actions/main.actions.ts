import { UnionToIntersect } from '@app/helpers/typing';
import { Action } from '@ngrx/store';

import { MainState } from '../models/main.state';

export const ACTION_MAIN_LOAD = '[MAIN] load state';
export const ACTION_MAIN_RELOAD = '[MAIN] reload state';
export const ACTION_MAIN_SAVE = '[MAIN] save state';

export class Load implements Action {
  public readonly type = ACTION_MAIN_LOAD;
  public constructor(public readonly source: string) {}
}

export class Reload implements Action {
  public readonly type = ACTION_MAIN_RELOAD;
}

export class Save implements Action {
  public readonly type = ACTION_MAIN_SAVE;
  public constructor(public readonly state: MainState) {}
}

export type Actions =
  | Load
  | Reload
  | Save
;

export type IActions = UnionToIntersect<Actions>;
