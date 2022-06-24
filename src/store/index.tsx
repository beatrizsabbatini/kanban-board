import { configureStore } from '@reduxjs/toolkit'

import columnsReducer from './slices/columns.slice';
import cardsReducer from './slices/cards.slice';

const store = configureStore({
  reducer: {
    columns: columnsReducer,
    cards: cardsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
