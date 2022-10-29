import React from "react";
import className from "classnames";

export default function Button({
    onClick,
    outline,
    classButtonCart,
    children,
}) {
    return (
        <button
            onClick={onClick}
            className={className("button", classButtonCart, {
                "button--outline": outline,
            })}
        >
            {children}
        </button>
    );
}
