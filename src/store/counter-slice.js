import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {count: 0, showCount: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state){
            state.count++;
        },
        decrement(state){
            state.count--;
        },
        increaseFrom(state, action){
            state.count = state.count + action.payload;
        },
        toggle(state){
            state.showCount = !state.showCount;
        }
    }
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;