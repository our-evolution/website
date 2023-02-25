import React from 'react'
import {Divider, Grid, Paper, Stack, Typography} from "@mui/material";
import ProfessionalModel from "../../libs/models/Professional";
import ProfessionalBiography from "./ProfessionalBiography";
import ProfessionalNavigateToWebsite from "./ProfessionalNavigateToWebsite";
import ProfessionalIdentity from "./ProfessionalIdentity";
import ProfessionalQualifications from "./ProfessionalQualifications";
import ProfessionalSendEmail from "./ProfessionalSendEmail";
import ProfessionalPhoneCall from "./ProfessionalPhoneCall";
import ProfessionalLanguages from "./ProfessionalLanguages";
import ProfessionalOffering from "./ProfessionalOffering";
import ProfessionalMemberships from "./ProfessionalMemberships";
import ProfessionalLocation from "./ProfessionalLocation";

const ProfessionalFullView = ({professional}:{professional: ProfessionalModel}) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={8} md={8}>
                <Stack direction="column" spacing={2} sx={{margin: ".8em", textAlign: "center"}}>
                    <ProfessionalIdentity professional={professional} />
                    <ProfessionalBiography professional={professional} variant="full" />
                    <Divider />
                    <Typography variant="h6">Memberships</Typography>
                    <ProfessionalMemberships professional={professional} />
                </Stack>
            </Grid>
            <Grid item xs={4} md={4}>
                <Paper sx={{paddingBottom: ".8em"}}>
                    <Stack direction="column" spacing={2} sx={{margin: ".8em"}}>
                        <img src={professional.pictureURL} />
                        <Typography variant="h6">Qualifications</Typography>
                        <ProfessionalQualifications professional={professional} />
                        <Divider />
                        <Typography variant="h6">My practice</Typography>
                        <ProfessionalLanguages professional={professional} />
                        <ProfessionalOffering professional={professional} />
                        <Divider />
                        <Typography variant="h6">Location</Typography>
                        <ProfessionalLocation professional={professional} />
                        <Divider />
                        <ProfessionalNavigateToWebsite professional={professional} />
                        <ProfessionalSendEmail professional={professional} />
                        <ProfessionalPhoneCall professional={professional} />
                    </Stack>
                </Paper>
            </Grid>
        </Grid>
    )
}
export default ProfessionalFullView