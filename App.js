import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { chartData } from "./mockData";

const StackedColumnChart = () => {
  const options = {
    chart: { type: chartData.chartType },
    title: { text: chartData.title },
    xAxis: { type: "datetime", title: { text: chartData.xAxis.title } },
    yAxis: { title: { text: chartData.yAxis.title }, stackLabels: { enabled: true } },
    legend: { align: "center", verticalAlign: "bottom", layout: "horizontal" },
    plotOptions: { column: { stacking: "normal", dataLabels: { enabled: true } } },
    rangeSelector: { enabled: true, selected: 1 },
    navigator: { enabled: true },
    series: chartData.series
  };

  return <HighchartsReact highcharts={Highcharts} constructorType="stockChart" options={options} />;
};

export default StackedColumnChart;
