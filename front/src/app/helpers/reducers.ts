import { Type } from '@angular/core';
import { Action } from '@ngrx/store';

type Reducer<S, A extends Action> = (state: S | undefined, action: A) => S;
type ReducerCase<S, A extends Action> =
  [string, (state: S, action: A) => S]
  | [string, (state: S) => S];

export function createReducer<S, A extends Action>(
  initialState: S,
  ...cases: ReducerCase<S, A>[]
): Reducer<S, A> {
  return (state: S = initialState, action: A) => {
    const reducer = cases.find(e => e[0] === action.type);
    return (reducer && reducer[1]) ?
      reducer[1](state, action) : state;
  };
}

export function on<S, A extends Action>(
  type: Type<A>,
  reducer: (state: S, action: A) => S,
): ReducerCase<S, A> {
  const name = (new type()).type;
  return [name, reducer];
}
