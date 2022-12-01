import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {count: 0, showCount: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
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

const store = configureStore({
    reducer : counterSlice.reducer
});
export const counterActions = counterSlice.actions;
export default store;