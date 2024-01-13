import React, { useState } from "react";
import './App.css';
import { MenuProps, OrderMenu } from "./Components/type";
import HamburgerImage from "./assets/Hamburger.png";
import CheeseBurgerImage from "./assets/CheeseBurger.png";
import FriesImage from "./assets/Fries.png";
import CoffeeImage from "./assets/Coffee.png";
import TeaImage from "./assets/Tea.png";
import ColaImage from "./assets/Cola.png";

function App() {
  const ITEMS: OrderMenu[] = [
    { name: 'Hamburger', price: 80, count: 0, image: HamburgerImage },
    { name: 'CheeseBurger', price: 90, count: 0, image: CheeseBurgerImage },
    { name: 'Fries', price: 45, count: 0, image: FriesImage },
    { name: 'Coffee', price: 70, count: 0, image: CoffeeImage },
    { name: 'Tea', price: 50, count: 0, image: TeaImage },
    { name: 'Cola', price: 40, count: 0, image: ColaImage },
  ];

  const MenuItems: React.FC<MenuProps> = ({ name, price, image, count, onAdd, onDelete }) => {
    return (
        <div>
          <img src={image} alt={name} />
          <p>{name}</p>
          <p>Price: {price} KGS</p>
          <p>Count: {count}</p>
          <button onClick={onAdd}>Add</button>
          <button onClick={onDelete}>Delete</button>
        </div>
    );
  };

  const App: React.FC = () => {
    const [Items, setItems] = useState<OrderMenu[]>(ITEMS);

    const AddItem = (index: number) => {
      const addedItems = [...Items];
      addedItems[index].count++;
      setItems(addedItems);
    };

    const DeleteItem = (index: number) => {
      const deletedItems = [...Items];
      deletedItems[index].count = Math.max(0, deletedItems[index].count - 1);
      setItems(deletedItems);
    };

    const TotalPrice = () => {
      return Items.reduce((total, item) => {
        return total + item.count * item.price;
      }, 0);
    };

    return (
        <div className="coffee-container">
          <div className="Items-list">
            {Items.map((item, index) => (
                <MenuItems
                    key={index}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    count={item.count}
                    onAdd={() => AddItem(index)}
                    onDelete={() => DeleteItem(index)}
                />
            ))}
          </div>
          <div className="order-detals">
            <h2>Order Details</h2>
            <p>Total Price: {TotalPrice()} KGS</p>
          </div>
        </div>
    );
  };

  return <App />;
}

export default App;
