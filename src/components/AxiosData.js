
import React from 'react';
import axios from 'axios';

const apiKey = "EbH7m3m1bUzT6Mbb40YMiGU1rxhYl04T";
const baseUrl = "https://api.polygon.io/v2/aggs/ticker";

const getStockPrices = async (symbols) => {
    const toDate = new Date().toISOString().split("T")[0];
    const fromDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0];

    const requests = symbols.map((symbol) =>
        axios.get(
            `${baseUrl}/${symbol}/range/1/day/${fromDate}/${toDate}?adjusted=true&sort=asc&limit=120&apiKey=${apiKey}`
        )
    );

    const responses = await Promise.all(requests);

    const data = responses.map((response) => response.data.results);

    return data;
};


