import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(x=>x.name===name);
        if ( existingItem ) {
            existingItem.quantity++;
        }
        else
        {
            state.items.push({name,image,cost,quantity:1})
        }
    },
    removeItem: (state, action) => {
        const { name, image, cost } = action.payload;
        state.items = state.items.filter(x=>x.name!==name);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const existingItem = state.items.find(x=>x.name===name);
        if (existingItem){
            existingItem.quantity = quantity;
        }
        else
        {
            console.log(`Can't set quantity of {name}, item not in cart`);
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
