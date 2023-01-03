import React from 'react'
import {
    Avatar,
    Box,
    Card,
    Divider,
    Button,
    List,
    ListItem,
    Stack,
    TextField,
    Typography
} from "@mui/material"
import avatarImg from './avatar1.jpg'
import {LocationOn} from "@mui/icons-material"
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch'
import {Link as RouterLink} from 'react-router-dom'


const results = []

const PractitionerCard = () => {
    return (
        <Card>
            <Box sx={{p: 2, display: 'flex', backgroundColor: 'background.paper'}}>
                <Avatar sx={{width: 112, height: 112}} variant="rounded" src={avatarImg} style={{marginRight: "1em"}}/>
                <Stack spacing={0.5}>
                    <Typography fontWeight={700}>Gilbert Dorian</Typography>
                    <Typography variant="subtitle1">It/It/It</Typography>
                    <Typography variant="body2" color="text.secondary">
                        <LocationOn /> Eastleigh, Hampshire, UK
                    </Typography>
                </Stack>
                <Button
                    variant="outlined"
                    component={RouterLink}
                    to="/practitioners/isabelle-delannoy"
                    endIcon={<ContentPasteSearchIcon fontSize="inherit"/>}
                    sx={{marginLeft: "auto", marginRight: "1em", my: "auto", color: 'primary.main'}}
                    size="large"
                    aria-label="Click for more detail about Gilbert Dorian"
                >
                    View Profile
                </Button>
            </Box>
            <Divider/>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{px: 2, py: 1, backgroundColor: 'background.paper'}}
            >
                <Typography variant="body2">
                    Sociala nätverk kan aldrig fånga en fisk. Denna text har skapats automatiskt och är egentligen bara
                    en massa text som satts ihop. Hur länge har du sparat den där fisken? Då tar jag upp den lilla på
                    min arm. Glada fiskar hoppar alltid ner för strömmen när de är på väg till affären. Vi har alltid
                    några glada tillrop när man gör ett mål i basket. Att man på senare år har använt tolv dagar; det är
                    katastrof! Att man färdas med flock betyder ju inte att man aldrig kan flyga.
                </Typography>
                {/*<Chip>Active account</Chip>*/}
            </Stack>
        </Card>
    )
}


const PractitionersSearchPage = () => {
    return (
        <>
            <TextField fullWidth label="Search for a practictioner"/>
            <Typography variant="h5">Search Results ({results.length})</Typography>
            <List>
                <ListItem><PractitionerCard/></ListItem>
                <ListItem><PractitionerCard/></ListItem>
                <ListItem><PractitionerCard/></ListItem>
                <ListItem><PractitionerCard/></ListItem>
                <ListItem><PractitionerCard/></ListItem>
                <ListItem><PractitionerCard/></ListItem>
            </List>
        </>
    )
}

export default PractitionersSearchPage