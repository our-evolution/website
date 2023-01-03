import React from 'react'
import {Card, CardContent, Typography} from "@mui/material";

const NotFoundPage = () => {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Page Not Found
                    </Typography>
                    <Typography gutterBottom variant="body2">The content you are looking for is not available</Typography>
                </CardContent>
            </Card>
        </>
    )
}
export default NotFoundPage