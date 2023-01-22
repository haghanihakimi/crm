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
                                {{ customers.avStatus === 'positive' ? customers.average.toFixed(1) : `-${customers.average.toFixed(1)}` }}%
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
                            {{ sales.salesCounter <= 9 ? `0${sales.salesCounter}` : sales.salesCounter }}
                        </strong>
                        <div class="w-full flex flex-row justify-between items-center px-6 pt-0 pb-4 capitalize text-sm tracking-wider font-normal">
                            <strong class="font-normal">
                                Sales
                            </strong>
                            <strong class="font-semibold flex flex-row gap-0 items-center">
                                {{ sales.avStatus === 'positive' ? sales.average.toFixed(1) : `-${sales.average.toFixed(1)}` }}%
                                <Increased v-if="sales.avStatus === 'positive'" class="w-4 h-4 text-sm" />
                                <Decreased v-if="sales.avStatus === 'negative'" class="w-4 h-4 text-sm" />
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
                            {{ orders.ordersCounter <= 9 ? `0${orders.ordersCounter}` : orders.ordersCounter }}
                        </strong>
                        <div class="w-full flex flex-row justify-between items-center px-6 pt-0 pb-4 capitalize text-sm tracking-wider font-normal">
                            <strong class="font-normal">
                                Orders
                            </strong>
                            <strong class="font-semibold flex flex-row gap-0 items-center">
                                {{ orders.avStatus === 'positive' ? orders.average.toFixed(1) : `-${orders.average.toFixed(1)}` }}%
                                <Increased v-if="orders.avStatus === 'positive'" class="w-4 h-4 text-sm" />
                                <Decreased v-if="orders.avStatus === 'negative'" class="w-4 h-4 text-sm" />
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
                    <button @click="resetZoom"
                    class="w-fit h-fit px-2 py-1 text-sm font-medium tracking-wide ml-14 mt-4 rounded bg-warm-blue text-white transition duration-500 hover:bg-blue">
                        Reset Zoom
                    </button>
                </div>
            </div>
        </div>
    </Layout>
</template>
<script setup>
    import Layout from '../Layouts/Dashboard'
    import { computed, onMounted } from '@vue/runtime-core';
    import moment from 'moment'
    import { useStore } from 'vuex'
    import Chart from 'chart.js/auto'
    import zoomPlugin from 'chartjs-plugin-zoom';
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
        sales: Object,
        orders: Object,
    })

    const store = useStore()

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
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'xy'
                },
                zoom: {
                    wheel: {
                        enabled: true,
                        mode: 'xy',
                    },
                    drag: {
                        threshold: 1,
                        animationDuration: 500
                    }
                }
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
                beginAtZero: true,
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
        
        for (let i = 0;i < props.sales.sales.length; i++) {
            dates.push(moment(props.sales.sales[i].date).format('MMM D'))
            data.push(`${props.sales.sales[i].total}`)
        }

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: dates,
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
        let dates = []
        let data = []
        for (let i = 0;i < props.sales.sales.length; i++) {
            dates.push(moment(props.sales.sales[i].date).format('MMM D'))
            data.push(`${props.sales.sales[i].total}`)
        }

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: dates,
                    data: data,
                    fill: false,
                    borderColor: '#151630',
                    tension: 0.1
                }]
            },
            options: smallChartsOptions
        })
    }

    let chart = null
    
    const drawViewAnalyticsChart = () => {
        let ctx = document.getElementById('viewAnalytics').getContext('2d')
        let dates = []
        let customersData = []
        let salesData = []
        let ordersData = []
        
        for (let i = 0;i < props.customers.customers.length; i++) {
            dates.push(moment(props.customers.customers[i].date).format('MMM D'))
            customersData.push(props.customers.customers[i].total)
        }

        for (let i = 0;i < props.sales.sales.length; i++) {
            salesData.push(props.sales.sales[i].total)
        }

        for (let i = 0;i < props.orders.orders.length; i++) {
            ordersData.push(props.orders.orders[i].total)
        }

        chart = new Chart(ctx, {
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
                        data: ordersData,
                        fill: false,
                        borderColor: '#ffce4e',
                        tension: 0.1
                    }
                ]
            },
            options: viewAnalyticsChartOptions
        });
        Chart.register(zoomPlugin)
    }
    const resetZoom = () => {
        chart.resetZoom()
    }

    onMounted (() => {
        if (!store.getters.signedOut) {
            drawCustomerChart()
            drawSalesChart()
            drawOrdersChart()
            drawViewAnalyticsChart()
        }
    })
</script>