import { useMemo } from "react";
import ItemsList from "../components/ItemsList";
import Loader from "./../UI/Loader";
import { LayoutContext } from "../types/types";
import Error from "./../UI/Error";
import useDebounce from "../hooks/useDebounce";
import { useOutletContext } from "react-router-dom";

const HomePage = () => {
    const context = useOutletContext<LayoutContext>();
    if (!context) return <div>Loading...</div>;
    const debounceSearch = useDebounce(context.searchValue, 500);

    const filtredSearch = useMemo(() => {
        return context.items.filter((item) => item.title.toLowerCase().includes(debounceSearch));
    }, [context.items, debounceSearch]);

    if (context.error) {
        return <Error errorMessage={typeof context.error === "string" ? context.error : undefined} />;
    }

    return <div>{context.isLoading ? <Loader /> : <ItemsList items={filtredSearch} />}</div>;
};

export default HomePage;
