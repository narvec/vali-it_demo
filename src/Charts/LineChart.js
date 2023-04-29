import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

function LineChart({chartData}) {
    return (
        <div >
            <h2 style={{textAlign:"center"}}> Closing value </h2>
        <Line data={chartData}
              options={{
                plugins:{
                    title: {
                    display: true,
                    text: "Stock value of last 30days"},
                    legend:{
                        display: false
                    }
                }
              }
              }
              />
        </div>
    );
}


export default LineChart



