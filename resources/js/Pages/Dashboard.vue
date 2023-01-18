<template>
    <Layout :title="'Dashboard'" :auth="auth">
        <div class="w-full max-w-7xl m-auto">
            <!-- All errors and messages from other pages which are redirected to this page after submission -->
            <div 
            v-if="flash.message" 
            class="w-full relative flex flex-row flex-wrap gap-4 p-4">
                <p 
                class="relative block w-full text-left text-black font-medium rounded p-4 bg-orange bg-opacity-5 p-2 border border-orange" 
                v-html="flash.message"></p>
            </div>


            <div class="w-full relative flex flex-row gap-4 py-8 px-4">
                <!-- Number of customers statics box -->
                <div class="select-none w-full min-w-[280px] flex-1 rounded bg-warm-blue bg-opacity-80 shadow-md-spread">
                    <!-- Heading row -->
                    <div class="w-full py-2 px-6 flex flex-row justify-between items-center">
                        <!-- Sales icon box -->
                        <div class="w-6 h-6 relative rounded-full">
                            <Customers class="w-6 h-6 text-sm text-black" />
                        </div>
                        <!-- Sales statics bar box -->
                        <div class="w-full max-w-[120px] flex items-center justify-center">
                            <canvas id="customersChart" height="90"></canvas>
                        </div>
                    </div>
                    <!-- Total sale and percentage box -->
                    <div class="w-full flex flex-col gap-0 text-black">
                        <strong class="w-full capitalize tracking-wider text-lg font-bold px-6 pt-2">
                            {{ customers.customerCounter <= 9 ? `0${customers.customerCounter}` : customers.customerCounter }}
                        </strong>
                        <div class="w-full flex flex-row justify-between items-center px-6 pt-0 pb-4 capitalize text-sm tracking-wider font-normal">
                            <strong class="font-normal">
                                {{customers.customers <= 1 ? 'Customer' : 'Customers'}}
                            </strong>
                            <strong class="font-semibold flex flex-row gap-0 items-center">
                                {{ customers.average.toFixed(1) }}%
                                <Increased v-if="customers.avStatus === 'positive'" class="w-4 h-4 text-sm" />
                                <Decreased v-if="customers.avStatus === 'negative'" class="w-4 h-4 text-sm" />
                            </strong>
                        </div>
                    </div>
                </div>
                <!-- Sales statics box -->
                <div class="select-none w-full min-w-[280px] flex-1 rounded bg-green shadow-md-spread">
                    <!-- Heading row -->
                    <div class="w-full py-2 px-6 flex flex-row justify-between items-center">
                        <!-- Sales icon box -->
                        <div class="w-6 h-6 relative rounded-full">
                            <Money class="w-6 h-6 text-sm text-smooth-black" />
                        </div>
                        <!-- Sales statics bar box -->
                        <div class="w-full max-w-[120px] flex items-center justify-center">
                            <canvas id="salesChart" height="90"></canvas>
                        </div>
                    </div>
                    <!-- Number of Sales and percentage box -->
                    <div class="w-full flex flex-col gap-0">
                        <strong class="w-full capitalize text-smooth-black tracking-wider text-lg font-bold px-6 pt-2">
                            {{ invoices.invoiceCounter <= 9 ? `0${invoices.invoiceCounter}` : invoices.invoiceCounter }}
                        </strong>
                        <div class="w-full flex flex-row justify-between items-center px-6 pt-0 pb-4 capitalize text-sm tracking-wider font-normal">
                            <strong class="font-normal">
                                Sales
                            </strong>
                            <strong class="font-semibold flex flex-row gap-0 items-center">
                                {{ invoices.average.toFixed(1) }}%
                                <Increased v-if="invoices.avStatus === 'positive'" class="w-4 h-4 text-sm" />
                                <Decreased v-if="invoices.avStatus === 'negative'" class="w-4 h-4 text-sm" />
                            </strong>
                        </div>
                    </div>
                </div>
                <!-- Orders statics box -->
                <div class="select-none w-full min-w-[280px] flex-1 rounded bg-yellow bg-opacity shadow-md-spread">
                    <!-- Heading row -->
                    <div class="w-full py-2 px-6 flex flex-row justify-between items-center">
                        <!-- Orders icon box -->
                        <div class="w-6 h-6 relative rounded-full">
                            <Orders class="w-6 h-6 text-sm text-smooth-black" />
                        </div>
                        <!-- Orders statics bar box -->
                        <div class="w-full max-w-[120px] flex items-center justify-center">
                            <canvas id="ordersChart" height="90"></canvas>
                        </div>
                    </div>
                    <!-- Number of Orders and percentage box -->
                    <div class="w-full flex flex-col gap-0">
                        <strong class="w-full capitalize text-smooth-black tracking-wider text-lg font-bold px-6 pt-2">
                            3,600
                        </strong>
                        <div class="w-full flex flex-row justify-between items-center px-6 pt-0 pb-4 capitalize text-sm tracking-wider font-normal">
                            <strong class="font-normal">
                                total orders
                            </strong>
                            <strong class="font-semibold flex flex-row gap-0 items-center">
                                +34%
                                <Increased class="w-4 h-4 text-sm text-smooth-black" />
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Google analytics traffic statistics container -->
            <div class="w-full h-auto mt-2 flex flex-row flex-wrap pb-8 px-4">
                <h3 class="w-full text-left capitalize text-smooth-black tracking-wider text-lg capitalize font-semibold py-4">
                    financial analysis
                </h3>
                <!-- Website users statistics -->
                <div class="w-full min-h-64 px-4 py-8 rounded border border-opacity-[0.05] border-smooth-black shadow-sm-spread bg-white-fc">
                    <canvas id="viewAnalytics" width="400"></canvas>
                </div>
            </div>
        </div>
    </Layout>
</template>
<script setup>
    import Layout from '../Layouts/Dashboard'
    import { computed, onMounted } from '@vue/runtime-core';
    import moment from 'moment'
    import Chart from 'chart.js/auto'
    import { 
        UserGroupIcon as Customers,
        CurrencyDollarIcon as Money,
        ArrowSmallUpIcon as Increased,
        ArrowSmallDownIcon as Decreased,
        ShoppingBagIcon as Orders,
    } from '@heroicons/vue/24/outline'

    const props = defineProps({
        auth: Object,
        flash: Object,
        customers: Object,
        invoices: Object,
    })

    const smallChartsOptions = {
        animations: {
            tension: {
                duration: 3000,
                easing: 'linear',
                from: 1,
                to: 0.25,
                loop: false
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        },
        elements: {
            line: {
                borderWidth: 2,
            },
            point: {
                radius: 0.5
            }
        },
        layout: {
            padding: {
                top: 12,
                right: 8
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: false
                },
            },
            x: {
                ticks: {
                    display: false
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        }
    }

    const viewAnalyticsChartOptions = {
        animations: {
            tension: {
                duration: 3000,
                easing: 'linear',
                from: 1,
                to: 0.25,
                loop: false
            }
        },
        plugins: {
            legend: {
                // display: false
            },
            tooltip: {
                // enabled: false
            }
        },
        elements: {
            line: {
                //borderWidth: 2
            },
            point: {
                //radius: 0.5
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                grid: {
                    // display: false,
                    // drawBorder: false
                },
                ticks: {
                    // display: false
                },
            },
            x: {
                ticks: {
                    // display: false
                },
                grid: {
                    // display: false,
                    // drawBorder: false
                }
            }
        }
    }
    
    const drawCustomerChart = () => {
        let ctx = document.getElementById('customersChart').getContext('2d')
        let dates = []
        let data = []
        
        for (let i = 0;i < props.customers.customers.length; i++) {
            dates.push(moment(props.customers.customers[i].date).format('MMM D'))
            data.push(props.customers.customers[i].total)
        }
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Customers',
                    data: data,
                    fill: false,
                    borderColor: '#151630',
                    tension: 0.1
                }]
            },
            options: smallChartsOptions
        })
    }

    const drawSalesChart = () => {
        let ctx = document.getElementById('salesChart').getContext('2d')
        let dates = []
        let data = []
        
        for (let i = 0;i < props.invoices.invoices.length; i++) {
            dates.push(moment(props.invoices.invoices[i].date).format('MMM D'))
            data.push(`${props.invoices.invoices[i].total}`)
        }

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: 'xxx',
                    data: data,
                    fill: false,
                    borderColor: '#151630',
                    tension: 0.1
                }]
            },
            options: smallChartsOptions
        })
    }

    const drawOrdersChart = () => {
        let ctx = document.getElementById('ordersChart').getContext('2d')
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
                datasets: [{
                    label: 'xxx',
                    data: [1240, 1245, 1280, 1285, 1295, 1360, 1380, 1400, 1405, 1408, 1420, 1430, 1450, 1460, 1470, 1600, 1800, 1900, 2200, 2300, 2400, 2900, 2900, 3000, 3100, 3200, 3250, 3400, 3460, 3500, 3600],
                    fill: false,
                    borderColor: '#151630',
                    tension: 0.1
                }]
            },
            options: smallChartsOptions
        })
    }
    
    const drawViewAnalyticsChart = () => {
        let ctx = document.getElementById('viewAnalytics').getContext('2d')
        let dates = []
        let customersData = []
        let salesData = []
        
        for (let i = 0;i < props.customers.customers.length; i++) {
            dates.push(moment(props.customers.customers[i].date).format('MMM D'))
            customersData.push(props.customers.customers[i].total)
        }

        for (let i = 0;i < props.invoices.invoices.length; i++) {
            salesData.push(props.invoices.invoices[i].total)
        }

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [
                    {
                        label: 'Customers',
                        data: customersData,
                        fill: false,
                        borderColor: '#0059bf',
                        tension: 0.1
                    },
                    {
                        label: 'Sales',
                        data: salesData,
                        fill: false,
                        borderColor: '#0ea785',
                        tension: 0.1
                    },
                    {
                        label: 'Orders',
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                        fill: false,
                        borderColor: '#ffce4e',
                        tension: 0.1
                    }
                ]
            },
            options: viewAnalyticsChartOptions
        })
    }

    onMounted (() => {
        drawCustomerChart()
        drawSalesChart()
        drawOrdersChart()
        drawViewAnalyticsChart()
    })
</script>