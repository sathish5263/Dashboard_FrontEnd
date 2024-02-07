import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    orders: 0,
    inventory: 0,
    customers: 0,
    revenue: 0,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setOrders: (state, action) => {
            state.orders = action.payload;
        },
        setInventory: (state, action) => {
            state.inventory = action.payload;
        },
        setCustomers: (state, action) => {
            state.customers = action.payload;
        },
        setRevenue: (state, action) => {
            state.revenue = action.payload;
        },
    }
})

export const { setOrders, setInventory, setCustomers, setRevenue } = appSlice.actions;
export default appSlice.reducer;