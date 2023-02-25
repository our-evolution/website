import {Divider, List, Typography} from "@mui/material";
import React from "react";
import {useFocusArea} from "./FocusPage";
import {FocusCategoryItem} from "../../FocusAreaCard/FocusAreaCard";
import useProfessionalListByCategories from "../../../libs/professionals/useProfessionalListByCategories";
import Masonry from "@mui/lab/Masonry";
import {ProfessionalView} from "../../ProfessionalView";


export const FocusAreaTherapistList = ({categoryIds}:{categoryIds: string[]}) => {
    const professionals = useProfessionalListByCategories(categoryIds)
    return (
        <>
            <Typography variant="h3" align={"right"}>Our specialised practitioners</Typography>
            <Masonry columns={3} spacing={2} style={{marginTop: "1em"}}>
                {professionals.map((professional) => {return (<ProfessionalView key={professional.id} professional={professional} variant="brief" />)})}
            </Masonry>
        </>
    )
}

const FocusPageIndex = () => {
    const focusArea = useFocusArea()
    // @ts-ignore
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
            <FocusAreaTherapistList categoryIds={focusArea?.categories|| []} />
        </>
    );
}
export default FocusPageIndex