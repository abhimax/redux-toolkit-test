import {createStore} from 'redux';
const CounterReducer = (state={count: 0, showCount: true}, action) => {
    if(action.type === "increment"){
        return { count: state.count + 1, showCount: state.showCount}
    }
    if(action.type === "decrement"){
        return { count: state.count - 1, showCount: state.showCount}
    }
    if(action.type === "increaseFrom"){
        return { count: state.count + action.amount, showCount: state.showCount}
    }
    if(action.type === "toggle"){
        return { count: state.count, showCount: !state.showCount}
    }
    return state;
}
const store = createStore(CounterReducer);

export default store;