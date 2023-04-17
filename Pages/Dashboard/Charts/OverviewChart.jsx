import React from "react";
import ReactApexChart from "react-apexcharts";

class DashChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 40, 44, 55, 57, 56]
            }, {
                name: 'Total Earning',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 76, 85, 101, 98, 88]
            }],
            options: {
                colors: ['#306FFF', '#30C9C9'],
                chart: {
                    height: 250,
                    type: 'bar',
                    background: 'rgba(0, 0, 0, 0)',
                    toolbar: {
                        show: false
                    }
                },
                xaxis: {
                    axisBorder: {
                        show: false,
                    },
                    labels: {
                        show: true
                    },
                    axisTicks: {
                        show: false
                    },
                    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
                },
                yaxis: {
                    labels: {
                        formatter: function (value) {
                            return value.toFixed(2);
                        }
                    }
                },
                grid: {
                    show: true,
                    borderColor: '#1F1F2B',
                    strokeDashArray: 3,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                tooltip: {
                    show: false
                },
                theme: {
                    mode: "dark",
                    monochrome: {
                        enabled: false,
                        color: '#fff',
                        shadeTo: 'dark',
                        shadeIntensity: 0
                    },
                },
                legend: {
                    show: false
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: ['transparent'],
                    width: 0,
                    dashArray: 0,
                },
                dataLabels: {
                    enabled: false
                }
            },
        };
    };

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="h4">Overview</div>
                    </div>
                </div>
                <div id="dashChart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} />
                </div>
            </>
        )
    }
}

export default DashChart;