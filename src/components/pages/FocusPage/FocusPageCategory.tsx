import {Divider, Typography} from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import React from "react";
import {useParams} from "react-router-dom";
import FocusArea from "../../../libs/models/FocusArea";
import {useFocusArea} from "./FocusPage";
import {useLanguage} from "../../../libs/translations";
import {FocusCategoryTranslation} from "../../../libs/models/Translation";
import {ProfessionalView} from "../../ProfessionalView";
import useProfessionalListByCategory from "../../../libs/professionals/useProfessionalListByCategory";

const useFocusCategory = (focusArea: FocusArea|undefined) => {
    const {categoryId} = useParams()
    if (focusArea === undefined) {
        return undefined
    }
    return focusArea.categories.find((item) => {return item === categoryId})
}

export const useCategoryTranslation = (categoryId: string):FocusCategoryTranslation => {
    const categoryTranslations = useLanguage().focusCategories
    const translations = categoryTranslations.get(categoryId)
    if (translations === undefined) {
       return {
           title: categoryId + " no translation available",
           text: ""
       }
    }
    // @ts-ignore
    return translations
}

const FocusCategoryHeader = ({translation}: {translation: FocusCategoryTranslation}) => {
    return (
        <>
            <Typography variant="h3" align="center">{translation.title}</Typography>
            <Typography variant="body1">{translation.text}</Typography>
        </>
    )
}

export const FocusAreaCategoryTherapistList = ({focusCategoryId}:{focusCategoryId: string}) => {
    const professionals = useProfessionalListByCategory(focusCategoryId)

    return (
        <>
            <Typography variant="h3" align={"right"}>Our specialised practitioners</Typography>
            <Masonry columns={2} spacing={2} style={{marginTop: "1em"}}>
                {professionals.map((professional) => {return (<ProfessionalView key={professional.id} professional={professional} variant="brief" />)})}
            </Masonry>
        </>
    )
}
const FocusPageCategory = () => {
    const focusArea = useFocusArea()
    const focusCategory = useFocusCategory(focusArea)
    const translation = useCategoryTranslation(focusCategory || "")
    if (focusArea !== undefined) {
        // @ts-ignore
        return (
            <>
                <FocusCategoryHeader translation={translation}/>
                <Divider/>
                <FocusAreaCategoryTherapistList focusCategoryId={focusCategory||""}/>
            </>
        )
    }
    return (
        <></>
    )
}

export default FocusPageCategory