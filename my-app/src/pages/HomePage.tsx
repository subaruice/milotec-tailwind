import { useEffect, useMemo, useState } from "react";
import ItemsList from "../components/ItemsList";
import Header from "../components/header/Header";
import { useFetch } from "../hooks/useFetch";
import PostService from "../API/PostService";
import Loader from "./../UI/Loader";
import { Item } from "../types/types";
import Error from "./../UI/Error";
import Search from "./../components/Search";
import useDebounce from "../hooks/useDebounce";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const debounceSearch = useDebounce(searchValue, 500);

    const [fetch, isLoading, error] = useFetch(async () => {
        const response = await PostService.GetAll();
        setItems(response.data);
    });

    const filtredSearch = useMemo(() => {
        return items.filter((item) =>
            item.title.toLowerCase().includes(debounceSearch)
        );
    }, [items, debounceSearch]);

    useEffect(() => {
        fetch();
    }, []);

    if (error) {
        return (
            <Error
                errorMessage={typeof error === "string" ? error : undefined}
            />
        );
    }
    
    

    return (
        <div className="p-2.5 w-full h-full ">
            <Header />
            <Search setSearchValue={setSearchValue} searchValue={searchValue} />
            <div className="flex justify-center gap-3">
                <div className="hidden md:block">
                    <Sidebar items={items}/>
                </div>
                {isLoading ? <Loader /> : <ItemsList items={filtredSearch} />}
            </div>
        </div>
    );
};

export default HomePage;
