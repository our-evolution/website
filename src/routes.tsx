import { RouteObject } from "react-router-dom"
import SiteLayout from './components/SiteLayout/SiteLayout'
import IndexPage from './pages/IndexPage'
import NotFoundPage from './pages/NotFoundPage'
import FocusPage from './pages/FocusPage/FocusPage'
import PractitionersPage from './pages/DirectoryPage/DirectoryPage'
import DirectorySearchPage from "./pages/DirectorySearchPage";
import PractitionersDetailsPage from "./pages/PractitionersDetailsPage";
import React from "react";
import FocusPageCategory from "./pages/FocusPage/FocusPageCategory";
import FocusPageIndex from "./pages/FocusPage/FocusPageIndex";

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