import React from 'react'
import {Card, CardActionArea, CardContent, CardMedia, Divider, Stack} from "@mui/material";
import ProfessionalModel from "../../libs/models/Professional";
import ProfessionalBiography from "./ProfessionalBiography";
import ProfessionalNavigateToWebsite from "./ProfessionalNavigateToWebsite";
import ProfessionalIdentity from "./ProfessionalIdentity";
import ProfessionalQualifications from "./ProfessionalQualifications";
import ProfessionalSendEmail from "./ProfessionalSendEmail";
import ProfessionalPhoneCall from "./ProfessionalPhoneCall";

const ProfessionalFullView = ({professional}:{professional: ProfessionalModel}) => {
    return (
        <>
            <Card>
                <CardContent>
                    <Stack direction="row">
                        <Stack direction="column">
                            <ProfessionalIdentity professional={professional} />
                            <ProfessionalQualifications professional={professional} />
                        </Stack>
                        <CardMedia
                            component="img"
                            sx={{width: 350}}
                            image={professional.pictureURL}
                            alt={`Picture for ${professional.title} ${professional.firstName} ${professional.lastName} - ${professional.pronouns}`}
                        />
                    </Stack>

                    <ProfessionalBiography professional={professional} variant="full" />
                    <Divider />
                </CardContent>
                <CardActionArea sx={{display: 'flex', flexDirection: 'row', marginBottom: "1em"}}>
                    {professional.websiteURL !== "" && <ProfessionalNavigateToWebsite professional={professional} />}
                    {professional.email !== "" && <ProfessionalSendEmail professional={professional} />}
                    {professional.phone !== "" && <ProfessionalPhoneCall professional={professional} />}
                </CardActionArea>
            </Card>
        </>
    )
}
export default ProfessionalFullView