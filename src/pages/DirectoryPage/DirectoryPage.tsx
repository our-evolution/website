import React from 'react'
import {Typography} from "@mui/material";
import {Outlet} from "react-router-dom";
import {useLanguage} from "../../utils/translations";

const DirectoryPage = () => {
    const directory = useLanguage().directory
    return (
        <>
            <Typography variant="h2" component="h2" gutterBottom>{directory.title}</Typography>
            <Typography variant="body1" component="p" gutterBottom>{directory.introductionText}</Typography>
            <Outlet />
        </>
    )
}

export default DirectoryPage