import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  status: "all",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter: {
      reducer(state, action) {
        return {
          ...state,
          status: action.payload,
        };
      },
      prepare(value) {
        return { payload: value };
      },
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer