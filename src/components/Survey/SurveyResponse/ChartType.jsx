import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip);

const data = {
    labels: ['Very Low', 'Low', 'Average', 'High', 'Very High'],
    datasets: [
        {
            data: [100, 100, 100, 100, 100],
            backgroundColor: ['Red', '#E49694', 'yellow', '#6DDFA7', 'green'],
            borderWidth: 0,
        },
    ],
};

const options = {
    rotation: -90,
    circumference: 180,
    cutout: '50%',
    responsive: true
};

const chartLevels = [
    { id: 1, label: 'Very Low', color: 'red' },
    { id: 2, label: 'Low', color: 'var(--color-low)' },
    { id: 3, label: 'Average', color: 'yellow' },
    { id: 4, label: 'High', color: 'var(--color-high)' },
    { id: 5, label: 'Very High', color: 'green' },
]

export default function ChartType({ value }) {
    if (!value) return null

    return (
        <div className="row gap-3 justify-content-center">
            {chartLevels.map((item, index) => (
                <div
                    key={index}
                    className="col-lg-2 col-md-12 col-sm-12 d-flex flex-column align-items-center"
                    style={{ opacity: item.id === value ? 1 : 0.5 }}
                >
                    <div className="doughnut-layout mb-2">
                        <Doughnut data={data} options={options} />
                    </div>
                    <div className="form-check d-flex flex-column align-items-center p-0">
                        <label className="form-check-label" htmlFor={`chart-${item.id}`}>
                            {item.label}
                        </label>
                        <input
                            className="form-check-input mx-0"
                            type="radio"
                            name="chart-response"
                            checked={value === item.id}
                            readOnly
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}