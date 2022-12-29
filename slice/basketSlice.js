import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id);


      let newItems = [...state.items];

      if (index >= 0) {
        newItems.splice(index, 1);
      } else {
        console.warn(
          `cant remove item(id: ${action.payload.id}) as its not in order`
        );
      }

      state.items = newItems;
    }


  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

//Selectors - this is how we pull information from the global store slice
export const selectItems = (state) => state.basket.items;
// export const selectTotal = (state) =>
//   state.cart.items.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0);
export default basketSlice.reducer;