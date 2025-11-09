import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const RootLayout = () => {
    return (
        <div className="relative">
            <Navbar />
            {/* Push content below fixed navbar */}
            <div className="pt-24 container mx-auto min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};


export default RootLayout;