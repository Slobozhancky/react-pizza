import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import ContentLoader from "react-content-loader";
function PizzaBlock({ name, price, imageUrl, types, sizes }) {
    // Тут мы вписываем все возможные размеры и типы,  а уже в рендер будет происходить с
    // учетом тех данных которые будет переданы с database
    const availableTypes = ["тонкое", "класическое"];
    const availableSizes = [26, 30, 40];

    // Почему type[0] передаем в useState ? Причина тому то что, types может состоять только из 1го элемента
    const [activeType, setActiveType] = React.useState(types[0]);
    const [activeSize, setActiveSize] = React.useState(sizes[0]);

    function changeType(index) {
        setActiveType(index);
    }

    function changeSize(index) {
        setActiveSize(index);
    }

    return (
        <ContentLoader
            speed={2}
            width={280}
            height={500}
            viewBox="0 0 280 500"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="144" cy="147" r="130" />
            <rect x="2" y="338" rx="0" ry="0" width="280" height="84" />
            <rect x="3" y="438" rx="0" ry="0" width="94" height="44" />
            <rect x="130" y="437" rx="25" ry="25" width="151" height="44" />
            <rect x="1" y="297" rx="0" ry="0" width="280" height="24" />
        </ContentLoader>
    );

    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {availableTypes.map((type, index) => (
                        <li
                            key={type}
                            className={classNames({
                                active: activeType === index,
                                disabled: !types.includes(index),
                            })}
                            onClick={() => changeType(index)}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
                <ul>
                    {availableSizes.map((size, index) => (
                        <li
                            key={size}
                            className={classNames({
                                active: activeSize === size,
                                disabled: !sizes.includes(size),
                            })}
                            onClick={() => changeSize(size)}
                        >
                            {size + "см."}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">від {price} ₴</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    );
}

PizzaBlock.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

PizzaBlock.defaultProps = {
    sizes: [],
};

export default PizzaBlock;
