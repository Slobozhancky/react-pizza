import React from "react";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
    let [pizzas, setPizzas] = React.useState([]);

    React.useEffect(() => {
        axios("http://localhost:3000/react-pizza/bd.json").then(({data}) => {
            return setPizzas(data.pizzas);
        });
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <Routes>
                <Route path="/react-pizza" element={<Home items={pizzas} />} />
                <Route path="cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
