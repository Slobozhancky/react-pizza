const defaultState = {
    items: [],
    isLoaded: false
};

const pizzas = (state = defaultState, action) => {
    if (action.type === "SET_PIZZAS") {
        return {
            ...state,
            items: action.payload,
        };
    }

    return state;
};

export default pizzas;
