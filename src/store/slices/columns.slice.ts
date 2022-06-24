import { createSlice } from "@reduxjs/toolkit";

import mockColumns from "../../data/columns";
import IColumn from "../../interfaces/IColumn";

interface ColumnsSliceState {
  columns: IColumn[]
}

const initialState: ColumnsSliceState = {
  columns: mockColumns,
}

export const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    setColumns: (state, action) => {
      state.columns = action.payload;
     },
  }
})

export const { setColumns } = columnsSlice.actions;

export default columnsSlice.reducer;