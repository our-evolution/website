import React from 'react';
import {CssBaseline} from "@mui/material";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from './routes'
import {createTheme, ThemeProvider, Theme} from '@mui/material/styles';
import {ThemeOptions} from "@mui/material/styles";
import {LanguageProvider} from "./utils/translations";

export const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#42a5f5',
            contrastText: '#eceff1',
        },
        secondary: {
            main: '#673ab7',
        },
        background: {
            default: '#F5F5F5',
            paper: '#e3f2fd',
        },
        divider: '#9e9e9e',
        info: {
            main: '#2196f3',
        },
    },
};

const lightTheme = createTheme(
    themeOptions
)

function App() {
    const [language, setLanguage] = React.useState<string>("fr")
    const [theme] = React.useState<Theme>(lightTheme)
    return (
        <LanguageProvider lang={language}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <RouterProvider router={createBrowserRouter(routes(language, setLanguage))}/>
            </ThemeProvider>
        </LanguageProvider>
    );
}

export default App;
