import React, { useState, useEffect } from "react"
import { getCart } from "../../Services/ItemService"
import Inventory from "../Inventory/Inventory"

function Cart() {

    //const { cartItems, onAdd, onRemove } = props;
    const [cart, setCart] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [action, setAction] = useState("add");
    // const [newItem, setNewItem] = useState();

    useEffect(() => {
        refreshPage()
     }, [])
 
     function refreshPage() {
         getCart()
             .then(json => {
                 setCart(json);
                 setLoading(false);
             })
             .catch(err => {
                console.error(err)
                setError(err)
            });
     }

     if (loading) return (<div className="alert alert-info">Loading</div>)
     if (error) return (<div className="alert alert-danger">Error</div>)

    return (
        <div>
            <table className = "table" id = "table2">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                    <tr key = {item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price}</td>
                        <td><button>Delete</button></td>
                    </tr>))}
                    <tr>
                        <td><button>Checkout</button></td>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Cart;