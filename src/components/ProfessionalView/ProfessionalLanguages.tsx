import React from "react";
import ProfessionalModel from "../../libs/models/Professional";
import {Typography} from "@mui/material";
import useLanguage from "../../libs/translations/useLanguage";

const ProfessionalLanguages = ({professional}:{professional: ProfessionalModel}) => {
    const {global, languages} = useLanguage()
    const languagesList = professional.languages.map((langKey) => {return languages.get(langKey) || langKey})
    return <Typography
        gutterBottom
        variant="subtitle1"
        color="text.secondary"
        component="div"
    >{global.sessionLanguageList} {languagesList.join(", ")}</Typography>
}

export default ProfessionalLanguages