type SearchProps = {
    searchValue: string;
    setSearchValue: (value: string) => void;
};

const Search = ({ setSearchValue, searchValue }: SearchProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className="flex flex-col items-center mb-3 ">
            <div className="w-full overflow-hidden border border-gray-200 rounded-xl bg-white py-1 px-1 shadow-lg">
                <div className="flex overflow-hidden">
                    <input
                        value={searchValue}
                        onChange={handleChange}
                        type="text"
                        placeholder="Поиск..."
                        className="w-full rounded-bl-md rounded-tl-md  px-4 py-2.5 text-gray-700 focus:outline-none focus:underline-blue-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;
