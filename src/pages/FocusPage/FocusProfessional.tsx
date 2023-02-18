import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import React from "react";

const FocusProfessional = () => {
    return (
        <CardActionArea component={RouterLink} to={"/practitioners/random"}>
            <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                        First Name, Last Name, (Pronouns)
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {"qualification"}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        {"blurb"}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                    image={"https://source.unsplash.com/random"}
                    alt={"Random"}
                />
            </Card>
        </CardActionArea>
    )
}

export default FocusProfessional