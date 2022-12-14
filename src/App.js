import React from "react";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchPizzas } from "./redux/actions/pizzas";

const App = () => {
    let dispatch = useDispatch();

    React.useEffect(() => {
        fetchPizzas(dispatch);
    });

    // React.useEffect(() => {
    //     axios("http://localhost:3000/react-pizza").then(({ data }) => {
    //         dispatch(setPizzas(data.pizzas));
    //     });
    // });

    return (
        <div className="wrapper">
            <Header />
            <Routes>
                <Route path="/react-pizza" element={<Home />} />
                <Route path="cart" element={<Cart />} />
            </Routes>
        </div>
    );
};

export default App;

// class App extends React.Component {
//     componentDidMount() {

//     }

//     render() {
//         console.log(this.props);
//         return (
//             <div className="wrapper">
//                 <Header />
//                 <Routes>
//                     <Route
//                         path="/react-pizza"
//                         element={<Home items={this.props.items} />}
//                     />
//                     <Route path="cart" element={<Cart />} />
//                 </Routes>
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         items: state.pizzas.items,
//         filters: state.filters,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setPizzas: (items) => {
//             dispatch(setPizzas(items));
//         },
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
