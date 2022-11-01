import React from "react";
import { Categories, Sort, PizzaBlock } from "../components";

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
                    <Sort popupItems={["популярности", "цене", "алфавиту"]} />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {items.map((obj) => (
                        <PizzaBlock key={obj.key} {...obj} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
