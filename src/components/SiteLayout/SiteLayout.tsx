import React from 'react'
import {
    AppBar,
    BottomNavigation,
    BottomNavigationAction,
    Container,
    Grid,
    Paper,
    Toolbar,
    Typography,
    Link,
} from "@mui/material";
import {Outlet} from "react-router-dom";
import Copyright from "../Copyright/Copyright";
import {Link as RouterLink} from 'react-router-dom'
import {useLanguage} from "../../libs/translations";
// import LanguageSelector from "../LanguageSelector/LanguageSelector";

export interface SiteLayoutOptions {
    language: string,
    setLanguage: (value: (((prevState: string) => string) | string)) => void,
}

const SiteLayout = ({language, setLanguage}:SiteLayoutOptions) => {
    const trans = useLanguage().global
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Link to={"/"} component={RouterLink} sx={{margin: "auto"}} >
                        <Typography variant="h1" color="white">{trans.title}</Typography>
                    </Link>
                    {/*<LanguageSelector language={language} setLanguage={setLanguage} />*/}
                </Toolbar>
            </AppBar>

            <Container component="main" maxWidth={"lg"} style={{marginTop: ".8em"}}>
                <Outlet/>
            </Container>

            <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0, marginTop: "1em" }} elevation={3}>
                <Grid container>
                    <Grid item sm={2} md={2} lg={2}>&nbsp;</Grid>
                    <Grid item sm={8} md={2} lg={8}>
                        <BottomNavigation showLabels>
                            <BottomNavigationAction component={RouterLink} to={"/"} label={trans.navToHome} />
                            <BottomNavigationAction component={RouterLink} to={"/directory"} label={trans.navToDirectory} />
                        </BottomNavigation>
                    </Grid>
                    <Grid item sm={0} md={2} lg={2} sx={{display: {xs: 'none', md: 'block', lg: 'block'}}}>
                        <Copyright />
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default SiteLayout