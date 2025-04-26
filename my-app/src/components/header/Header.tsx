import { useState, Dispatch, SetStateAction } from "react";
import Sidebar from "../Sidebar";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSidebar, setIsSidebar] = useState(false);

    const toggleClick = (setter: Dispatch<SetStateAction<boolean>>) => {
        setter((prev) => !prev);
    };

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="flex justify-between mb-3">
            <div
                onClick={() => toggleClick(setIsOpen)}
                className="bg-white md:hidden rounded border-gray-300  flex flex-col justify-center items-center gap-1 w-12 h-12 group cursor-pointer"
            >
                <span
                    className={`w-8 h-1 bg-gray-700 rounded transition-all duration-300 group-hover:w-6 ${
                        isOpen ? "-rotate-45 translate-y-2" : ""
                    }`}
                />
                <span
                    className={`w-8 h-1 bg-gray-700 rounded transition-all duration-300 group-hover:w-6 ${
                        isOpen ? "opacity-0" : ""
                    }`}
                />
                <span
                    className={`w-8 h-1 bg-gray-700 rounded transition-all duration-300 group-hover:w-6 ${
                        isOpen ? "-rotate-135 -translate-y-2" : ""
                    }`}
                />
            </div>

            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-md transition-transform z-40 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <nav className="p-6 bg-white ">
                    <a
                        href="#"
                        className="p-4 block text-xl border-b-1  text-gray-800 hover:text-blue-600"
                    >
                        Главная
                    </a>
                    <div
                        onClick={() => toggleClick(setIsSidebar)}
                        className={`mt-4 ${
                            !isSidebar ? "pb-4" : ""
                        }  block text-xl border-b-1  text-gray-800 hover:text-blue-600`}
                    >
                        Каталог
                        {isSidebar && (
                            <div onClick={(e) => handleClick(e)}>
                                <Sidebar />
                            </div>    
                        )}
                    </div>
                    <a
                        href="#"
                        className="p-4 block text-xl border-b-1  text-gray-800 hover:text-blue-600"
                    >
                        О нас
                    </a>
                    <a
                        href="#"
                        className="p-4 block text-xl border-b-1  text-gray-800 hover:text-blue-600"
                    >
                        Контакты
                    </a>
                </nav>
            </div>
            {isOpen && (
                <div
                    className="fixed h-full w-f bg-black opacity-50 inset-0 z-30"
                    onClick={() => toggleClick(setIsOpen)}
                />
            )}
            <a href="#">
                <img
                    className="rounded-xl"
                    src="https://static.golemos.com/lukasdubina/milotec/img/logo.jpg"
                    alt=""
                />
            </a>
            <div className="hidden p-2 bg-white md:flex  rounded-xl overflow-hidden">
                <a
                    className="p-2 border-r-3 border-gray-300 bg-white text-gray-800 tracking-wide"
                    href=""
                >
                    Главная
                </a>
                <a
                    className="p-2 border-r-3 border-gray-300 bg-white text-gray-800 tracking-wide"
                    href=""
                >
                    О нас
                </a>
                <a
                    className="p-2  bg-white text-gray-800 tracking-wide"
                    href=""
                >
                    Контакты
                </a>
            </div>
            <div>auth</div>
        </div>
    );
};

export default Header;
