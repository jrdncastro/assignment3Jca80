import React, { useState, useEffect } from "react"
import { getInventory, addItem } from "../../Services/ItemService"
import Cart from '../Cart/Cart'

function Inventory() {

    const [inventory, setInventory] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [action, setAction] = useState("add");
    const [cart, setCart] = useState([]);

    //const { onAdd } = props;

    useEffect(() => {
        refreshPage()
        //add()
     }, [])
 
     function refreshPage() {
         getInventory()
             .then(json => {
                 setInventory(json);
                 setLoading(false);
             })
             .catch(err => {
                console.error(err)
                setError(err)
            });
     }

    //  function add() {
    //     addItem()
    //     .then(json => {
    //         setCart(json);
    //         addToCart();
    //     })
    //  }

    //  async function addToCart(e) {
    //     console.log("Adding...")
    //     await addItem(newItem)
       // refreshPage();
    //}
    
    const addToCart = (e) =>
    {
        setCart([...cart, e])
        
    }
    // function updateItem(e) {
    //     setNewItem({
    //         ...newItem,
    //         [e.target.id]: e.target.value
    //     })
    // }

     if (loading) return (<div className="alert alert-info">Loading</div>)
     if (error) return (<div className="alert alert-danger">Error</div>)

    return (
        <div>
            <h1>Assignment 3 - Jordan Castro - 300226180</h1>
            <div>
                <table className = "table" id = "table1">
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Add</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map((invent, key) => (
                            <tr key = {key}>
                                <td id = "sku">{invent.sku}</td>
                                <td id = "name">{invent.name}</td>
                                <td id = "quantity">{invent.quantity}</td>
                                <td id = "price"> ${invent.price}</td>
                                <td><button onClick = {() => addToCart(invent)} value = {invent.sku}>Add</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            { (action === "add") ?
                < Cart action={addToCart}  /> :
                < Inventory action={addToCart}  />
                } 
        </div>
    )
}
export default Inventory;
