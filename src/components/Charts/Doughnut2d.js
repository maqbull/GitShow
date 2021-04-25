import React from 'react';
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Doughnut2d = ({data}) => {
  const chartConfigs = {
    type: "doughnut2d", // The chart type
   // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Stars Per Languages",
        decimals: 0,
        theme: "candy",
        doughnutRadius: '40%',
        showPercentValues: 0,
        // paletteColors: '#f0db4f', for colors
      },
      // Chart Data
      data,
    }
  };
  return (<ReactFC {...chartConfigs} />);

};


export default Doughnut2d;