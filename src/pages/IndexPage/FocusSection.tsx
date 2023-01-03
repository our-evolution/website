import { Stack, Typography} from "@mui/material";
import React from "react";
import {useLanguage} from "../../utils/translations";
import FocusAreaCard from "../../components/FocusAreaCard/FocusAreaCard";
import FocusAreaList from "../../models/FocusAreaList";

const FocusSection = () => {
    const focusSection = useLanguage().index.focusArea

    return (
        <>
            <Typography variant="h2" component="h2" align="right" gutterBottom>{focusSection.title}</Typography>
            <Typography variant="body1" component="p" gutterBottom>{focusSection.description}</Typography>
            <Stack
                direction={{xs: 'column', sm: 'row'}}
                spacing={{xs: 2, sm: 2, md: 4}}
            >
                {FocusAreaList.map((topic) => {
                    return (
                        <FocusAreaCard
                            key={topic.id}
                            id={topic.id}
                            image={topic.image}
                        />
                    )
                })}
            </Stack>
        </>
    )
}

export default FocusSection
