import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from './Home';
import Resume from './Resume';
import Project from './Project';
import Contact from './Contact';
import RootLayout from './RootLayout';
import AboutMeResume from './AboutMeResume';
import EducationResume from './Education';
import Education from './Education';
import Projects from './Project';
import Experience from './Experiance';
import Skill from './Skill';



export const Router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
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
                element: <Resume></Resume>,
                children: [
                    {
                        index: true,
                        element: <AboutMeResume />
                    },
                    {
                        path: "about-me",
                        element: <AboutMeResume></AboutMeResume>
                    },
                    {
                        path: "skills",
                        element: <Skill></Skill>
                    },
                    {
                        path: "education",
                        element: <Education />

                    },
                    {
                        path: "experience",
                        element: <Experience />
                    }
                ]
            },
            {
                path: "/project",
                element: <Projects />
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }

        ]
    }
])
