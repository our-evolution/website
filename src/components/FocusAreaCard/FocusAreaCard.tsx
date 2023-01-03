import {useLanguage} from "../../utils/translations";
import {FocusAreaTranslation} from "../../utils/translations/type";
import {Card, CardActions, CardContent, CardMedia, Link, List, ListItem, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import React from "react";

export interface FocusAreaCardOptions {
    id: string
    image: string
}

const FocusAreaCard = ({id, image}:FocusAreaCardOptions) => {
    const focusAreas = useLanguage().focusAreas

    let focusArea = {title: "Not available"} as FocusAreaTranslation
    const result = focusAreas.get(id)
    if (result !== undefined) {
        focusArea = result
    }

    return (
        <Card sx={{width: ["100%", 200, 300]}}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
            />
            <CardActions>
                <Link variant="body1" component={RouterLink} to={`/focus/${id}`}>{focusArea.title}</Link>
            </CardActions>
            <CardContent>
                <List dense={true}>
                    {focusArea.conditions.map((item, index) => {
                        return <ListItem key={index}><Typography variant="body2">{item}</Typography></ListItem>
                    })}

                </List>
            </CardContent>
        </Card>
    )
}

export default FocusAreaCard