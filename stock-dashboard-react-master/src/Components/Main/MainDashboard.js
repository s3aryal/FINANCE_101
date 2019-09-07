import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { parse } from "papaparse";
import MUIDataTable from "mui-datatables";
import { Row, Col } from "reactstrap";
import { styles } from "../commonStyles/ModuleItemListStyles";
// import { styles } from "./styles.css";
import { withStyles } from "@material-ui/core";
import CSVParsingChart from "../CSVParsing/CSVParsingChart";
import StockChart from "./StockChart";
const omit = require("lodash.omit");
const flatten = require("lodash.flatten");

const dropzoneStyle = {
  width: 250,
  height: 90,
  borderWidth: 2,
  borderColor: "rgb(102, 102, 102)",
  borderStyle: "dashed",
  borderRadius: 5,
  margin: "0 auto"
};

const formattedDataForHighChartsStocks = data => {
  return data.map(obj => {
    let omittedObject = omit(obj, [
      "Open",
      "High",
      "Low",
      "Adj Close",
      "Volume"
    ]);
    return Object.values(omittedObject);
  });
};

// Two Functions to return the data as an array XAxis values and YAxis values for rendering the ReactHighChart data. But if I am rendering the stock data - then use the above function instead formattedDataForHighChartsStocks ()
const formattedDataForXAxisForHighChart = data => {
  let result = [];
  data.map((obj, index) => {
    let omittedObject = omit(obj, [
      "Open",
      "High",
      "Low",
      "Close",
      "Adj Close",
      "Volume"
    ]);
    return (result[index] = Object.values(omittedObject));
  });
  return flatten(result);
};

const formattedDataForYAxisForHighChart = data => {
  let result = [];
  data.map((obj, index) => {
    let omittedObject = omit(obj, [
      "Date",
      "Open",
      "High",
      "Low",
      "Adj Close",
      "Volume"
    ]);
    return (result[index] = Object.values(omittedObject));
  });
  return flatten(result);
};

class MainDashboard extends Component {
  state = {
    files: [],
    data: [],
    tableState: {},
    rowsPerPage: 10
  };

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    const dataForTableRendering =
      data.length !== 0 ? data.map(i => Object.values(i)) : null;

    const formattedDataForChartStoks = formattedDataForHighChartsStocks(data);

    const formattedXAxisDataForChartLine = formattedDataForXAxisForHighChart(
      data
    );
    const formattedYAxisDataForChartLine = formattedDataForYAxisForHighChart(
      data
    );


    return (
      <React.Fragment>
        <div style={{ marginTop: "50px" }} className={classes.root}>
          <div>
            <StockChart/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(MainDashboard);


      // <React.Fragment>
      //   <p> NIGGA NIGGA NIGGA </p>
      //   <div style={{ marginTop: "50px" }} className={classes.root}>
      //   </div>
      //   <div id="chart"/>
      //   <script src="StockChart.js"/>
      // </React.Fragment>

/*
{console.log("FORMATTED DATA IS ", dataForTableRendering)}
*/

/* 1> Explanation of why I need to the function formattedDataForHighChartsStocks()

I get the data as below

const data = [
	{
		Date: "2019-03-26",
		Open: 118.620003,
		High: 118.709999,
		Low: 116.849998,
		Close: 117.910004
	},
	{
		Date: "2019-03-27",
		Open: 117.879997,
		High: 118.209999,
		Low: 115.519997,
		Close: 116.769997
	}
];

But for HighChartsStocks  - i.e. when I am using the below way of importing

const ReactHighstock = require("react-highcharts/ReactHighstock.src")

I need the data as below

formattedData = [ [ '2019-03-26', 117.910004 ], [ '2019-03-27', 116.769997 ] ]


2>

 */
