import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import ProfessionalModel from "../../libs/models/Professional";
import {Button} from "@mui/material";

const ProfessionalPhoneCall = ({professional}: {professional:ProfessionalModel}) => {
    return (
        <Button startIcon={<PhoneIcon />} variant="contained" sx={{marginRight: ".5em", flex: '0 1 auto'}}>{professional.phone}</Button>
    )
}
export default ProfessionalPhoneCall