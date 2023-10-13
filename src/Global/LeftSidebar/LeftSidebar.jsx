import React from 'react';
import { IoGiftOutline, IoGridOutline, IoHomeOutline } from 'react-icons/io5';

const LeftSidebar = ({toggleLeft}) => {
    return (
        <div className=''>
            <ul>
                <li>
                    <a href="" className='py-2 hover:bg-slate-100 text-primary font-medium text-sm flex items-center gap-2 pl-4  '> <IoHomeOutline className='text-lg' /> <span className={` group-hover:block ${toggleLeft ? "block" : "lg:hidden"}`}>Home</span> </a>
                </li>
                <li>
                    <a href="" className='py-2 hover:bg-slate-100 text-gray-700 font-medium text-sm flex items-center gap-2 pl-4 '> <IoGridOutline className='text-lg' /> <span className={` group-hover:block ${toggleLeft ? "block" : "lg:hidden"}`}>Prdoucts</span> </a>
                </li>
                <li>
                    <a href="" className='py-2 hover:bg-slate-100 text-gray-700 font-medium text-sm flex items-center gap-2 pl-4 ' > <IoGiftOutline className='text-lg' /> <span className={` group-hover:block ${toggleLeft ? "block" : "lg:hidden"}`}>Gifts</span> </a>
                </li>
                
            </ul>
        </div>
    );
};

export default LeftSidebar;