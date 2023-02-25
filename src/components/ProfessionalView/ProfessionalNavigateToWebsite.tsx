import React from "react";
import {Button} from "@mui/material";
import ProfessionalModel from "../../libs/models/Professional";
import useLanguage from "../../libs/translations/useLanguage";

import PublicIcon from '@mui/icons-material/Public';
const ProfessionalNavigateToWebsite = ({professional}: {professional: ProfessionalModel}) => {
    const text = useLanguage().global.contactWebsite
    return <Button
        startIcon={<PublicIcon />}
        variant="contained"
        href={professional.websiteURL}
        sx={{marginRight: ".5em", flex: '0 1 auto'}}>{text}</Button>;
}
export default ProfessionalNavigateToWebsite