import React from "react";
import ReactApexChart from "react-apexcharts";
import ReactDOM from "react-dom";

// code taken and modified from: https://apexcharts.com/react-chart-demos/pie-charts/gradient-donut/
// last visited: 9.11.19

/**
 * Donut Chart
 *
 * @param something
 * 
 * @visComp 
 * @props {string} type [gradient]
 * @props {boolean} dataLabelsEnabled [true]
 */
class DonutChart3 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                dataLabels: {
                    enabled: this.props.type 
                },
                fill: {
                    type: this.props.type, 
                },
                legend: {
                    formatter: function(val, opts) {
                        return val + " - " + opts.w.globals.series[opts.seriesIndex]
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
            series: [44, 55, 41, 17, 15],
        }
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width="100%" />
            </div>
        );
    }
}


export default DonutChart3;

