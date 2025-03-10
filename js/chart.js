const labels = [
    'Angular',
    'Node',
    'React',
    'Svelte',
    'Vue'
];

const data = {
    labels: labels,
    datasets: [{
      label: 'Proyectos Librerias y Frameworks JavaScript',
      //backgroundColor: 'rgb(255, 99, 132)',
      backgroundColor: ['red','blue','green','black','orange'],
      borderColor: 'rgb(255, 99, 132)',
      data: [25, 82, 61, 10, 18],
    }]
};

const config = {
    type: 'line', //bar, bubble, doughnut, radar, polarArea, scatter
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Proyectos Librerias y Frameworks JavaScript',
            }
        },
        scales: {
            x: {
                min: 0,
            },
            y: {
                min: 0,
            }
        },
        animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: false
            }
          },
    }
    
};

const myChart = new Chart(document.getElementById('myChart'),config);