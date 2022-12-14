let defaultState = {
    sortBy: "popular",
    category: 0,
};

const filters = (state = defaultState, action) => {
    if (action.type === "SET_SORT_BY") {
        return {
            ...state,
            sortBy: action.payload,
        };
    }
    if (action.type === "SET_CATEGORY") {
        return {
            ...state,
            category: action.payload,
        };
    }
    return state;
};

export default filters;
