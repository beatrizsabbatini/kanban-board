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
    },
    updateOneCard: (state, action) => {
      const cardId = action.payload.id;

      const updatedCards = state.cards.map(card => {
        if (card.id === cardId) return action.payload;
        else return card;
      })

      state.cards = updatedCards;
    }
  }
})

export const { setCards, updateOneCard } = cardsSlice.actions;

export default cardsSlice.reducer;