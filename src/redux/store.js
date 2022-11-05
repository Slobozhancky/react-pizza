import { legacy_createStore as createStore } from "redux";

function counterReducer(state = { value: 0 }, action) {
    if (action.type === "PLUS") {
        return { value: state.value + 1 };
    } else if (action.type === "MINUS") {
        return { value: state.value - 1 };
    } else {
        return state;
    }
}

const store = createStore(counterReducer);

export default store;
