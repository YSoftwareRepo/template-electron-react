import { createSlice } from '@reduxjs/toolkit';

import { ClientAreaSize } from '#shared/ClientAreaSize.types';
import type { IReducer, IMapActionsToProps } from '#RendererTypes';

interface AppState {
    clientAreaSize: ClientAreaSize;
}

const initialState: AppState = {
    clientAreaSize: { width: 1280, height: 720 },
};

// ---------------------------------------------------------------------------------------- Reducers

type ReducerFunc<Payload = undefined> = IReducer<AppState, Payload>;

const updateClientAreaSize: ReducerFunc<ClientAreaSize> = (state, action) => {
    state.clientAreaSize = action.payload;
};

// ------------------------------------------------------------------------------------------- Slice

const slice = createSlice({
    name: 'Slice_MainWindow',
    initialState,
    reducers: {
        updateClientAreaSize,
    },
});

export const Actions = slice.actions;
export const Reducer = slice.reducer;

export type MapActionsToProps = IMapActionsToProps<typeof Actions>;
