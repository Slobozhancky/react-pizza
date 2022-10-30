import React from "react";

export default function Categories({ items }) {
    const [activeItem, setActiveItem] = React.useState(null);

    // items && items.map((item, index)... - эта проверка, говорит нам о том, что если items === undefined то ничего не возвращать
    // если items === true, a true может бы в случае если в массиве что-то есть, то выполнить метод .map 
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? "active" : ""}
                    onClick={() => setActiveItem(null)}
                >
                    Все
                </li>

                {items && items.map((item, index) => (
                    <li
                        className={index === activeItem ? "active" : ""}
                        onClick={() => setActiveItem(index)}
                        key={`${item}_${index}`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// **************************************************************
// Пример использования класоваго компонента с state / setState()
// **************************************************************

// export default class Categories extends React.Component {
//     state = {
//         activeItem: 2,
//     };

//     onSelectItem = (item) => {
//         this.setState({
//             activeItem: item,
//         });
//     };

//     render() {
//         const { items } = this.props;
//         return (
//             <div className="categories">
//                 <ul>
//                     <li>Все</li>
//                     {items.map((item, index) => (
//                         <li
//                             className={
//                                 index === this.state.activeItem ? "active" : ""
//                             }
//                             onClick={() => this.onSelectItem(index)}
//                             key={`${item}_${index}`}
//                         >
//                             {item}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }
