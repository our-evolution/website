import React from "react";
import ProfessionalModel from "../../libs/models/Professional";
import {Typography} from "@mui/material";

const ProfessionalLocation = ({professional}:{professional: ProfessionalModel}) => {
    return <Typography
        gutterBottom
        variant="subtitle1"
        color="text.secondary"
        component="div"
    >{professional.location}, {professional.country}</Typography>
}

export default ProfessionalLocation