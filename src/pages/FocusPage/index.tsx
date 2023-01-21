import React from 'react'
import {Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Paper, Typography} from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import Masonry from '@mui/lab/Masonry'


const FocusHeader = () => {
    return (
        <Paper sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(https://source.unsplash.com/random)`,
        }}
        >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={"https://source.unsplash.com/random"} alt="Section Focus Alt Title" />}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {"Focus Title"}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {"Some focused topic intro words"}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

const FocusPractitioner = () => {
    return (
        <CardActionArea component={RouterLink} to={"/practitioners/random"}>
            <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                        First Name, Last Name, (Pronouns)
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {"qualification"}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        {"blurb"}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                    image={"https://source.unsplash.com/random"}
                    alt={"Random"}
                />
            </Card>
        </CardActionArea>
    )
}


const FocusPage = () => {
    return (
        <>
            <FocusHeader />
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Nec feugiat in fermentum posuere urna nec tincidunt. Facilisis volutpat est velit
                egestas dui. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Donec et odio pellentesque
                diam volutpat commodo sed. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Eu non
                diam phasellus vestibulum lorem sed risus ultricies tristique. Nullam non nisi est sit amet facilisis
                magna etiam. Massa sed elementum tempus egestas sed sed. Feugiat in ante metus dictum at tempor commodo
                ullamcorper a. Justo laoreet sit amet cursus sit amet. Pulvinar elementum integer enim neque volutpat ac
                tincidunt vitae semper. Nec feugiat nisl pretium fusce. Et leo duis ut diam quam nulla porttitor massa.
                Euismod in pellentesque massa placerat. Aliquam id diam maecenas ultricies mi eget mauris. Euismod
                elementum nisi quis eleifend quam adipiscing. At auctor urna nunc id cursus. Fringilla phasellus
                faucibus scelerisque eleifend. Duis at consectetur lorem donec massa sapien.
            </Typography>
            <Typography variant="h3" align={"right"}>Our practitioners</Typography>
            <Divider />
            <Masonry columns={3} spacing={2} style={{marginTop: "1em"}}>
                <FocusPractitioner />
                <FocusPractitioner />
                <FocusPractitioner />
                <FocusPractitioner />
                <FocusPractitioner />
                <FocusPractitioner />
                <FocusPractitioner />
                <FocusPractitioner />
                <FocusPractitioner />
                <FocusPractitioner />
            </Masonry>
        </>
    )
}

export default FocusPage