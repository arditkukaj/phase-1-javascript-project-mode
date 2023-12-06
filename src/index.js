document.addEventListener('DOMContentLoaded', function() {
  const apiKey = apiKeys.apiKey; 

  const exerciseURLs = [
    'https://api.api-ninjas.com/v1/exercises?muscle=biceps',
    'https://api.api-ninjas.com/v1/exercises?muscle=triceps',
    'https://api.api-ninjas.com/v1/exercises?muscle=chest',
    'https://api.api-ninjas.com/v1/exercises?muscle=abdominals',
    'https://api.api-ninjas.com/v1/exercises?muscle=lower_back'
  ];

  function fetchExercises(index) {
    fetch(exerciseURLs[index], {
      headers: {
        'X-Api-Key': apiKey
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      const contentDiv = document.getElementById('content');
      contentDiv.innerHTML = ''; 

      const muscleGroup = exerciseURLs[index].split('=')[1];
  
      const heading = document.createElement('h2');
      const formattedMuscleGroup = muscleGroup.replace('_', ' ');
heading.textContent = `${formattedMuscleGroup.charAt(0).toUpperCase() + formattedMuscleGroup.slice(1)} Exercises`;
contentDiv.appendChild(heading);
  
      const ul = document.createElement('ul');
      data.forEach(exercise => {
        const li = document.createElement('li');
        li.textContent = exercise.name;
  
        li.setAttribute('data-description', JSON.stringify({
          name: exercise.name,
          difficulty: exercise.difficulty,
          equipment: exercise.equipment,
          instructions: exercise.instructions
        }));
  
        li.addEventListener('mouseover', function(event) {
          const description = event.target.getAttribute('data-description');
        });
  
  
        ul.appendChild(li);
      });
      contentDiv.appendChild(ul);
    })
  
  }
  

function displayExerciseDetails(exercise, element) {
  const details = `
    Name: ${exercise.name}
    Difficulty: ${exercise.difficulty}
    Equipment: ${exercise.equipment}
    Instructions: ${exercise.instructions}
  `;

  element.setAttribute('title', details);
}

document.getElementById('biceps').addEventListener('click', function() {
  fetchExercises(0);
});

document.getElementById('triceps').addEventListener('click', function() {
  fetchExercises(1);
});

document.getElementById('chest').addEventListener('click', function() {
  fetchExercises(2);
});

document.getElementById('abdominals').addEventListener('click', function() {
  fetchExercises(3);
});

document.getElementById('lower-back').addEventListener('click', function() {
  fetchExercises(4);
});


document.getElementById('content').addEventListener('mouseover', function(event) {
  if (event.target && event.target.nodeName === 'LI') {
    const description = event.target.getAttribute('data-description');
    const exercise = JSON.parse(description);
    displayExerciseDetails(exercise, event.target);
  }
});

document.getElementById('content').addEventListener('mouseout', function(event) {
  if (event.target && event.target.nodeName === 'LI') {
    event.target.removeAttribute('title');
  }
});

const videoIDs = {
  biceps: 'i1YgFZB6alI',
  triceps: 'popGXI-qs98',
  chest: 'NsEbXsTwas8',
  abdominals: 'Dl8N_8UtWUU',
  lowerback: '2tnATDflg4o',
};
function changeVideo(muscle) {
  const youtubeVideo = document.getElementById('youtube-video');
  const videoID = videoIDs[muscle];

  youtubeVideo.src = `https://www.youtube.com/embed/${videoID}`;
}

document.getElementById('biceps').addEventListener('click', function() {
  changeVideo('biceps');
});

document.getElementById('triceps').addEventListener('click', function() {
  changeVideo('triceps');
});
document.getElementById('chest').addEventListener('click', function() {
  changeVideo('chest');
});
document.getElementById('abdominals').addEventListener('click', function() {
    changeVideo('abdominals');    
});
document.getElementById('lower-back').addEventListener('click', function() {
    changeVideo('lowerback');
});

});
