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
    }

    // removeFromCart: (state, action) => {
    //   const index = state.items.findIndex(
    //     (cartItem) => cartItem.id === action.payload.id
    //   );
    //   let newCart = [...state.items];
    //   if (index >= 0) {
    //     //the item exists in order; remove it
    //     newCart.splice(index, 1); //(position, number of item to delete)
    //   } else {
    //     console.warn(
    //       `cant remove item(id: ${action.payload.id}) as its not in order`
    //     );
    //   }
    //   state.items = newCart;
    // },

    //some other actions....
  },
});

export const { addToBasket } = basketSlice.actions;

//Selectors - this is how we pull information from the global store slice
export const selectItems = (state) => state.basket.items;
// export const selectTotal = (state) =>
//   state.cart.items.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
export default basketSlice.reducer;