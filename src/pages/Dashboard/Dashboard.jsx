import React from 'react';
import { IoHome } from 'react-icons/io5';

const Dashboard = () => {
    return (
        <div>
            <div className=' grid lg:grid-cols-2 justify-between items-center'>
                <div>
                    <h1 className='text-lg font-semibold text-gray-700'>Dashboard</h1>
                    <p className='text-sm tracking-widest text-gray-600 font-normal'>Admin Panel</p>
                </div>
                <div className='hidden lg:flex justify-end'>
                    <ul className='flex items-center gap-2'>
                        <li><a href="#" className='font-semibold text-xs text-primary flex items-center gap-1'><IoHome></IoHome> Dashboard</a></li>
                        <li><a href="#" className='font-semibold text-xs text-primary'>/</a></li>
                        <li><a href="#" className='font-semibold text-xs text-primary'>Default</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;