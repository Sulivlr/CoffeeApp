
const AddItem = (index: number) => {
    const addedItems = [...items];
    addedItems[index].count++;
    setItems(addedItems);
}