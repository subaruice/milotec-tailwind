import {ItemsProps} from '../../types/types'; 
import './sidebar.css'

const Sidebar = ({items}: ItemsProps) => {
    return (
        <div>
            <ul className="flex flex-col bg-white rounded-xl">
                <h2 className="hidden md:block py-4 px-5  text-[18px] text-nowrap bg-red-500 text-white font-bold rounded-t-xl">
                    Каталог Skoda
                </h2>
                <li className="mt-4 md:mt-0 p-2 text-[16px] bg-gray-200 transition border-b-1 side-desc ">
                    Skoda Octavia
                </li>
                <li className="p-2 text-[16px] bg-gray-200 transition border-b-1 side-desc ">
                    Skoda Octavia
                </li>
                <li className="p-2 text-[16px] bg-gray-200 transition border-b-1 side-desc ">
                    Skoda Octavia
                </li>
                <li className="p-2 text-[16px] bg-gray-200 transition border-b-1 side-desc ">
                    Skoda Octavia
                </li>
                <li className="p-2 text-[16px] bg-gray-200 transition  side-desc md:border-none">
                    Skoda Octavia
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
