import React, { useState } from 'react';
import ReactApexChart from "react-apexcharts";

function TokenomicsChart() {

  const [Area, setArea] = useState({
    series: [40, 20, 15, 6, 5, 5, 5, 2, 2],
    options: {
      colors: ['#5CABED', '#AECCFE', '#8DCED8', '#BDEEAE', '#FFABAB', '#FFF2CE', '#F66AA2', '#CFE0E3', '#76FB4B'],
      chart: {
        width: 380,
      },
      labels: ['NFT Rewards', 'Staking Rewards / Farming', 'Ecosystem / Products', 'Development Team', 'Marketing', 'Partnership', 'Private Sale', 'Advisors', 'LP'],
      fill: {
        opacity: 1
      },
      states: {
        active: {
          filter: {
            type: 'none'
          }
        },
        hover: {
          filter: {
            type: 'none'
          }
        }
      },
      stroke: {
        show: false
      },
      plotOptions: {
        pie: {
          expandOnClick: false
        }
      },
      legend: {
        show: false,
        position: 'bottom',
        formatter: function (val, opts) {
          return opts.w.config.series[opts.seriesIndex] + '%'
        },
        labels: {
          colors: "#9EACC9"
        },
        onItemHover: {
          highlightDataSeries: false
        },
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        y: {
          formatter: function (value) {
            return value + '%';
          }
        }
      }
    },
  });

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="tokenomics-chart mb-5 mb-lg-0">
            <ReactApexChart options={Area.options} series={Area.series} type="pie" />
          </div>
        </div>
        <div className="col-lg-6">
          <ul className="tokenomics-legends">
            {
              Area.series.map((el, i) => {
                return (
                  <li className="d-flex align-items-center gap-4" key={i}>
                    <div style={{ backgroundColor: Area.options.colors[i] }}>{el + '%'}</div>
                    <span>{Area.options.labels[i]}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TokenomicsChart;