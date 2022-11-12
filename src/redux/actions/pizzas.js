import axios from "axios";

export const fetchPizzas = (dispatch) => {
    axios.get("http://localhost:3001/pizzas").then(({ data }) => {
        dispatch(setPizzas(data ? data : []))
    });
};

export const setPizzas = (pizzas) => {
    return {
        type: "SET_PIZZAS",
        payload: pizzas,
    };
};
