export interface MenuProps {
    name: string;
    price: number;
    image: string;
    count: number;
    onAdd: () => void;
    onDelete: () => void;
}

export interface OrderMenu {
    name: string;
    price: number;
    image: string;
    count: number;
}