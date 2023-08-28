import React, { useEffect } from "react";
import { GetCard } from "./TableComp";
import Chart from 'chart.js/auto';
import $ from 'jquery'; // Import jQuery

function ShowDashBoard() {

    useEffect(() => {
        //Get the context of the Chart canvas element we want to select
            var ctx = $("#column-chart");

            // Chart Options
            var chartOptions = {
                // Elements options apply to all of the options unless overridden in a dataset
                // In this case, we are setting the border of each bar to be 2px wide and green
                elements: {
                    rectangle: {
                        borderWidth: 2,
                        borderColor: 'rgb(0, 255, 0)',
                        borderSkipped: 'bottom'
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                responsiveAnimationDuration:500,
                legend: {
                    position: 'top',
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: "#f3f3f3",
                            drawTicks: false,
                        },
                        scaleLabel: {
                            display: true,
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: "#f3f3f3",
                            drawTicks: false,
                        },
                        scaleLabel: {
                            display: true,
                        }
                    }]
                },
                title: {
                    display: true,
                    text: 'Yearly Chart'
                }
            };

            // Chart Data
            var chartData = {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets: [{
                    label: "Total Sales",
                    data: [65, 85, 40, 81, 56, 75, 65, 85, 40, 81, 56, 75],
                    backgroundColor: "#28D094",
                    hoverBackgroundColor: "rgba(40,208,148,.9)",
                    borderColor: "transparent"
                }, {
                    label: "Total Expenses",
                    data: [45, 65, 65, 19, 86, 35, 65, 85, 40, 81, 56, 75],
                    backgroundColor: "#FF4961",
                    hoverBackgroundColor: "rgba(255,73,97,.9)",
                    borderColor: "transparent"
                }]
            };

            var config = {
                type: 'bar',

                // Chart Options
                options : chartOptions,

                data : chartData
            };

            // Create the chart
            var lineChart = new Chart(ctx, config);
    }, []); // Empty dependency array to mimic componentDidMount

    useEffect(() => {
        //Get the context of the Chart canvas element we want to select
            var ctx = $("#column-weekly-chart");

            // Chart Options
            var chartOptions = {
                // Elements options apply to all of the options unless overridden in a dataset
                // In this case, we are setting the border of each bar to be 2px wide and green
                elements: {
                    rectangle: {
                        borderWidth: 2,
                        borderColor: 'rgb(0, 255, 0)',
                        borderSkipped: 'bottom'
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                responsiveAnimationDuration:500,
                legend: {
                    position: 'top',
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: "#f3f3f3",
                            drawTicks: false,
                        },
                        scaleLabel: {
                            display: true,
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: "#f3f3f3",
                            drawTicks: false,
                        },
                        scaleLabel: {
                            display: true,
                        }
                    }]
                },
                title: {
                    display: true,
                    text: 'Yearly Chart'
                }
            };

            // Chart Data
            var chartData = {
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [{
                    label: "Total Sales",
                    data: [65, 85, 40, 81, 56, 75, 40],
                    backgroundColor: "#28D094",
                    hoverBackgroundColor: "rgba(40,208,148,.9)",
                    borderColor: "transparent"
                }, {
                    label: "Total Expenses",
                    data: [45, 65, 65, 19, 86, 35, 65],
                    backgroundColor: "#FF4961",
                    hoverBackgroundColor: "rgba(255,73,97,.9)",
                    borderColor: "transparent"
                }]
            };

            var config = {
                type: 'bar',

                // Chart Options
                options : chartOptions,

                data : chartData
            };

            // Create the chart
            var lineChart = new Chart(ctx, config);
    }, []); 

    return (
        <>
            <GetCard heading="DashBoard">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Trade Club Yearly Chart</h4>
                                <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3"></i></a>
                                <div className="heading-elements">
                                    {/* ... */}
                                </div>
                            </div>
                            <div className="card-content collapse show">
                                <div className="card-body">
                                    <div className="height-400">
                                        <canvas id="column-chart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </GetCard>

                    <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Trade Club Weekly Chart</h4>
                                        <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3"></i></a>
                                        <div className="heading-elements">
                                            {/* ... */}
                                        </div>
                                    </div>
                                    <div className="card-content collapse show">
                                        <div className="card-body">
                                            <div className="height-400">
                                                <canvas id="column-weekly-chart"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Trade Club Total Report</h4>
                                    </div>
                                    <div className="card-content collapse show">
                                        <div className="card-body">
                                            <div className="height-400">
                                            <div class="table-responsive">
                                                <table class="table">
                                                        <tr>
                                                             <td><b>Total Products</b></td>
                                                             <td>14</td>
                                                        </tr>
                                                        <tr>
                                                             <td><b>Total Sale</b></td>
                                                             <td>24</td>
                                                        </tr>
                                                        <tr>
                                                             <td><b>Total Expense</b></td>
                                                             <td>14</td>
                                                        </tr>
                                                        <tr>
                                                             <td><b>Total Buyers</b></td>
                                                             <td>34</td>
                                                        </tr>
                                                        <tr>
                                                             <td><b>Total Products</b></td>
                                                             <td>14</td>
                                                        </tr>
                                                        <tr>
                                                             <td><b>Quantity Sold</b></td>
                                                             <td>10</td>
                                                        </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
}

export default ShowDashBoard;
