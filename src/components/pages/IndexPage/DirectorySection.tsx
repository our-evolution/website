import React from 'react'
import {Button, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import useLanguage from "../../../libs/translations/useLanguage";

const DirectorySection = () => {
    const translation = useLanguage().index.directory
    return (
        <>
            <Typography variant="h2" component="h2" gutterBottom>{translation.title}</Typography>
            <Typography variant="body1" component="div">{translation.body}</Typography>
            <Button component={RouterLink} to="/directory">{translation.navToDirectory}</Button>
        </>
    )
}

export default DirectorySection