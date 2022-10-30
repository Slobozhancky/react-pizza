import React from "react";

export default function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = React.useState(null);

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? "active" : ""}
                    onClick={() => setActiveItem(null)}
                >
                    Все
                </li>

                {items.map((item, index) => (
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
