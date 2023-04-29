import React from "react";
import Navbar_ from '../components/Navbar_'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import axios from "axios";

import {useState} from "react";
import Typography from "@mui/material/Typography";
import {Card, CardContent, List, ListItem, ListItemText} from "@mui/material";


function Blog() {


    const [inputValue, setInputValue] = useState('');// persons
    const [authorData, setAuthorData] = useState([]); // searchTerm and setSearchTerm
    const [musicData, setMusicData] = useState([]); // searchTerm and setSearchTerm

    //----------------------------------------------------------------------------
    async function useAxios() {
        try {
            const response = await axios.get(
                'https://openlibrary.org/search/authors.json?q=' + inputValue
            );
            const authorData = response.data.docs;
            setAuthorData(authorData);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(authorData)
    //------------------------------


    async function useAxios2() {
        try {
            const response = await axios.get(
                'https://musicbrainz.org/ws/2/artist/?query=' + inputValue
            );
            const musicData = response.data.artists;
            const firstMusicData = musicData.slice(0, 1);
            console.log(firstMusicData);
            setMusicData(firstMusicData);
        } catch (error) {
            console.log(error);
        }
    }

   console.log(musicData);

    const handleSearchChange = (event) => {
        setInputValue(event.target.value);
    };


    return (

            <div className="App">
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <Navbar_></Navbar_>
                <header className="App-header">
                    <Typography variant="h4" >Author and Musician retrieving app</Typography>

                </header>
                    <main style={{
                        backgroundColor: 'rgba(229,213,167,0.8)',
                        paddingTop: '20px',
                        minHeight: '20hv',
                        alignItems: 'center',// All components in center
                    }}>


                        <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                  <TextField id="outlined-basic" label="Author or musician" variant="outlined" value={inputValue} onChange={handleSearchChange} />
                                    {authorData.length > 0 && <ul>
                                        {authorData && authorData.map((item) => {
                                            return <li key={item.key}>{item.name}</li>
                                                })}
                                    </ul>}
                            </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                                {musicData.length > 0 &&
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h6" gutterBottom> Artist Details </Typography>
                                            <List>
                                                {musicData.map((item) => (
                                                    <ListItem key={item.id}>
                                                        <ListItemText
                                                            primary={item.name}
                                                            secondary={(
                                                                <React.Fragment>
                                                                    {item.gender}<br />
                                                                    {item.disambiguation}<br/>
                                                                    {item.type}
                                                                </React.Fragment>
                                                            )}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </CardContent>
                                    </Card>
                                }
                        </Box>



                            <Box sx={{justifyContent: 'center', display: 'flex', gap: '16px', margin: '30px' }}>
                                <Button variant="contained" onClick={useAxios} style={{ backgroundColor: 'antiquewhite', color: 'black' }} >
                                    Authors
                                </Button>
                                <Button variant="contained" onClick={useAxios2} style={{ backgroundColor: 'antiquewhite', color: 'black' }}>
                                    MUSICIANS
                                </Button>
                            </Box>
                    </main>

            </div>

    )
}
export default Blog