import React from "react";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
// import store from "./redux/store";
import { setPizzas } from "./redux/actions/pizzas";
class App extends React.Component {
    componentDidMount() {
        axios("http://localhost:3000/react-pizza/bd.json").then(({ data }) => {
           this.props.setPizzas(data.pizzas);
        });
    }

    render() {
        console.log(this.props);
        return (
            <div className="wrapper">
                <Header />
                <Routes>
                    <Route
                        path="/react-pizza"
                        element={<Home items={this.props.items} />}
                    />
                    <Route path="cart" element={<Cart />} />
                </Routes>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items,
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPizzas: (items) => {
            dispatch(setPizzas(items));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
