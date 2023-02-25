import {useLanguage} from "../../libs/translations";
import {FocusAreaTranslation} from "../../libs/models/Translation";
import {Card, CardActions, CardContent, CardMedia, Link, List, ListItem, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import React from "react";
import {useCategoryTranslation} from "../pages/FocusPage/FocusPageCategory";

export interface FocusAreaCardOptions {
    id: string
    image: string
    categories: Array<string>
}
export const FocusCategoryItem = ({focusId, categoryId}: {focusId: string, categoryId: string}) => {
    const translation = useCategoryTranslation(categoryId)
    return (
        <ListItem>
            {translation.text !== "" && <Link variant="body2" component={RouterLink} to={`/focus/${focusId}/${categoryId}`}>{translation.title}</Link>}
            {translation.text === "" && <Typography variant="body2">{translation.title}</Typography>}
        </ListItem>
    )
}
const FocusAreaCard = ({id, image, categories}:FocusAreaCardOptions) => {
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
                    {categories.map((item, index) => {
                        return <FocusCategoryItem focusId={id} categoryId={item} key={index} />
                    })}
                </List>
            </CardContent>
        </Card>
    )
}

export default FocusAreaCard