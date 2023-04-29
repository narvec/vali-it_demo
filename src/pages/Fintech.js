import React, {useState} from "react";
import Navbar_ from "../components/Navbar_";

import axios from "axios";
import Select from 'react-select'
import LineChart from "../Charts/LineChart";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const apiKey = "EbH7m3m1bUzT6Mbb40YMiGU1rxhYl04T";
const baseUrl = "https://api.polygon.io/v2/aggs/ticker/";

const options = [
    { value: 'AAPL', label: 'Apple Inc.' },
    { value: 'MSFT', label: 'Microsoft Corporation' },
    { value: 'GOOGL', label: 'Alphabet Inc.' },
    { value: 'AMZN', label: 'Amazon.com, Inc.' },
    { value: 'COIN', label: 'Coinbase Global Inc' },
    { value: 'TSLA', label: 'Tesla, Inc. Common Stock' },

];
const today = new Date();
const thirtyDaysAgo = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));
const startDate = thirtyDaysAgo.toISOString().substring(0, 10);
const endDate = today.toISOString().substring(0, 10);



function Fintech() {

    const [chartData, setChartData] = useState([]);


    const handleChange = async (selectedOption) => {
        let url = baseUrl + selectedOption.value + '/range/1/day/' + startDate + '/' + endDate + '?adjusted=true&sort=asc&limit=120&apiKey=' + apiKey;
        console.log(url)
        const response = await axios.get(url)
            .then(response => {
                let list = response.data.results;
                console.log(list)
                setChartData({
                    labels: list.map(x => new Date(x.t).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})),

                    datasets: [
                        {
                            label: "My First dataset",
                            data: list.map(y => y.c),
                            backgroundColor: "rgb(255, 99, 132)",
                            borderColor: "rgb(255, 99, 132)",
                        },
                    ],
                })
                }).catch(error => {
                    console.log('error')
                })
            }


    return (
        <div className="App">
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Navbar_></Navbar_>
            <header className="App-header">
                <Typography variant ="h3">Stock Market</Typography>
            </header>
                <main style={{
                    backgroundColor: 'rgba(229,213,167,0.8)',
                    paddingTop: '20px',
                    minHeight: '20hv'}}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '50%',
                            height: '75%',
                            padding: 0,
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            borderRadius: 2,
                            marginRight: 'auto',
                            marginBottom: '20px',
                            marginLeft: 'auto',
                        }}>
                            <Select options={options} onChange={handleChange}/>
                        </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                            <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    width: '70%',
                                    height: '50%',
                                    padding: 5,
                                    borderRadius: 5,
                                    margin: '0 auto',
                                    marginBottom: '5px',
                                }}>
                                        {Object.keys(chartData).length >0 && <LineChart chartData={chartData}/>}
                        </Box>
                    </Box>


                </main>
            <div style={{ backgroundColor: '#862e2e' }}></div>
        </div>

    );

}
export default Fintech;

