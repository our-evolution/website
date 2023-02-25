import React from "react";
import { RouteObject } from "react-router-dom"
import SiteLayout from './components/SiteLayout/SiteLayout'
import IndexPage from './components/pages/IndexPage'
import NotFoundPage from './components/pages/NotFoundPage'
import FocusPage from './components/pages/FocusPage/FocusPage'
import DirectoryPage from './components/pages/DirectoryPage/DirectoryPage'
import DirectoryResultsPage from './components/pages/DirectoryPage/DirectoryResultsPage'
import FocusPageCategory from './components/pages/FocusPage/FocusPageCategory'
import FocusPageIndex from './components/pages/FocusPage/FocusPageIndex'
import ProfilePage from './components/pages/ProfilePage'

const createRoutes = (language: string, setLanguage: ((value: (((prevState: string) => string) | string)) => void)): RouteObject[] => {
    return  [
        {
            path: "",
            element: <SiteLayout
                language={language}
                setLanguage={setLanguage}
            />,
            children: [
                {
                    index: true,
                    element: <IndexPage />
                },
                {
                    path: "focus/:focusId",
                    element: <FocusPage />,
                    children: [
                        {
                            index: true,
                            element: <FocusPageIndex />
                        },
                        {
                            path: ":categoryId",
                            element: <FocusPageCategory />
                        }
                    ]
                },
                {
                    path: "directory",
                    element: <DirectoryPage />,
                    children: [
                        {
                            index: true,
                            element: <DirectoryResultsPage />,
                        },
                    ]
                },
                {
                    path: "profiles/:professionalId",
                    element: <ProfilePage />
                },
                {
                    path: "*",
                    element: <NotFoundPage />
                }
            ]
        }
    ]
}

export default createRoutes