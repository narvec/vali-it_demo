import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";

import { IconButton, Link } from "@mui/material";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100px",
                backgroundColor: 'rgb(16,14,14)',
            }}>
            <Grid container spacing={2} sx={{marginTop: '0', justifyContent: "space-between"  }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ width: { xs: '100%', sm: 300 }, justifyContent: "center", mx: 'auto', paddingBottom: "10px"}}>
                        <Typography  sx={{ fontSize: 16, textAlign: { xs: "center", sm: "left" }, textTransform: 'uppercase', color: "white"}}>
                           <span style={{ fontFamily: 'bold' }} >About:</span>
                        </Typography>
                        <Typography sx={{ fontSize: 14, textAlign: { xs: "center", sm: "left" }, color: "white" }}>
                            © Author: Mihhail Knajžetski 2023
                        </Typography>
                        <Typography sx={{ fontSize: 14, textAlign: { xs: "center", sm: "left" }, color: "white"}}>
                        Contact me at:  <a href="mailto:mihhail.knjazetski@gmail.com" style={{ color: 'white' }}> mihhail.knjazetski@gmail.com</a>
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4} sx={{marginTop: '0', justifyContent: "right" }} >
                    <Box sx={{ width: { xs: '100%', sm: 300 }, mx: 'auto'}}>
                        <Typography className="social-icons" sx={{ fontSize: 13, color: "white", textAlign: { xs: "center", sm: "left" , md: "center"}}}>
                            <Link href="https://www.instagram.com/narvec/" target="_blank">
                                <IconButton>
                                    <FaInstagram style={{ fontSize: "150%", color: "pink" }} />
                                </IconButton>
                            </Link>
                            <Link href="https://www.linkedin.com/in/mihhail-knjazhetski-b6464951/" target="_blank">
                                <IconButton>
                                    <FaLinkedin style={{ fontSize: "150%", color: "blue" }}  />
                                </IconButton>
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;