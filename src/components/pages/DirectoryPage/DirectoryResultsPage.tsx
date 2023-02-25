import React from 'react'
import {ProfessionalView} from "../../ProfessionalView";
import useProfessionalList from "../../../libs/professionals/useProfessionalList";

const DirectoryResultsPage = () => {
    const professionals = useProfessionalList()
    return (
        <>
            {professionals.map((professional) => {return <ProfessionalView key={professional.id} professional={professional} variant="list" />})}
        </>
    )
}

export default DirectoryResultsPage