import React from 'react'
import {Divider, Typography} from "@mui/material"
import WelcomeSection from './WelcomeSection'
import FocusSection from "./FocusSection"
import GroupSection from "./GroupSection";
//import DirectorySection from "./DirectorySection"
const IndexPage = () => {
    return (
        <>
            <WelcomeSection />
            <Divider sx={{marginBottom: ".8em", marginTop: ".8em"}}/>
            <FocusSection />
            <Divider sx={{marginBottom: ".8em", marginTop: ".8em"}}/>
            <GroupSection />
            <Divider sx={{marginBottom: ".8em", marginTop: ".8em"}}/>
            <Typography variant="h2" component="h2" gutterBottom  align="right" >Your Privacy</Typography>
            <Typography variant="body1" component="div">This website does not store any cookies or any personal identifiable information (PII). We do our very best to preserve your anonymity when visiting this website.</Typography>
            {/*<Divider sx={{marginBottom: ".8em", marginTop: ".8em"}}/>*/}
            {/*<DirectorySection />*/}
        </>
    )
}

export default IndexPage