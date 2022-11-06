import React from "react";
import { Categories, Sort, PizzaBlock } from "../components";
// import { pizzas } from "../utils/db.js";

// console.log(pizzas); // это файл который находится в ../utils/db.js, он такой же который мы получаем в <App/> при помощи fetch c папки public

function Home({ items }) {
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories
                        items={[
                            "Мясные",
                            "Вегетарианская",
                            "Гриль",
                            "Острые",
                            "Закрытые",
                        ]}
                    />
                    <Sort
                        popupItems={[
                            { name: "популярности", type: "popular" },
                            { name: "цене", type: "price" },
                            { name: "алфавиту", type: "alphabet" },
                        ]}
                    />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {items.map((obj) => (
                        <PizzaBlock key={obj.id} {...obj} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
