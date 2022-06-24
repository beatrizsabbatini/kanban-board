import { createSlice } from "@reduxjs/toolkit";

import mockCards from "../../data/cards";
import ICard from "../../interfaces/ICard";

interface CardsSliceState {
  cards: ICard[],
  filteredCards: ICard[] | undefined
}

const initialState: CardsSliceState = {
  cards: mockCards,
  filteredCards: undefined
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload
    },
    updateOneCard: (state, action) => {
      const cardId = action.payload.id;

      const updatedCards = state.cards.map(card => {
        if (card.id === cardId) return action.payload;
        else return card;
      })

      state.cards = updatedCards;
    },
    filterCards: (state, action) => {
      const searchText = action.payload;

      const filteredCards = [...state.cards]
      .filter(card => card.title.toUpperCase()
      .includes(searchText.toUpperCase()));

      state.filteredCards = filteredCards;
    }
  }
})

export const { setCards, updateOneCard, filterCards } = cardsSlice.actions;

export default cardsSlice.reducer;