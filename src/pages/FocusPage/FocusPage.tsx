import React from 'react'
import {Typography} from '@mui/material'
import {Outlet, useParams} from 'react-router-dom'
import FocusHeader from "./FocusHeader";
import FocusAreaList from "../../config/FocusAreaList";

export const useFocusArea = () => {
    let {focusId} = useParams()
    return FocusAreaList.find((elem) => {return elem.id === focusId})
}


const FocusPage = () => {

    const focusArea = useFocusArea()
    if (focusArea === undefined) {
        return (
            <>
                <Typography>Page not found</Typography>
            </>
        )
    } else {
        return (
            <>
                <FocusHeader focusArea={focusArea} />
                <Outlet />
            </>

        )
    }
}

export default FocusPage