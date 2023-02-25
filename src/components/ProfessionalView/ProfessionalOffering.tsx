import React from 'react'
import ProfessionalModel from "../../libs/models/Professional";
import {Chip, Stack, Typography} from "@mui/material";
import useLanguage from "../../libs/translations/useLanguage";

const ProfessionalOffering = ({professional}:{professional: ProfessionalModel}) => {
    const translation = useLanguage().global
    return (
        <Stack sx={{width: 250}}>
            <Typography noWrap gutterBottom variant="h5" color="text.secondary">{translation.sessionTypeIndividual}</Typography>
            <Stack direction="row" spacing={1}>
                {professional.offering.individualF2F && <Chip size="small" label={translation.deliveryF2F} />}
                {professional.offering.individualOnline && <Chip size="small" label={translation.deliveryOnline} />}
                {professional.offering.individualOutdoor && <Chip size="small" label={translation.deliveryOutdoor} />}
            </Stack>
            <Typography noWrap gutterBottom variant="h5" color="text.secondary">{translation.sessionTypeCouples}</Typography>
            <Stack direction="row" spacing={1}>
                {professional.offering.couplesF2F && <Chip size="small" label={translation.deliveryF2F} />}
                {professional.offering.couplesOnline && <Chip size="small" label={translation.deliveryOnline} />}
                {professional.offering.couplesOutdoor && <Chip size="small" label={translation.deliveryOutdoor} />}
            </Stack>
            <Typography noWrap gutterBottom variant="h5" color="text.secondary">{translation.sessionTypeGroups}</Typography>
            <Stack direction="row" spacing={1}>
                {professional.offering.groupsF2F && <Chip size="small" label={translation.deliveryF2F} />}
                {professional.offering.groupsOnline && <Chip size="small" label={translation.deliveryOnline} />}
                {professional.offering.groupsOutdoor && <Chip size="small" label={translation.deliveryOutdoor} />}
            </Stack>
        </Stack>
    )
}

export default ProfessionalOffering