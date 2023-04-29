import * as React from 'react';
import Paper from '@mui/material/Paper';
import Navbar_ from "../components/Navbar_";
import Main from "../components/Main";
import data from "../components/data";
import {useState} from "react";
import Basket from "../components/Basket";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";


 function Shop() {
     const {products} = data;
     const [cartItems, setCartItems] =useState([])
     const onAdd = (product) => {
         const exist = cartItems.find((x) => x.id === product.id);
         if (exist) {
             setCartItems(
                 cartItems.map((x) =>
                     x.id === product.id ? {...exist, qty: exist.qty +1} : x
                 )
             );
         } else {
             setCartItems([...cartItems, {...product, qty:1}]);
         }
     }
     const onRemove =(product) =>{
         const exist = cartItems.find((x)=>x.id === product.id);
         if (exist.qty ===1 ) {
             setCartItems(cartItems.filter((x)=> x.id !== product.id))
         } else {
             setCartItems(
                 cartItems.map((x) =>
                     x.id === product.id ? {...exist, qty: exist.qty - 1} : x
                 )
             );
         }
     };


    return (
    <div className="App">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <Navbar_></Navbar_>
        <header className="App-header">
            <Typography variant="h4" >Small Shopping Cart</Typography>
        </header>
            <main style={{
                backgroundColor: 'rgba(229,213,167,0.8)',
                paddingTop: '30px',
                minHeight: '50hv'}}>
                    <Main onAdd={onAdd} products={products}></Main>
                <Grid container justifyContent="center" style={{ marginTop: '30px' }}>
                    <Grid item xs={12} sm={8} md={6}>
                        <Paper elevation={3} style={{
                            padding: '20px',
                            borderRadius: '20px',
                            textAlign: 'center'
                        }}>
                            <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
                        </Paper>
                    </Grid>
                </Grid>

                    {/*<Item style={{marginTop: '30px',}} elevation={3}> /!* Wrap Basket component with Paper *!/*/}
                    {/*    <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>*/}
                    {/*</Item>*/}

            </main>

    </div>



    );

}
export default Shop