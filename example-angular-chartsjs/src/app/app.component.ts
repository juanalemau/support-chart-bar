import { Component } from '@angular/core';
import * as Chart from 'chart.js';
import 'support-bar-chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8chartjs';
  canvas: any;
  ctx: any;

  canvasTwo: any;
  ctxTwo: any;

  canvasThere: any;
  ctxThere: any;

  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Bar Dataset',
            data: [10000, 200000, 500000, 5000000],
            backgroundColor: "#0d456f"
          }, 
          {
            label: 'Line Dataset',
            data: [200000, 10000, 400000, 4000000],
            backgroundColor: "#1c7d77"
          }
        ],
      labels: ['January', 'February', 'March', 'April']
      },
      options: {
        responsive: true,
        cornerRadius: 20,
        legend: {
          labels: {
            boxWidth: 3,
            fontSize: 10
          },
          display: true,
          position: 'right'
        },
        title: {
          text: "Bar - Char",
          display: true
        },
        scales: {
          yAxes: [{
            gridLines: {
              drawTicks:true,
              display: false 
            },
            ticks: {
              callback: function(value, index, values) {
                return 'R$ ' + value;
              },
              beginAtZero: true,
            }
          }],
          xAxes: [{
            gridLines: {
              drawOnChartArea: false,
              tickMarkLength: 0,
              color: "#dd6100"
            },

            barThickness: 18,  
            maxBarThickness: 30
          }]
        }
      }
    });

    this.canvasTwo = document.getElementById('myChartTwo');
    this.ctxTwo = this.canvasTwo.getContext('2d');
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
        cornerRadius: 20,
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

    this.canvasThere = document.getElementById('myChartThere');
    this.ctxThere = this.canvasThere.getContext('2d');
    let myChartThere = new Chart(this.ctxThere, {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
            backgroundColor: "#0d456f"
          }
        ],
      labels: ['January', 'February', 'March', 'April']
      },
      options: {
        responsive: true,
        cornerRadius: 20,
        legend: {
          labels: {
            boxWidth: 3,
            fontSize: 10
          },
          display: true,
          position: 'right'
        },
        title: {
          text: "Bar - Char",
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
            ticks:{
              maxTicksLimit: 0
            },
            barPercentage: 6,
            categoryPercentage: 6,
            barThickness: 18,  
            maxBarThickness: 30
          }]
        }
      }
    });
  }

}
