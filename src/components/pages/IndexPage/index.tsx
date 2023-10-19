import React from 'react'
import {Divider} from "@mui/material"
import WelcomeSection from './WelcomeSection'
import FocusSection from "./FocusSection"
//import DirectorySection from "./DirectorySection"
const IndexPage = () => {
    return (
        <>
            <WelcomeSection />
            <Divider sx={{marginBottom: ".8em", marginTop: ".8em"}}/>
            <FocusSection />
            {/*<Divider sx={{marginBottom: ".8em", marginTop: ".8em"}}/>*/}
            {/*<DirectorySection />*/}
        </>
    )
}

export default IndexPage