'use strict';


// test array
// const profileArray = [{kidName : 'John', color : 'red', animal : 'Tiger', number: 5, timesVideoWatched : 0, timesPlayedPhysics: 0},{kidName : 'Alice', color : 'blue', animal : 'bear', number: 3, timesVideoWatched : 2, timesPlayedPhysics: 6},{kidName : 'Bob', color : 'green', animal : 'bird', number: 3, timesVideoWatched : 1, timesPlayedPhysics: 36}];

const progressChart = document.getElementById('myChart');
const profileArray = JSON.parse(localStorage.getItem('profileArray')) || [];
console.log(profileArray);


function drawChart(){
  let labels = [];
  let timesVideo = [];
  let timesPhysics = [];
  profileArray.forEach(profile => {
    labels.push(profile.name);
    timesVideo.push(profile.timesVideoWatched);
    timesPhysics.push(profile.timesPlayedPhysics);
  });
  return new Chart(progressChart, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Times Videos Watched',
        data: timesVideo,
        borderWidth: 1
      },{
        label: 'Times Physics Game Played',
        data: timesPhysics,
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

drawChart();

const resetDataEl = document.getElementById('delete-data');
resetDataEl.addEventListener('click', clearData);

function clearData(event){
  const response = confirm('Are you sure you want to clear all data?');
  if (response){
    localStorage.clear();
    alert('Data has been erased!');
    window.location.replace('splash.html');
  }
  else {
    alert('Data was not deleted.');
  }
}