const days = ['mon', 'tue', 'wed', 'thu', 'fri','sat','sun'];
const spending = [17.45, 34.91, 52.36, 31.07, 23.39,43.28,25.48];

// Get the canvas element
const ctx = document.getElementById('spendingChart').getContext('2d');



// Create the bar chart
    const spendingChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: days,
        datasets: [{
        label: 'Spending $',
        data: spending,
        backgroundColor: '#ec775c', // Bar color
        borderWidth: 1
        }]
    },
    options: {
        scales: {
                y: {
                    display: false,
                },
                yAxes: [{
                    gridLines: {
                        lineWidth: 0,
                        color: "rgba(255,255,255,0)"
                    }
                }]
        }
    }
    });