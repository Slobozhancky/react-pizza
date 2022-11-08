export const setSortBy = (sortValue) => {
    return {
        type: "SET_SORT_BY",
        payload: sortValue,
    };
};

export const setCategory = (category) => {
    return {
        type: "SET_CATEGORY",
        payload: category,
    };
};

