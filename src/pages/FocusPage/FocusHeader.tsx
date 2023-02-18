import {Box, Grid, Paper, Typography} from "@mui/material";
import React from "react";
import FocusArea from "../../models/FocusArea";
import {useLanguage} from "../../utils/translations";

const FocusHeader = ({focusArea}: {focusArea: FocusArea}) => {
    const focusAreas = useLanguage().focusAreas;
    let focusAreaTranslation = undefined
    if (focusAreas !== undefined) {
        focusAreaTranslation = focusAreas.get(focusArea.id)
    }
    if (focusAreaTranslation === undefined) {
        return (
            <>
                <Typography>Page Not Found</Typography>
            </>
        );
    } else {
        return (
            <>
                <Paper sx={{
                    position: 'relative',
                    backgroundColor: 'grey.800',
                    color: '#fff',
                    mb: 4,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${focusArea.image})`,
                }}
                >
                    {/* Increase the priority of the hero background image */}
                    {<img style={{display: 'none'}} src={focusArea.image}
                          alt={focusAreaTranslation.title} />}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,
                            backgroundColor: 'rgba(0,0,0,.3)',
                        }}
                    />
                    <Grid container>
                        <Grid item md={6}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    p: {xs: 3, md: 6},
                                    pr: {md: 0},
                                }}
                            >
                                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                    {focusAreaTranslation.title}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
                <Typography variant="body1">{focusAreaTranslation.text}</Typography>
            </>
        )
    }
}

export default FocusHeader