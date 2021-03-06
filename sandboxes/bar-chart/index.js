import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

const data = [
  ["Year", "Visitations", { role: "style" }],
  ["2010", 10, "color: gray"],
  ["2020", 14, "color: #76A7FA"],
  ["2030", 16, "color: blue"],
  ["2040", 22, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
  [
    "2050",
    28,
    "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2"
  ]
];
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Chart chartType="BarChart" width="100%" height="400px" data={data} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
