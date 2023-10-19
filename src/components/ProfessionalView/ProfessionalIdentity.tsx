import {Typography} from "@mui/material";
import React from "react";
import ProfessionalModel from "../../libs/models/Professional";

const ProfessionalIdentity = ({professional}:{professional: ProfessionalModel}) => {
    return (
        <>
            <Typography
                noWrap
                gutterBottom
                variant="h4">
                {professional.title} {professional.firstName} {professional.lastName}
            </Typography>
            <Typography
                noWrap
                gutterBottom
                variant="h6">
                ({professional.pronouns})
            </Typography>
        </>
    )
}

export default ProfessionalIdentity