import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Navbar_ from "../components/Navbar_";
import Main from "../components/Main";
import data from "../components/data";
import {useState} from "react";
import Basket from "../components/Basket";
import Typography from "@mui/material/Typography";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#908787',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '20px',
    width: '500px',
    margin:'auto', // center
}));


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


                    <Item style={{marginTop: '30px',}} elevation={3}> {/* Wrap Basket component with Paper */}
                        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
                    </Item>

            </main>

    </div>



    );

}
export default Shop