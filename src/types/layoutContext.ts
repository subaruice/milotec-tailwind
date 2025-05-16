import {Item} from './item'

export type LayoutContext = {
    items: Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
    searchValue: string;
    isLoading: boolean;
    error: string | undefined;
};