import './App.css';
import Inventory from './Components/Inventory/Inventory'
import Cart from './Components/Cart/Cart'
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (inventory) => {
    const exist = cartItems.find(x => x.id === inventory.id);
    if(exist) {
      setCartItems(cartItems.map(x => x.id === inventory.id ?
         {...exist, quantity: exist.quantity + 1} : x));
    } else {
      setCartItems([...cartItems, {...inventory, quantity: 1 }]);
    }
  }

  return (
    <div className="App">
      <Inventory />
    </div>
  );
}

export default App;
