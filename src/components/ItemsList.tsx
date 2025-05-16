import ItemFromList from "./ItemFromList";
import { ItemsProps } from "../types/types";
import Slider from "./Slider";

const ItemsList = ({ items }: ItemsProps) => {
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
};

export default ItemsList;
