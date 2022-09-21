import React from 'react'
import Item from "../Item/Item";


export const ItemList = ({ productList }) => {
    return (
        <div style={{ display: "flex" }}>
            {productList.map((item) => {
                return <Item data={item} />;
            })}
        </div>
    );
}

