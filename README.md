# Project Support Pie Chart

Creation of plugin to be able to alter the configurations of the library js chart

## Prerequisites

You need to have the Chartjs library installed (https://www.chartjs.org/docs/latest/getting-started/installation.html)

```shell
npm install chart.js --save
```

## Installing

To be able to install the plugin you have to install the following library

```shell
npm install support-bar-chart --save
```

## How to use?

### Step 1
You have to import with the following code

```javascript
// Import
import { Component } from '@angular/core';
import * as Chart from 'chart.js'
import 'support-bar-chart';
```
### Step 2

Insert new configuration inside the graph configuration - Pie Chart

```javascript
ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChartwo = new Chart(this.ctxTwo, {
      type: 'horizontalBar',
      data: {
        labels: ["Renda", "Patrimônio Financeiro", "Patrimônio Total", "Operacão alertada"],
        datasets: [
          { 
            barPercentage: 20,
            barThickness: 20,
            maxBarThickness: 18,
            minBarLength:18,
            data: [10, 20, 40, 60],
            label: 'Renda e Patrimônio',
            backgroundColor: [
              "#1C7D77",
              "#DD6100",
              "#0D456F",
              "#EBB264"
            ]
          }
        ]
      },
      options: {
        legend: {
          labels: {
            boxWidth: 3,
            fontSize: 10
          },
          display: true,
          position: "right"
        },
        tooltips: {
          enabled: true
        },
        cornerRadius: 20,  // New Configuration
        title: {
          label: "Horizontal - Bar",
          display: true
        },
        scales: {
          yAxes: [{
            gridLines: {
              drawTicks:true,
              display: false 
            },
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            gridLines: {
              drawOnChartArea: false,
              tickMarkLength: 0,
              color: "#dd6100"
            },
            ticks: {
              callback: function(value, index, values) {
                return 'R$ ' + value;
              }
            }
          }]
        }
      }
    });

```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


