import useLanguage from "../../../libs/translations/useLanguage";
import {Paper, Table, TableCell, TableRow, Typography} from "@mui/material";
import React from "react";

const WelcomeSection = () => {
    const trans = useLanguage().index.welcome
    return (
        <>
            <Typography variant="h2" component="h2" gutterBottom>{trans.title}</Typography>
            <Paper elevation={5} sx={{padding: ".8em", marginTop: ".8em"}}>
                <Typography variant="body1" component="p" gutterBottom>{trans.missionStatement}</Typography>
            </Paper>
            <Paper elevation={5} sx={{padding: ".8em", marginTop: ".8em"}}>
                <Typography variant="body1"  gutterBottom>{trans.purpose}</Typography>
                <Table>
                    {trans.purposeItems.map((item) => {
                        return (
                            <TableRow key={item.value}>
                                <TableCell>
                                    <Typography variant="body1" gutterBottom><strong>{item.value}</strong></Typography>
                                </TableCell>
                                <TableCell><Typography variant="body1"  gutterBottom>{item.description}</Typography></TableCell>
                            </TableRow>
                        )})}
                </Table>
            </Paper>
        </>
    )
}

export default WelcomeSection;