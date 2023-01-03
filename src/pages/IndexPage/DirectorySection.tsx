import React from 'react'
import {Button, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import useLanguage from "../../utils/translations/useLanguage";

const DirectorySection = () => {
    const trans = useLanguage().index.directory
    return (
        <>
            <Typography variant="h2" component="h2" gutterBottom>{trans.title}</Typography>
            <Typography variant="body1" component="div">{trans.body}</Typography>
            <Button component={RouterLink} to="/practitioners">{trans.navToDirectory}</Button>

        </>
    )
}

export default DirectorySection