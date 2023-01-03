import React from 'react'
import {Card, CardContent, Typography} from "@mui/material";
import {Outlet} from "react-router-dom";

const PractitionersPage = () => {
    return (
        <>
            <Typography variant="h2" component="h2" gutterBottom>Our practitioners Directory</Typography>
            <Typography variant="body1" component="p" gutterBottom>
                Sociala nätverk kan aldrig fånga en fisk. Denna text har skapats automatiskt och är egentligen
                bara en massa text som satts ihop. Hur länge har du sparat den där fisken? Då tar jag upp den
                lilla på min arm. Glada fiskar hoppar alltid ner för strömmen när de är på väg till affären. Vi
                har alltid några glada tillrop när man gör ett mål i basket. Att man på senare år har använt tolv
                dagar; det är katastrof! Att man färdas med flock betyder ju inte att man aldrig kan flyga.
            </Typography>
            <Outlet />
        </>
    )
}

export default PractitionersPage