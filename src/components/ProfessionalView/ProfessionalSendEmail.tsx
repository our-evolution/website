import React from "react";
import {Button} from "@mui/material";
import ProfessionalModel from "../../libs/models/Professional";
import EmailIcon from '@mui/icons-material/Email';
import useLanguage from "../../libs/translations/useLanguage";

const ProfessionalSendEmail = ({professional}: {professional: ProfessionalModel}) => {
    const text = useLanguage().global.contactEmail

    return (
        <>
            {professional.email !== undefined && <Button startIcon={<EmailIcon />} variant="contained" href={`mailto:${professional.email}`} sx={{marginRight: ".5em", flex: '0 1 auto'}}>{text}</Button>}
        </>
    );
}
export default ProfessionalSendEmail