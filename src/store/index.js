import { configureStore, createSlice } from '@reduxjs/toolkit';

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
const initialAuthState = { isAuthenticated : false};
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) { state.isAuthenticated = true; },
        logout(state) { state.isAuthenticated = false; }
    }
});

const store = configureStore({
    reducer : { counter: counterSlice.reducer, auth: authSlice.reducer}
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;