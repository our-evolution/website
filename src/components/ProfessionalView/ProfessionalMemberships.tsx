import React from 'react'
import {Typography} from "@mui/material";
import ProfessionalModel from "../../libs/models/Professional";

const ProfessionalMemberships = ({professional}:{professional: ProfessionalModel}) => {
    return <Typography
        noWrap
        gutterBottom
        variant="subtitle1"
        color="text.secondary"
        component="div"
    >{professional.memberships.join(", ")}</Typography>
}

export default ProfessionalMemberships