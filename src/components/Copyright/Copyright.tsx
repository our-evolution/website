import {Typography, Box} from "@mui/material";
import React from "react";


export default () => {
    return (
        <Box sx={{p: 2}}>
            <Typography variant="body2" color="text.secondary">
                {'Copyright © '}
                {'Our Evolution '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
    </Box>
    );
}
