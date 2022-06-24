import { createSlice } from "@reduxjs/toolkit";

import mockCards from "../../data/cards";
import ICard from "../../interfaces/ICard";
import ICategory from "../../interfaces/ICategory";

interface CardsSliceState {
  cards: ICard[],
}

const initialState: CardsSliceState = {
  cards: mockCards,
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
      const searchText = action.payload.searchText || '';
      const categories = action.payload.categories || Object.values(ICategory);

      console.log("categories: ", categories)

      const filteredCards = [...state.cards]
        .map(card => {
            if (searchText.length > 0){
              if (card.title.toUpperCase()
                .includes(searchText.toUpperCase()) && categories
                .includes(card.category)
                ) return {...card, hidden: false}
            } else {
              if (categories.includes(card.category)) return {...card, hidden: false}
            }
            return {...card, hidden: true}
          }
        );

      state.cards = filteredCards;
    },
    clearFilters: (state) => {
      const clearedFiltersCards = state.cards.map(card => ({
        ...card,
        hidden: false
      }))

      state.cards = clearedFiltersCards;
    }
  }
})

export const { setCards, updateOneCard, filterCards, clearFilters } = cardsSlice.actions;

export default cardsSlice.reducer;