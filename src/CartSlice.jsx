import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    itemCount: 0,
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
        state.itemCount++;
        console.log(state.items);
    },
    removeItem: (state, action) => {
        const { name, image, cost } = action.payload;
        let idx = state.items.findIndex(x=>x.name===name);
        state.items.splice(idx,1);
        state.itemCount = state.items.reduce((total,item)=>total+item.quantity,0);
        console.log(state.itemCount);
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
        state.itemCount = state.items.reduce((total,item)=>total+item.quantity,0);
        console.log(state.itemCount);
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
