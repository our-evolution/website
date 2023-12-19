import useLanguage from "../../../libs/translations/useLanguage";
import {Box, Button, Paper, Stack, Table, TableCell, TableRow, Typography} from "@mui/material";
import React from "react";
import {Link as RouterLink} from "react-router-dom";

const WelcomeSection = () => {
    const trans = useLanguage().index.welcome
    return (
        <>
            {/*<Typography variant="h2" component="h2" gutterBottom>{trans.title}</Typography>*/}

            <Paper elevation={5} sx={{padding: "1.5em", marginTop: "1em"}}>
                <Stack>

                {trans.clientStatement.map((value: string, key: number) => {
                    return (<Typography variant="body1" component="p" gutterBottom key={key}> {value}</Typography>)
                })}
                <Stack direction="row" sx={{margin: "auto",  paddingTop: ".8em" }}>
                    <Button variant="contained"  component={RouterLink} to={"/directory"}>Find a therapist</Button>
                </Stack>
                </Stack>
            </Paper>


        </>
    )
}

export default WelcomeSection;