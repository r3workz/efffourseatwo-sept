import React from "react";

import PlaceholderImage from "../assets/grge.png";

const gridItem = {
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
};
const imageStyle = {
    width: "12.68081rem",
    height: "18.701rem",
    objectFit: "cover",
    borderRadius: "0.3125rem",
    boxShadow: "0px 7px 4px 0px rgba(110, 110, 110, 0.25)",
};

export default function BookGridItem({ itemData }) {
    // console.log(itemData);
    return (
        <div style={gridItem} key={itemData.id}>
            <img
                style={imageStyle}
                src={
                    itemData.volumeInfo.imageLinks
                        ? itemData.volumeInfo.imageLinks.thumbnail
                        : PlaceholderImage
                }
                alt={itemData.volumeInfo.title}
            />
        </div>
    );
}
