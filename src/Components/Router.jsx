import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from './Home';
import Resume from './Resume';
import Project from './Project';
import Contact from './Contact';
import RootLayout from './RootLayout';



   export const Router = createBrowserRouter([
        {
            path: '/',
            Component: RootLayout,
            children:[
                {
                    index: true,
                    Component: Home
                },
                {
                    path: '/home',
                    Component: Home,
                },
                {
                    path: '/resume',
                    Component: Resume,
                },
                {
                    path: '/project',
                    Component: Project,
                },
                {
                    path: '/contact',
                    Component: Contact,
                },
              
            ]
        }
    ])
