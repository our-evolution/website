import React from 'react'
import ProfessionalListView from './ProfessionalListView'
import ProfessionalBriefView from './ProfessionalBriefView'
import ProfessionalFullView from './ProfessionalFullView'
import useProfessional  from '../../libs/professionals/useProfessional'
import ProfessionalModel from "../../libs/models/Professional";
import {Typography} from "@mui/material";

const ProfessionalViewVariantList = "list"
const ProfessionalViewVariantBrief = "brief"
const ProfessionalViewVariantFull = "full"

type ProfessionalViewVariant = "list"|"brief"|"full"
export interface ProfessionalOptions {
    id: string|undefined
    variant: ProfessionalViewVariant
}


const ProfessionalViewById = ({id, variant}: ProfessionalOptions) => {
    const professionalInfo = useProfessional(id)
    if (professionalInfo !== undefined) {
        // @ts-ignore
        return (
            <ProfessionalView professional={professionalInfo} variant={variant} />
        )
    } else {
        return (
            <>
                <Typography>No matching professional found</Typography>
            </>
        )
    }
}
export interface ProfessionalViewOptions {
    professional: ProfessionalModel
    variant: ProfessionalViewVariant
}
const ProfessionalView = ({professional, variant}:ProfessionalViewOptions) => {
    return (
        <>
            {variant === ProfessionalViewVariantList && <ProfessionalListView professional={professional}/>}
            {variant === ProfessionalViewVariantBrief && <ProfessionalBriefView professional={professional}/>}
            {variant === ProfessionalViewVariantFull && <ProfessionalFullView professional={professional}/>}
        </>
    )
}

export {
    ProfessionalViewById,
    ProfessionalView,
}