import React from "react";

export default class Categories extends React.Component {
    state = {
        activeItem: 2,
    };

    onSelectItem = item => {
        this.setState({
            activeItem: item
        })
    }
    
    render() {
        const { items, onClickItem } = this.props;
        return (
            <div className="categories">
                <ul>
                    <li>Все</li>
                    {items.map((item, index) => (
                        <li
                            className={index === this.state.activeItem ? "active" : ""}
                            onClick={() => this.onSelectItem(index)}
                            key={`${item}_${index}`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

// export default function Categories({ items, onClickItem }) {
//     return (
//         <div className="categories">
//             <ul>
//                 <li className="active">Все</li>

//                 {items.map((item, index) => (
//                     <li onClick={() => onClickItem(item)} key={`${item}_${index}`}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
