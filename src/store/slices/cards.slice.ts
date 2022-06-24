import { createSlice } from "@reduxjs/toolkit";

import mockCards from "../../data/cards";
import ICard from "../../interfaces/ICard";

interface CardsSliceState {
  cards: ICard[],
  // isDragging: boolean
}

const initialState: CardsSliceState = {
  cards: mockCards,
  // isDragging: false
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    // setIsDragging: (state, action) => state.isDragging = action.payload,
    setCards: (state, action) => {
      state.cards = action.payload
      // state.isDragging = false
    }
  }
})

export const { setCards } = cardsSlice.actions;

export default cardsSlice.reducer;