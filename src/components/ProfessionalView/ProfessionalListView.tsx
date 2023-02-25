import React from 'react'
import {Box, Card, CardActionArea, CardContent, CardMedia, Divider, Typography, Stack} from "@mui/material";
import ProfessionalModel from "../../libs/models/Professional";
import ProfessionalNavigateToFullProfile from "./ProfessionalNavigateToFullProfile";
import ProfessionalNavigateToWebsite from "./ProfessionalNavigateToWebsite";
import ProfessionalBiography from "./ProfessionalBiography";
import ProfessionalPhoneCall from "./ProfessionalPhoneCall";
import ProfessionalSendEmail from "./ProfessionalSendEmail";
import ProfessionalOffering from "./ProfessionalOffering";
import ProfessionalLanguages from "./ProfessionalLanguages";
import ProfessionalIdentity from "./ProfessionalIdentity";
import ProfessionalQualifications from "./ProfessionalQualifications";



const ProfessionalListView = ({professional}:{professional: ProfessionalModel}) => {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{width: 350}}
                image={professional.pictureURL}
                alt={`Picture for ${professional.title} ${professional.firstName} ${professional.lastName} - ${professional.pronouns}`}
            />
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Stack
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        <Box>
                            <ProfessionalIdentity professional={professional} />
                            <ProfessionalQualifications professional={professional} />
                            <ProfessionalLanguages professional={professional} />
                            <Divider />
                            <ProfessionalBiography professional={professional} variant="short" />
                        </Box>
                        <ProfessionalOffering professional={professional} />
                    </Stack>
                </CardContent>
                <CardActionArea sx={{display: 'flex', flexDirection: 'row', marginBottom: "1em"}}>
                    <ProfessionalNavigateToFullProfile  professional={professional}/>
                    {professional.websiteURL !== "" && <ProfessionalNavigateToWebsite professional={professional} />}
                    {professional.email !== "" && <ProfessionalSendEmail professional={professional} />}
                    {professional.phone !== "" && <ProfessionalPhoneCall professional={professional} />}
                </CardActionArea>
            </Box>
        </Card>
    )
}
export default ProfessionalListView