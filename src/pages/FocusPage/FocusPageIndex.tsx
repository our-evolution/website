import {Divider, List, Typography} from "@mui/material";
import React from "react";
import {useFocusArea} from "./FocusPage";
import {FocusCategoryItem} from "../../components/FocusAreaCard/FocusAreaCard";
import FocusProfessional from "./FocusProfessional";
import {FocusTherapistList} from "./FocusPageCategory";

const FocusPageIndex = () => {
    const focusArea = useFocusArea()
    return (
        <>
            <Divider />
            <Typography variant="h3">You are seeking help for:</Typography>
            <List dense={true}>
                {focusArea?.categories.map((item, index) => {
                    return <FocusCategoryItem focusId={focusArea?.id} categoryId={item} key={index} />
                })}
            </List>
            <Divider/>
            <FocusTherapistList />
        </>
    );
}
export default FocusPageIndex