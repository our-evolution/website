import React from 'react'
import ProfessionalModel from "../../libs/models/Professional";
import useLanguageKeys from "../../libs/translations/useLanguageKeys";
import {Typography} from "@mui/material";
type BiographyVariant = "short"|"full"

const ProfessionalShortBiography = ({professional, languageKeys}:{professional: ProfessionalModel, languageKeys: string[]}) => {
    const selectedLanguageKey = languageKeys.find((key)=> {return professional.multiLingualShortBiography.has(key)})||""
    const shortBiography = professional.multiLingualShortBiography.get(selectedLanguageKey)||""
    return (
        <Typography component="p" variant="body1">{shortBiography}</Typography>
    )
}

const ProfessionalFullBiography = ({professional, languageKeys}:{professional: ProfessionalModel, languageKeys: string[]}) => {
    const selectedLanguageKey = languageKeys.find((key)=> {return professional.multiLingualShortBiography.has(key)})||""
    const fullBiographyParagraphs = professional.multiLingualBiography.get(selectedLanguageKey)||[]
    return (
        <>
            {
                fullBiographyParagraphs.map(
                    (text, index) => {return <Typography component="p" variant="body1" key={index}>{text}</Typography>}
                )
            }
        </>
    )
}
const ProfessionalBiography = ({professional, variant}: {professional: ProfessionalModel, variant: BiographyVariant}) => {
    const [activeLanguageKey, defaultLanguageKey] = useLanguageKeys()
    let languages = [activeLanguageKey, ...professional.languages, defaultLanguageKey]
    return (
        <>
            {variant === "short" && <ProfessionalShortBiography professional={professional} languageKeys={languages} />}
            {variant === "full" && <Typography noWrap gutterBottom variant="h6" align="center">Biography</Typography>}
            {variant === "full" && <ProfessionalFullBiography professional={professional} languageKeys={languages} />}
        </>
    )

}

export default ProfessionalBiography