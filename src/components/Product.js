import React from "react";
import Button from "@mui/material/Button";

export default function Product(props) {
    const {product, onAdd} = props;
    return(
        <div>

        <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <Button onClick={() => onAdd(product)} variant='outlined' >Add To Cart</Button>
            </div>
        </div>
    )
}

