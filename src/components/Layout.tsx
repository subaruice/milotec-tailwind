import { useLocation, Outlet } from "react-router-dom";
import Header from "./header/Header";
import Search from "./Search";
import Sidebar from "./sidebar/Sidebar";
import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Item } from "../types/item";
import PostService from "../API/PostService";
import useDebounce from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";

const Layout = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isDesktop = useMediaQuery({ minWidth: 768 });

    const [fetch, isLoading, error] = useFetch(async () => {
        const response = await PostService.GetAll();
        setItems(response.data);
    });

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className="p-2.5 w-full h-full ">
            <Header />
            {isDesktop && isHomePage && (
                <Search
                    setSearchValue={setSearchValue}
                    searchValue={searchValue}
                />
            )}
            <div className="flex justify-center gap-3">
                <div className="hidden md:block">
                    <Sidebar />
                </div>
                <Outlet
                    context={{ items, setItems, searchValue, isLoading, error }}
                />
            </div>
        </div>
    );
};

export default Layout;
