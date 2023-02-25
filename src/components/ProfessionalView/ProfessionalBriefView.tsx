import React from 'react'
import {Card, CardActionArea, CardContent} from "@mui/material";
import ProfessionalModel from "../../libs/models/Professional";
import ProfessionalBiography from "./ProfessionalBiography";
import ProfessionalQualifications from "./ProfessionalQualifications";
import ProfessionalIdentity from "./ProfessionalIdentity";
import ProfessionalNavigateToFullProfile from "./ProfessionalNavigateToFullProfile";



const ProfessionalBriefView = ({professional}:{professional: ProfessionalModel}) => {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column'}}>
            <CardContent sx={{flex: '1 0 auto' }}>
                <ProfessionalIdentity professional={professional} />
                <ProfessionalQualifications professional={professional} />
                <ProfessionalBiography professional={professional} variant="short" />
            </CardContent>
            <CardActionArea sx={{margin: "1em", display: 'flex', flexDirection: 'row', justifyContent:"center"}}>
                <ProfessionalNavigateToFullProfile  professional={professional}/>
            </CardActionArea>
        </Card>
    )
}
export default ProfessionalBriefView