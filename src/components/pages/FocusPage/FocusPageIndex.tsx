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
            <Typography variant="h3" align={"right"}>Our specialists</Typography>
            <Masonry columns={3} spacing={2} style={{marginTop: ".6em"}}>
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
            <Divider style={{marginTop: ".6em"}}/>
            <Typography variant="h3">Areas we offer help for</Typography>
            <List dense={true}>
                {focusArea?.categories.map((item, index) => {
                    return <FocusCategoryItem focusId={focusArea?.id} categoryId={item} key={index} />
                })}
            </List>
            <Divider style={{marginTop: ".6em"}}/>
            <FocusAreaTherapistList categoryIds={focusArea?.categories|| []} />
        </>
    );
}
export default FocusPageIndex