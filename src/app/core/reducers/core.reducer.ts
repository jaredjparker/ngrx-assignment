import { createReducer, on } from '@ngrx/store';
import { setUsername, reset } from '../actions/core.actions';

const initialState = {
    username: 'No',
    currentDate: new Date()
};

const reducer = createReducer(initialState,
    on(setUsername, state => ({
        ...state,
        username: 'Jared Parker'
    })),
    on(reset, state => initialState)
);

export function coreReducer(state, action) {
    return reducer(state, action);
}
