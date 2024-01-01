document.addEventListener('DOMContentLoaded', function() {
  const apiKey = apiKeys.apiKey; 

  const baseURL = 'https://api.api-ninjas.com/v1/exercises?muscle='  

  function fetchExercises(event) {
    const url = baseURL + event.target.id
    fetch(url, {
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

      const muscleGroup = url.split('=')[1];
  
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


document.querySelectorAll('.category').forEach(id => {
  id.addEventListener('click', fetchExercises);
})


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
});
