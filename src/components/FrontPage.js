import { Avatar, Box, Container, Grid, Typography } from "@mui/material";




const FrontPage = () => {

    return (
        <Container>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100vh"
            >
                <Grid 
                    container
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Grid item sm={2}>
                        <Avatar 
                            alt="TS"
                            src="/profile.jpeg"
                            sx={{width: 150, height: 150}}
                        >
                        </Avatar>
                    </Grid>
                    <Grid item sm={8}>
                        <Typography variant="h2" component="div">
                            Thomas Szydlowski
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{margin: "10px"}}>
                            Developer <span>&#183;</span> Gamer <span>&#183;</span> Coffee Addict <span>&#183;</span> Moo
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );

}


export default FrontPage;