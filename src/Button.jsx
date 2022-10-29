import React from "react";
import className from "classnames";

export default function Button(props) {
    return (
        <button
            className={className("button", {
                "button--outline": props.outline,
            })}
        >
            {props.children}
        </button>
    );
}
