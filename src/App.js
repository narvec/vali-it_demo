
import './App.css';

import Navbar_ from "./components/Navbar_";
import Footer from "./components/Footer";
import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {styled} from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgba(35,38,34,0.45)',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginRight: '20px',
  marginLeft: '20px',
  borderRadius: '20px',
  //textColor: 'rgb(200, 227, 117)'

}));



function App() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(isVisible => !isVisible);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (

      <div className="App">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <Navbar_></Navbar_>
        <header className="App-header">
          <Typography variant="h3" sx={{ fontFamily: 'monospace' }} >Hello World<span style={{width: '0.5em', display: 'inline-block'}}>
            {isVisible && '_'}
          </span> </Typography>

        </header>

        <main style={{
          backgroundColor: 'rgba(108,125,133,0.42)',
          paddingTop: '42px',
          paddingBottom: '42px'
          // minHeight: '100hv',
        }}>

          <Box
              sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                padding: 6,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '20px',
                marginRight: 'auto',
                marginBottom: '20px',
                marginLeft: 'auto',
                bgcolor: 'background.paper',
                p: 2,

              }}>
            <Typography variant="h5" gutterBottom sx={{ fontFamily: 'monospace' }}>
              Welcome to my page!
            </Typography>
            <Typography variant="body1" gutterBottom>
              My name is Mihhail, and I recently completed the VALI-IT course for "Front-end Developer and Product Owner & Business Analyst".
            </Typography>
            <Typography variant="body1" gutterBottom>
              As an entry-level developer, I'm excited to show some of the exercises that I completed during the course. These exercises represent the skills and knowledge I gained during my journey to transition into the IT industry.
            </Typography>
            <Typography variant="body1">
              Thank you for visiting my page, and I look forward to continuing to grow and learn as a developer.
            </Typography>

          </Box>

          <Grid container spacing={1}>
            <Grid item xs>
              <Item>
                <Typography variant="h5" gutterBottom sx={{fontWeight:"bold", textAlign: 'center' , color: 'rgb(200, 227, 117)'}}>
                  A & M
                </Typography>
                <Typography sx={{textAlign: 'left', color: 'rgb(233,236,224)'}} variant="body1" gutterBottom>
                  Author and Musician retrieving app is a React-based web application that allows users to search for authors and musicians using OpenLibrary and MusicBrainz APIs.
                </Typography>
                <Typography sx={{textAlign: 'left', color: 'rgb(233,236,224)'}} variant="body1" gutterBottom>
                  When the <span style={{fontWeight:"bold"}}>"Authors"</span> button is clicked, the app retrieves all data related to the searched author's name and displays it in a list format.
                </Typography>
                <Typography sx={{textAlign: 'left', color: 'rgb(233,236,224)'}} variant="body1" gutterBottom>
                  When the <span style={{fontWeight:"bold"}}>"Musicians"</span> button is clicked, only the first musician's data is rendered, showing their name, gender, and disambiguation, based on the search query.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Typography variant="h5" gutterBottom sx={{fontWeight:"bold", textAlign: 'center',  color: 'rgb(200, 227, 117)'}}>
                  SHOP
                </Typography>
                <Typography sx={{textAlign: 'left', color: 'rgb(233,236,224)'}} variant="body1" gutterBottom>
                  The app includes a navbar component and a main component, which displays a list of products fetched from a local data file.
                </Typography>
                <Typography sx={{textAlign: 'left', color: 'rgb(233,236,224)'}} variant="body1" gutterBottom>
                  The user can add or remove products from their shopping cart, which is displayed using a Basket component that is wrapped in a styled Paper component with a custom background color and other styling properties.
                </Typography>
                <Typography sx={{textAlign: 'left', color: 'rgb(233,236,224)'}} variant="body1" gutterBottom>
                  The app also includes some basic styling using Material UI, including typography and spacing. Overall, the app provides a simple and intuitive way for users to browse and purchase products online.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs >
              <Item >
                <Typography variant="h5" gutterBottom sx={{fontWeight:"bold", textAlign: 'center',  color: 'rgb(200, 227, 117)'}}>
                  FINTECH
                </Typography>
                <Typography sx={{textAlign: 'left', color: 'rgb(233,236,224)'}}>
                  Fintech is a React app that displays a stock market chart using data from the Polygon API.
                </Typography>
                <Typography sx={{textAlign: 'left', color: 'rgb(233,236,224)'}}>
                  The user can select a stock from a dropdown menu, and the app will fetch the data for the last 30 days and display it as a line chart.
                </Typography>
                <Typography sx={{textAlign: 'left', color: 'rgb(233,236,224)'}}>
                  The app also includes a navbar and some styling using Material UI.
                </Typography>
              </Item>
            </Grid>
          </Grid>



        </main>
        <Footer />
      </div>

  );
}

export default App;
