type SearchProps = {
    searchValue: string;
    setSearchValue: (value: string) => void;
};

const Search = ({ setSearchValue, searchValue }: SearchProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className="flex flex-col items-center bg-gray-50 mb-3">
            <div className="w-full overflow-hidden rounded-xl bg-white py-5 px-1 shadow-sm">
                <div className="flex overflow-hidden rounded-md bg-gray-200 focus:outline focus:outline-blue-500">
                    <input
                        value={searchValue}
                        onChange={handleChange}
                        type="text"
                        placeholder="Поиск..."
                        className="w-full rounded-bl-md rounded-tl-md bg-gray-100 px-4 py-2.5 text-gray-700 focus:outline-blue-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;
