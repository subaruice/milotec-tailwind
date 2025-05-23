import React from "react";
import { Item } from "../types/types";

interface ItemProps {
    item: Item;
}


const ItemFromList:React.FC<ItemProps> = React.memo(({item}) => {
    console.log(item.id);
    
    return (
        <div className="flex  flex-col bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all border-stone-100 border border-solid sm:w-[32%] firsts:w-[48%] р-auto gap-2">
                <a className="flex justify-center">
                    <img
                        className="rounded-t-2xl"
                        src="https://www.milotec.net/fotky72500/fotos/gen320/gen__vyr_1367_704-09-xx_6.jpg"
                        alt=""
                    />
                </a>
            <div className="flex h-full flex-col gap-2 p-3">
                <p className="flex-grow-1">{item.title}</p>
                <p className="self-start text-gray-400 text-xs">
                    Код товара:{" "}
                    <span className="text-black font-bold ">231</span>
                </p>
                <div className="flex justify-between">
                    <p className="text-green-500 text-[13px]">В наличии</p>
                    <p className="font-bold text-sm">4 900грн</p>
                </div>
                <button className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-2 shadow-sm bg-transparent  text-stone-700 hover:text-stone-700 border-stone-500 hover:bg-transparent duration-150 hover:border-stone-600 rounded-full hover:opacity-60 hover:shadow-none">
                    В корзину
                </button>
            </div>
        </div>
    );
});

export default ItemFromList;
