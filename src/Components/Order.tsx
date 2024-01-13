import {OrderDetails} from "./type";
import HamburgerImage from "../assets/Hamburger.png"
import CheeseBurgerImage from "../assets/CheeseBurger.png"
import FriesImage from "../assets/Fries.png"
import CoffeeImage from "../assets/Coffee.png"
import TeaImage from "../assets/Tea.png"
import ColaImage from "../assets/Cola.png"


const Orders: OrderDetails[] = [
    {name: 'Hamburger', price: 80, count: 0, image: HamburgerImage},
    {name: 'CheeseBurger', price: 90, count: 0, image: CheeseBurgerImage},
    {name: 'Fries', price: 45, count: 0, image: FriesImage},
    {name: 'Coffee', price: 70, count: 0, image: CoffeeImage},
    {name: 'Tea', price: 50, count: 0, image: TeaImage},
    {name: 'Cola', price: 40, count: 0, image: ColaImage},
]

