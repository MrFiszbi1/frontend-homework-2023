const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
let app = document.querySelector('#results');
let houses = [
  'Targaryen',
  'Tarly',
  'Stark',
  'Baratheon',
  'Lannister',
  'Greyjoy',
  'Tyrell',
  'lesser House',
  'Free Folk',
  'No House',
];
let houseCounter = new Array(10).fill(0);

const logHouse = (character) => {
  console.log(houseCounter[0]);
  if (
    (character.family === 'House Targaryen') |
    (character.family === 'Targaryen')
  ) {
    houseCounter[0]++;
  } else if (character.family === 'House Tarly') {
    houseCounter[1]++;
  } else if (
    (character.family === 'House Stark') |
    (character.family === 'Stark')
  ) {
    houseCounter[2]++;
  } else if (
    (character.family === 'House Baratheon') |
    (character.family === 'Baratheon')
  ) {
    houseCounter[3]++;
  } else if (
    (character.family === 'House Lannister') |
    (character.family === 'Lannister')
  ) {
    houseCounter[4]++;
  } else if (
    (character.family === 'House Greyjoy') |
    (character.family === 'Greyjoy')
  ) {
    houseCounter[5]++;
  } else if (
    (character.family === 'House Tyrell') |
    (character.family === 'Tyrell')
  ) {
    houseCounter[6]++;
  } else if (
    character.family.startsWith('House') |
    (character.family === 'Mormont') |
    (character.family === 'Bolton') |
    (character.family === 'Tarth')
  ) {
    houseCounter[7]++;
  } else if (character.family === 'Free Folk') {
    houseCounter[8]++;
  } else {
    houseCounter[9]++;
  }
};

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((character) => {
        logHouse(character);
      });
      renderChart();
    })
    .catch((error) => {
      console.error(error);
      let element = document.createElement('div');
      element.textContent = 'An error occured. please reload.';
      app.append(element);
    });
};

const renderChart = () => {
  const donutChart = document.querySelector('.donut-chart');
  console.log(houseCounter);

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: houses,
      datasets: [
        {
          label: 'My First Dataset',
          data: houseCounter,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

fetchData(url);
