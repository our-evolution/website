import {Divider, Typography} from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import FocusProfessional from "./FocusProfessional";
import React from "react";
import {useParams} from "react-router-dom";
import FocusArea from "../../models/FocusArea";
import {useFocusArea} from "./FocusPage";
import {useLanguage} from "../../utils/translations";
import {FocusCategoryTranslation} from "../../utils/translations/type";

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

const FocusCategoryHeader = () => {
    const focusArea = useFocusArea()
    const focusCategory = useFocusCategory(focusArea)
    const translation = useCategoryTranslation(focusCategory || "")
    if (focusArea !== undefined) {


        return (
            <>
                <Typography variant="h3" align="center">{translation.title}</Typography>
                <Typography variant="body1">{translation.text}</Typography>
            </>
        )
    }
    return null
}

export const FocusTherapistList = () => {
    return (
        <>
            <Typography variant="h3" align={"right"}>Our specialised practitioners</Typography>
            <Masonry columns={3} spacing={2} style={{marginTop: "1em"}}>
                <FocusProfessional/>
                <FocusProfessional/>
                <FocusProfessional/>
            </Masonry>
        </>
    )
}
const FocusPageCategory = () => {
    return (
        <>
            <FocusCategoryHeader />
            <Divider/>
            <FocusTherapistList />
        </>
    )
}

export default FocusPageCategory