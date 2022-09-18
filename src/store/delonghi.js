import { createSlice } from '@reduxjs/toolkit';

/*****************************************************
 * State
 ****************************************************/

const initialState = {
  roomProducts: [],
  isAccordionListOpen: true,
  isPriceContainerOpen: true,
};

const { actions, reducer } = createSlice({
  name: 'delonghi',
  initialState,
  reducers: {
    setRoomProducts: (state, action) => {
      state.roomProducts = action.payload;
    },
    setIsAccordionListOpen: (state, action) => {
      state.isAccordionListOpen = action.payload;
    },
    setIsPriceContainerOpen: (state, action) => {
      state.isPriceContainerOpen = action.payload;
    },
  },
});

/*****************************************************
 * Actions
 ****************************************************/

//  Actions to be used only internally
const {} = actions;

//  Actions to be used only internally and externally
export const {
  setRoomProducts,
  setIsAccordionListOpen,
  setIsPriceContainerOpen,
} = actions;

/*****************************************************
 * Standard Selectors
 ****************************************************/

//  Loading Trackers

export const getRoomProducts = (state) => state.iconHealth.roomProducts;

export const getIsAccordionListOpen = (state) =>
  state.iconHealth.isAccordionListOpen;

export const getIsPriceContainerOpen = (state) =>
  state.iconHealth.isPriceContainerOpen;

/*****************************************************
 * Complex Selectors
 ****************************************************/

//  Attributes

/*****************************************************
 * Complex Actions
 ****************************************************/

export default reducer;
