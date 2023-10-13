import React, { useState } from 'react';
import Header from '../Global/Header/Header';
import LeftSidebar from '../Global/LeftSidebar/LeftSidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    const [toggleLeft, setToggleLeft] = useState(true);

    return (
        <section>
            <Header toggleLeft={toggleLeft} setToggleLeft={setToggleLeft}></Header>
            <div className='flex gap-5 relative'>
                <div className={` group bg-white z-[9999] h-[calc(100vh-40px)] hover:w-[200px]  w-[200px] overflow-x-hidden transition-all duration-300 absolute lg:static  shadow ${toggleLeft ? ' -translate-x-full bottom-0 top-0 lg:w-[200px] lg:translate-x-0 ' : 'translate-x-0 lg:hover:absolute lg:w-[50px]'}`}>
                    <LeftSidebar toggleLeft={toggleLeft} />
                </div>
                <div className='w-full mr-3 ml-3 lg:ml-0  mt-3'>
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default MainLayout;