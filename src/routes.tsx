import { RouteObject } from "react-router-dom"
import SiteLayout from './components/SiteLayout/SiteLayout'
import IndexPage from './pages/IndexPage'
import NotFoundPage from './pages/NotFoundPage'
import FocusPage from './pages/FocusPage'
import PractitionersPage from './pages/DirectoryPage/DirectoryPage'
import DirectorySearchPage from "./pages/DirectorySearchPage";
import PractitionersDetailsPage from "./pages/PractitionersDetailsPage";
import React from "react";

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
                    element: <FocusPage />
                },
                {
                    path: "practitioners",
                    element: <PractitionersPage />,
                    children: [
                        {
                            index: true,
                            element: <DirectorySearchPage />,
                        },
                        {
                            path: ":therapistsId",
                            element: <PractitionersDetailsPage />,
                        },
                    ]
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