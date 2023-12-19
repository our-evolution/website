import useLanguage from "../../../libs/translations/useLanguage";
import {Box, Button, Paper, Stack, Table, TableCell, TableRow, Typography} from "@mui/material";
import React from "react";
import {Link as RouterLink} from "react-router-dom";

const GroupSection = () => {
    const trans = useLanguage().index.welcome
    return (
        <>
            <Typography variant="h2" component="h2" gutterBottom>{trans.missionTitle}</Typography>
            <Paper elevation={5} sx={{padding: "1.5em", marginTop: "1em"}}>
                {trans.missionStatement.map((value: string, key: number) => {
                    return (<Typography variant="body1" component="p" gutterBottom key={key}> {value}</Typography>)
                })}
            </Paper>
            <Paper elevation={5} sx={{padding: ".8em", marginTop: ".8em"}}>
                <Stack>
                    <Typography variant="body1" gutterBottom>{trans.purpose}</Typography>
                    <Table>
                        {trans.purposeItems.map((item) => {
                            return (
                                <TableRow key={item.value}>
                                    <TableCell>
                                        <Typography variant="body1" gutterBottom><strong>{item.value}</strong></Typography>
                                    </TableCell>
                                    <TableCell><Typography variant="body1"
                                                           gutterBottom>{item.description}</Typography></TableCell>
                                </TableRow>
                            )
                        })}
                    </Table>
                    <Stack direction="row" spacing={4} sx={{margin: "auto",  paddingTop: ".8em" }}>
                        <Button variant="contained"  component={RouterLink} to={"/directory"}>Find a therapist</Button>
                        <Button variant="contained"  href={"mailto:emma@emmahaynes.co.uk"} >Find training</Button>
                        <Button variant="contained"  href={"mailto:emma@emmahaynes.co.uk"} >Find resources</Button>
                    </Stack>
                </Stack>
            </Paper>
        </>)
}
export default GroupSection