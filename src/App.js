import React from "react";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
    let [pizzas, setPizzas] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:3000/react-pizza/bd.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPizzas(data.pizzas);
            });
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <Routes>
                <Route path="/react-pizza" element={<Home pizzas={pizzas} />} />
                <Route path="cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
