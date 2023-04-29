import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.20;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <div>
            <h2>Cart Items</h2>
            <Box>
                {cartItems.length === 0 && <div>Cart Is Empty</div>}
            </Box>
            {cartItems.map((item) => (
                <Grid container key={item.id} alignItems="center" spacing={2}>
                    <Grid item xs={6}>
                        <div>{item.name}</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                            <button onClick={() => onAdd(item)}>+</button>
                            <button onClick={() => onRemove(item)}>-</button>
                        </div>
                        <div>
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>
                    </Grid>
                </Grid>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr />
                    <Box>
                        <Grid container alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <div>Item Price</div>
                            </Grid>
                            <Grid item xs={6}>
                                <div>${itemsPrice.toFixed(2)}</div>
                            </Grid>
                            <Grid item xs={6}>
                                <div>Tax Price</div>
                            </Grid>
                            <Grid item xs={6}>
                                <div>${taxPrice.toFixed(2)}</div>
                            </Grid>
                            <Grid item xs={6}>
                                <div>Shipping Price</div>
                            </Grid>
                            <Grid item xs={6}>
                                <div>${shippingPrice.toFixed(2)}</div>
                            </Grid>
                            <Grid item xs={6}>
                                <div><strong>Total Price</strong></div>
                            </Grid>
                            <Grid item xs={6}>
                                <div><strong>${totalPrice.toFixed(2)}</strong></div>
                            </Grid>
                        </Grid>
                    </Box>
                </>
            )}
        </div>
    );
}



// import React from "react";
//
// export default  function Basket (props) {
//     const {cartItems, onAdd, onRemove} = props;
//     const itemsPrice = cartItems.reduce((a, c)=> a+c.price* c.qty, 0 );
//     const taxPrice = itemsPrice * 0.20;
//     const shippingPrice = itemsPrice > 2000? 0 : 50;
//     const totalPrice = itemsPrice +taxPrice + shippingPrice;
//
//     return(
//         <div>
//         <h2>Cart Items</h2>
//         {/*//Create "<div>" for conditional rendering*/}
//         <div>
//             {cartItems.length === 0 && <div>Cart Is Empty </div> }
//         </div>
//         {cartItems.map((item) =>(
//             <div key={item.id} >
//                 <div >{item.name}</div>
//                 <div>
//                     <button onClick={()=>onAdd(item)} >+</button>
//                     <button onClick={()=>onRemove(item)} >-</button>
//                 </div>
//                 <div >
//                     {item.qty} x ${item.price.toFixed(2)}
//                 </div>
//             </div>
//         ))}
//         {/*When added new consts (itemsPrice, taxPrice, shippingPrice, totalPrice) create conditional rendering*/}
//         {cartItems.length !== 0 && (
//             <>
//                 <hr></hr>
//                 <div>
//                     <div >Item Price</div>
//                     <div >${itemsPrice.toFixed(2)}</div>
//                 </div>
//                 <div>
//                     <div>Tax Price</div>
//                     <div>${taxPrice.toFixed(2)}</div>
//                 </div>
//                 <div>
//                     <div>Shipping Price</div>
//                     <div>${shippingPrice.toFixed(2)}</div>
//                 </div>
//                 <div>
//                     <div><strong>Total Price</strong></div>
//                     <div><strong>${totalPrice.toFixed(2)}</strong></div>
//                 </div>
//             </>
//         )}
//     </div>
//
//     );
// }
