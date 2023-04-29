import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Container, Menu, MenuItem} from "@mui/material";

function Navbar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" style={{ backgroundColor: 'rgba(23,23,23,0.56)' }}>
            <Container maxWidth="false">
                <Toolbar disableGutters >

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                    <MenuIcon />
                                </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem  onClick={handleCloseNavMenu} sx={{ my: 1 }} className="coolBeans">
                                <Link style={{ color: 'black',textDecoration: 'none' }} to="/" >Main
                                </Link>

                            </MenuItem>
                            <MenuItem  onClick={handleCloseNavMenu} sx={{ my: 1 }} className="coolBeans">
                                <Link style={{color: 'black', textDecoration: 'none'}} to="/Blog">A & M
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} sx={{ my: 1 }} className="coolBeans" >
                                <Link style={{color: 'black', textDecoration: 'none'}} activeClass="active" to="/Shop">Shop
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} sx={{ my: 1 }} className="coolBeans"  >
                                <Link style={{color: 'black', textDecoration: 'none'}} to="/Fintech" activeClass="active">
                                    Fintech
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },  }}>
                                    <Button href="/" variant="outlined"
                                            sx={{ my: 2, display: 'block',ml: 2, borderColor: 'Green' }}
                                            className="coolBeans"
                                    >
                                        <Link to="/" style={{textDecoration: 'none'}} >  <span style={{ color: 'Black' }}>Main</span> </Link>
                                    </Button>

                                    <Button  href="/" variant="outlined"
                                            sx={{ my: 2, display: 'block', ml:1, borderColor: 'Green'
                                            }}
                                             className="coolBeans"
                                    >
                                        <Link to="/Blog" style={{ color: 'black', textDecoration: 'none'  }}> <span style={{ color: 'Black' }}>A & M</span></Link>
                                    </Button>
                                    <Button href="/" variant="outlined"
                                            sx={{ my: 2, color: 'white', display: 'block', ml:1, borderColor: 'Green'  }}
                                            className="coolBeans"
                                    >
                                        <Link to="/Shop" style={{ color: 'white', textDecoration: 'none'  }}><span style={{ color: 'Black' }}>Shop</span></Link>
                                    </Button>
                                    <Button href="/" variant="outlined"
                                            sx={{ my: 2, color: 'white', textDecoration: 'none',  display: 'block', ml:1, borderColor: 'Green' }}
                                            className="coolBeans"
                                    >
                                        <Link to="/Fintech" style={{ color: 'white', textDecoration: 'none'  }}><span style={{ color: 'Black' }}>Fintech</span></Link>
                                    </Button>
                        </Box>




                </Toolbar>
            </Container>
        </AppBar>

    );
}

export default Navbar;