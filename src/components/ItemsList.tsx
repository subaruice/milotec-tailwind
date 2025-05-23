import React from "react";
import { Item } from "../types/types";
import Slider from "./Slider";
import ItemFromList from "./ItemFromList";

interface ItemsProps {
    items: Item[];
}

const ItemsList:React.FC<ItemsProps> = React.memo(({ items }) => {    
    return (
        <div className="flex flex-col gap-3" >
            <Slider/>
            <div className=" flex justify-between items-stretch gap-3 flex-wrap ">
                {items && (items.map((item) => (
                    <ItemFromList item={item} key={item.id} />)
                ))}
            </div>
        </div>
    );
});

export default ItemsList;
