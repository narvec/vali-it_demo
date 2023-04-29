import React from "react";
import Product from "./Product";
import Grid from "@mui/material/Grid";
import {Container} from "@mui/material";
export default function Main(props) {
    const { products, onAdd } = props;
    return (

            <Container
                maxWidth="lg"
                sx={{
                    borderRadius: "20px",
                    backgroundColor: "rgba(0, 128, 0, 0.5)",
                    p: 2,
                }}
            >
            <h2>Products</h2>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4}>
                        <Product product={product} onAdd={onAdd} />
                    </Grid>
                ))}
            </Grid>
            </Container>

    );
}
