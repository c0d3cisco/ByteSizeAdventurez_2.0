'use strict';

// const profileArray = JSON.parse(localStorage.getItem(profileArray));
const profileArray = [{kidName : 'John', color : 'red', animal : 'Tiger', number: 5, timesVideoWatched : 0, timesPlayedPhysics: 0},{kidName : 'Alice', color : 'blue', animal : 'bear', number: 3, timesVideoWatched : 2, timesPlayedPhysics: 6},{kidName : 'Bob', color : 'green', animal : 'bird', number: 3, timesVideoWatched : 1, timesPlayedPhysics: 36}];
console.log(profileArray);

const progressChart = document.getElementById('myChart');

function drawChart(){
  let labels = [];
  let timesVideo = [];
  let timesPhysics = [];
  profileArray.forEach(profile => {
    labels.push(profile.kidName);
    timesVideo.push(profile.timesVideoWatched);
    timesPhysics.push(profile.timesPlayedPhysics);
  });
  console.log(labels, timesVideo, timesPhysics);
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
