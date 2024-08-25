import React from "react";
import {products} from "./ProductData";

import "./style.css";
import CardCounter from "../CardComponent/CardCounter";

function Products() {
    return (
        <div key={products.id} className="product" >
            <h2>{products.name}</h2>
            <p>Price: ${products.price}</p>
            <CardCounter />
        </div>
);
}

export default Products;