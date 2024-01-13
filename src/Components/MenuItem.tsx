import {MenuProps, OrderMenu} from "./type";
import HamburgerImage from "../assets/Hamburger.png"
import CheeseBurgerImage from "../assets/CheeseBurger.png"
import FriesImage from "../assets/Fries.png"
import CoffeeImage from "../assets/Coffee.png"
import TeaImage from "../assets/Tea.png"
import ColaImage from "../assets/Cola.png"
import {useState} from "react";


const ITEMS: OrderMenu[] = [
    {name: 'Hamburger', price: 80, count: 0, image: HamburgerImage},
    {name: 'CheeseBurger', price: 90, count: 0, image: CheeseBurgerImage},
    {name: 'Fries', price: 45, count: 0, image: FriesImage},
    {name: 'Coffee', price: 70, count: 0, image: CoffeeImage},
    {name: 'Tea', price: 50, count: 0, image: TeaImage},
    {name: 'Cola', price: 40, count: 0, image: ColaImage},
]

const MenuItems: React.FC = () => {
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
    }

}

const CoffeeItems: React.FC<MenuProps> = ({name, price, image, count, onAdd, onDelete}) => {
    return (
        <div >

        </div>
    )
}
