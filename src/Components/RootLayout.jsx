import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const RootLayout = () => {
    return (
        <div className=' relative container mx-auto' >
            <div className='fixed top-0 left-0 '></div>
            <Navbar></Navbar>
            <div className='pt-20 container mx-auto min-h-screen '>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;