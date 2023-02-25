import React from 'react'
import {useParams} from "react-router-dom";
import { ProfessionalViewById } from '../../ProfessionalView'


const ProfilePage = () => {
    const professionalId = useParams()?.professionalId

    return (
        <ProfessionalViewById id={professionalId} variant="full"/>
    )
}

export default ProfilePage