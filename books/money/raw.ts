import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import {
  Chart,
  registerables
} from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.html',
  styleUrls: ['./chapter1.css'],
})
export class Chapter1 implements AfterViewInit, OnDestroy {

  @ViewChild('painEscapeCanvas')
  painEscapeCanvas!: ElementRef<HTMLCanvasElement>;

  @ViewChild('normalAmplifierCanvas')
  normalAmplifierCanvas!: ElementRef<HTMLCanvasElement>;

  @ViewChild('painTransformerCanvas')
  painTransformerCanvas!: ElementRef<HTMLCanvasElement>;

  @ViewChild('pricingCanvas')
  pricingCanvas!: ElementRef<HTMLCanvasElement>;

  @ViewChild('unifiedGridCanvas')
  unifiedGridCanvas!: ElementRef<HTMLCanvasElement>;

  private charts: Chart[] = [];
  @ViewChild('valueFlowCanvas')
valueFlowCanvas!: ElementRef<HTMLCanvasElement>;

// Add to ngAfterViewInit


  // ... existing charts ...


  /* =========================
     LIFECYCLE HOOK
  ========================= */
  ngAfterViewInit(): void {
    // Small delay to ensure DOM is fully rendered
    setTimeout(() => {
      this.createPainEscapeChart();
      this.createNormalAmplifierChart();
      this.createPainTransformerChart();
      this.createPricingChart();
      this.createUnifiedGridChart();
        this.createValueFlowSankeyChart();
    }, 100);
  }

  /* =========================
     PAIN ESCAPE CHART
  ========================= */
  
  createPainEscapeChart(): void {
    if (!this.painEscapeCanvas) return;

    const chart = new Chart(this.painEscapeCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Current State\n(Pain)', 'JUMP\nMagnitude: +6', 'Target State\n(Normal)'],
        datasets: [{
          label: 'State Value',
          data: [2, 6, 8],
          backgroundColor: [
            'rgba(220, 38, 38, 0.7)',
            'rgba(202, 138, 4, 0.7)',
            'rgba(22, 163, 74, 0.7)'
          ],
          borderColor: [
            'rgba(220, 38, 38, 1)',
            'rgba(202, 138, 4, 1)',
            'rgba(22, 163, 74, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Pain Escape (Pain → Normal)',
            font: { size: 14, weight: 'bold' }
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 18,
            title: {
              display: true,
              text: 'Well-being Scale'
            },
            ticks: {
              stepSize: 2
            }
          }
        }
      }
    });

    this.charts.push(chart);
  }

  /* =========================
     NORMAL AMPLIFIER CHART
  ========================= */
  createNormalAmplifierChart(): void {
    if (!this.normalAmplifierCanvas) return;

    const chart = new Chart(this.normalAmplifierCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Current State\n(Normal)', 'JUMP\nMagnitude: +6', 'Target State\n(Pleasure)'],
        datasets: [{
          label: 'State Value',
          data: [8, 6, 14],
          backgroundColor: [
            'rgba(202, 138, 4, 0.7)',
            'rgba(59, 130, 246, 0.7)',
            'rgba(147, 51, 234, 0.7)'
          ],
          borderColor: [
            'rgba(202, 138, 4, 1)',
            'rgba(59, 130, 246, 1)',
            'rgba(147, 51, 234, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Normal Amplifier (Normal → Pleasure)',
            font: { size: 14, weight: 'bold' }
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 18,
            title: {
              display: true,
              text: 'Well-being Scale'
            },
            ticks: {
              stepSize: 2
            }
          }
        }
      }
    });

    this.charts.push(chart);
  }

  /* =========================
     PAIN TRANSFORMER CHART
  ========================= */
  createPainTransformerChart(): void {
    if (!this.painTransformerCanvas) return;

    const chart = new Chart(this.painTransformerCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Current State\n(Pain)', 'JUMP\nMagnitude: +15', 'Target State\n(Pleasure)'],
        datasets: [{
          label: 'State Value',
          data: [1, 15, 16],
          backgroundColor: [
            'rgba(220, 38, 38, 0.7)',
            'rgba(234, 88, 12, 0.7)',
            'rgba(147, 51, 234, 0.7)'
          ],
          borderColor: [
            'rgba(220, 38, 38, 1)',
            'rgba(234, 88, 12, 1)',
            'rgba(147, 51, 234, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Pain Transformer (Pain → Pleasure)',
            font: { size: 14, weight: 'bold' }
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 18,
            title: {
              display: true,
              text: 'Well-being Scale'
            },
            ticks: {
              stepSize: 2
            }
          }
        }
      }
    });

    this.charts.push(chart);
  }

  /* =========================
     PRICING CHART
  ========================= */
  createPricingChart(): void {
    if (!this.pricingCanvas) return;

    const chart = new Chart(this.pricingCanvas.nativeElement, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Pain Escape',
            data: [
              { x: 3, y: 50 },
              { x: 5, y: 200 },
              { x: 7, y: 5000 },
              { x: 8, y: 10000 }
            ],
            borderColor: 'rgba(220, 38, 38, 1)',
            backgroundColor: 'rgba(220, 38, 38, 0.8)',
            pointRadius: 6,
            pointHoverRadius: 8,
            showLine: true,
            tension: 0.4
          },
          {
            label: 'Normal Amplifier',
            data: [
              { x: 2, y: 10 },
              { x: 4, y: 50 },
              { x: 6, y: 500 },
              { x: 8, y: 5000 },
              { x: 10, y: 100000 }
            ],
            borderColor: 'rgba(59, 130, 246, 1)',
            backgroundColor: 'rgba(59, 130, 246, 0.8)',
            pointRadius: 6,
            pointHoverRadius: 8,
            showLine: true,
            tension: 0.4
          },
          {
            label: 'Pain Transformer',
            data: [
              { x: 8, y: 2000 },
              { x: 10, y: 10000 },
              { x: 13, y: 50000 },
              { x: 16, y: 200000 }
            ],
            borderColor: 'rgba(147, 51, 234, 1)',
            backgroundColor: 'rgba(147, 51, 234, 0.8)',
            pointRadius: 6,
            pointHoverRadius: 8,
            showLine: true,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Value-Jump Pricing Grid',
            font: { size: 14, weight: 'bold' }
          },
          legend: {
            display: true,
            position: 'bottom'
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const point = context.raw as { x: number; y: number };
                return `Jump Magnitude: ${point.x}, Price: $${point.y.toLocaleString()}`;
              }
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Jump Magnitude'
            },
            min: 0,
            max: 18
          },
          y: {
            type: 'logarithmic',
            title: {
              display: true,
              text: 'Price ($)'
            },
            ticks: {
              callback: (value) => {
                if (value === 1) return '$1';
                if (value === 10) return '$10';
                if (value === 100) return '$100';
                if (value === 1000) return '$1K';
                if (value === 10000) return '$10K';
                if (value === 100000) return '$100K';
                return '';
              }
            }
          }
        }
      }
    });

    this.charts.push(chart);
  }

  /* =========================
     UNIFIED VALUE GRID CHART
  ========================= */
  createUnifiedGridChart(): void {
    if (!this.unifiedGridCanvas) return;

    // Define boundaries
    const painThreshold = 4;
    const normalThreshold = 8;
    const yMin = 0;
    const yMax = 18;
    const xMax = 18;

    const chart = new Chart(this.unifiedGridCanvas.nativeElement, {
      type: 'line',
      data: {
        datasets: [
          // Pain Zone (x: 0-4) - bottom-left red area
          {
            label: 'Pain Zone (0-4)',
            data: [
              { x: 0, y: painThreshold },
              { x: painThreshold, y: painThreshold },
              { x: painThreshold, y: yMin },
              { x: 0, y: yMin },
              { x: 0, y: painThreshold }
            ],
            borderColor: 'rgba(220, 38, 38, 0.8)',
            backgroundColor: 'rgba(220, 38, 38, 0.15)',
            borderWidth: 2,
            fill: true,
            pointRadius: 0,
            tension: 0
          },
          // Normal Zone (x: 4-8) - middle yellow area
          {
            label: 'Normal Zone (5-8)',
            data: [
              { x: painThreshold, y: normalThreshold },
              { x: normalThreshold, y: normalThreshold },
              { x: normalThreshold, y: yMin },
              { x: painThreshold, y: yMin },
              { x: painThreshold, y: normalThreshold }
            ],
            borderColor: 'rgba(202, 138, 4, 0.8)',
            backgroundColor: 'rgba(202, 138, 4, 0.15)',
            borderWidth: 2,
            fill: true,
            pointRadius: 0,
            tension: 0
          },
          // Pleasure/Heaven Zone (x: 8-18) - top-right green area
          {
            label: 'Pleasure/Heaven Zone (9-18)',
            data: [
              { x: normalThreshold, y: yMax },
              { x: xMax, y: yMax },
              { x: xMax, y: yMin },
              { x: normalThreshold, y: yMin },
              { x: normalThreshold, y: yMax }
            ],
            borderColor: 'rgba(22, 163, 74, 0.8)',
            backgroundColor: 'rgba(22, 163, 74, 0.15)',
            borderWidth: 2,
            fill: true,
            pointRadius: 0,
            tension: 0
          },
          // Diagonal reference line
          {
            label: 'Optimal Value Path',
            data: [
              { x: 0, y: 0 },
              { x: 18, y: 18 }
            ],
            borderColor: 'rgba(75, 85, 99, 0.4)',
            borderWidth: 1,
            borderDash: [8, 4],
            fill: false,
            pointRadius: 0,
            tension: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'The Unified Value Grid',
            font: { size: 16, weight: 'bold' },
            padding: { bottom: 16 }
          },
          subtitle: {
            display: true,
            text: 'All commerce maps onto these three zones',
            font: { size: 12, style: 'italic' },
            padding: { bottom: 16 }
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 20,
              font: { size: 12 }
            }
          }
        },
        scales: {
          x: {
            type: 'linear',
            min: 0,
            max: 18,
            title: {
              display: true,
              text: 'State Value →',
              font: { size: 13, weight: 'bold' }
            },
            ticks: {
              stepSize: 2,
              callback: (value) => [0, 4, 8, 12, 16, 18].includes(Number(value)) ? value : ''
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.08)'
            }
          },
          y: {
            type: 'linear',
            min: 0,
            max: 18,
            title: {
              display: true,
              text: 'Well-being / Functionality ↑',
              font: { size: 13, weight: 'bold' }
            },
            ticks: {
              stepSize: 2,
              callback: (value) => [0, 4, 8, 12, 16, 18].includes(Number(value)) ? value : ''
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.08)'
            }
          }
        }
      }
    });

    this.charts.push(chart);
  }

  createValueFlowSankeyChart(): void {
    if (!this.valueFlowCanvas) return;

    // Create custom HTML-based flow diagram using Chart.js annotations
    const chart = new Chart(this.valueFlowCanvas.nativeElement, {
      type: 'scatter',
      data: {
        datasets: [
          // Nodes
          {
            label: 'Nodes',
            data: [
              { x: 0, y: 6, label: 'Skill Applied to Form' },
              { x: 0, y: 3, label: 'Inert Product (Shelf)' },
              { x: 1, y: 6, label: 'Feature to State Shift' },
              { x: 1, y: 3, label: 'Perceived Surplus in Mind' },
              { x: 2, y: 4.5, label: 'First Experience' },
              { x: 3, y: 6, label: 'Surplus Confirmed' },
              { x: 3, y: 3, label: 'Deficit/Buyer Remorse' },
              { x: 4, y: 5, label: 'Habit & Peak Experiences' },
              { x: 5, y: 5, label: 'Last Impression' },
              { x: 6, y: 6, label: 'Return Rate HIGH' },
              { x: 6, y: 3, label: 'Churn & Bad Review' },
              { x: 7, y: 4.5, label: 'Brand Equity' }
            ],
            backgroundColor: 'rgba(75, 85, 99, 1)',
            pointRadius: 8,
            pointHoverRadius: 12
          },
          // Connections (drawn as lines)
          {
            label: 'Flow 1',
            data: [
              { x: 0, y: 6 },
              { x: 0, y: 3 }
            ],
            borderColor: 'rgba(59, 130, 246, 0.6)',
            borderWidth: 3,
            showLine: true,
            pointRadius: 0,
            fill: false
          },
          {
            label: 'Flow 2',
            data: [
              { x: 0, y: 3 },
              { x: 1, y: 6 },
              { x: 1, y: 3 }
            ],
            borderColor: 'rgba(234, 88, 12, 0.6)',
            borderWidth: 3,
            showLine: true,
            pointRadius: 0,
            fill: false
          },
          {
            label: 'Flow 3',
            data: [
              { x: 1, y: 3 },
              { x: 2, y: 4.5 }
            ],
            borderColor: 'rgba(22, 163, 74, 0.6)',
            borderWidth: 3,
            showLine: true,
            pointRadius: 0,
            fill: false
          },
          {
            label: 'Flow 4',
            data: [
              { x: 2, y: 4.5 },
              { x: 3, y: 6 },
              { x: 3, y: 3 }
            ],
            borderColor: 'rgba(147, 51, 234, 0.6)',
            borderWidth: 3,
            showLine: true,
            pointRadius: 0,
            fill: false
          },
          {
            label: 'Flow 5',
            data: [
              { x: 3, y: 6 },
              { x: 4, y: 5 }
            ],
            borderColor: 'rgba(34, 197, 94, 0.6)',
            borderWidth: 3,
            showLine: true,
            pointRadius: 0,
            fill: false
          },
          {
            label: 'Flow 6',
            data: [
              { x: 4, y: 5 },
              { x: 5, y: 5 }
            ],
            borderColor: 'rgba(168, 85, 247, 0.6)',
            borderWidth: 3,
            showLine: true,
            pointRadius: 0,
            fill: false
          },
          {
            label: 'Flow 7',
            data: [
              { x: 5, y: 5 },
              { x: 6, y: 6 },
              { x: 6, y: 3 }
            ],
            borderColor: 'rgba(236, 72, 153, 0.6)',
            borderWidth: 3,
            showLine: true,
            pointRadius: 0,
            fill: false
          },
          {
            label: 'Flow 8',
            data: [
              { x: 6, y: 6 },
              { x: 7, y: 4.5 }
            ],
            borderColor: 'rgba(14, 165, 233, 0.6)',
            borderWidth: 3,
            showLine: true,
            pointRadius: 0,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Value Flow Architecture',
            font: { size: 16, weight: 'bold' }
          },
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const point = context.raw as any;
                if (point.label) {
                  return point.label;
                }
                return '';
              }
            }
          }
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Value Flow Progression →',
              font: { size: 13, weight: 'bold' }
            },
            min: -0.5,
            max: 7.5,
            ticks: {
              display: false
            },
            grid: {
              display: false
            }
          },
          y: {
            display: true,
            min: 1,
            max: 7,
            ticks: {
              display: false
            },
            grid: {
              display: false
            }
          }
        }
      }
    });

    this.charts.push(chart);
  }

  /* =========================
     CLEANUP
  ========================= */
  ngOnDestroy(): void {
    this.charts.forEach(chart => chart.destroy());
    this.charts = [];
  }
}
