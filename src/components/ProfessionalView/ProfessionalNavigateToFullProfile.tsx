import React from "react";
import {Button} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import ProfessionalModel from "../../libs/models/Professional";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import useLanguage from "../../libs/translations/useLanguage";
const ProfessionalNavigateToFullProfile = ({professional}: {professional: ProfessionalModel}) => {
    const text = useLanguage().global.contactFullProfile
    return <Button
        startIcon={<ContactPageIcon />}
        variant="contained"
        sx={{marginRight: ".5em", flex: '0 1 auto'}}
        component={RouterLink}
        to={`/profiles/${professional.id}`}
    >{text}</Button>
}

export default ProfessionalNavigateToFullProfile
