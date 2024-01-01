# Excercise Single Page Application

## Description

This single-page application (SPA) provides an Exercise API containing information about various exercise categories, exercise names, descriptions, instructions, and difficulty levels. This then displays it to the user to their respective needs to provide easy and convenient information. 

## Installation
To use this project, follow these steps:

1. Clone the repository: `git clone https://github.com/arditkukaj/phase-1-javascript-project-mode`
2. Install dependencies if needed. 
3. In the terminal, open up the page using: `explorer.exe index.html`

## Project Usage:

* Displays a select amount of muscle groups that a user would want to exercise.
* When muscle group is selected, it will provide a variety of muscle exercises for the muscle.
* To access more information about the exercise, hover over desired exercise. 
* Provides:
    * Name of exercise
    * Difficulty of exercise
    * Equipment needed (if needed)
    * Instructions on exercise

## Project Details

Project uses an API to gather the information. This is fetched using this code: 

```JavaScript 
const baseURL = 'https://api.api-ninjas.com/v1/exercises?muscle='  
document.addEventListener("DOMContentLoaded", getGames)

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
 }
```
If you would like to add more muslce groups, you would need to see all the muscle groups the api-ninja website provides, then add it to this code: 

```HTML

<ul id='buttons'>
        <li class="category" id="biceps">Biceps</li>
        <li class="category" id="triceps">Triceps</li>
        <li class="category" id="chest">Chest</li>
        <li class="category" id="abdominals">Abdominals</li>
        <li class="category" id="lower_back">Lower Back</li>
    </ul>

```

Add a new line with the id of the muscle group following the `?muscle=` url.
This is a seamless way to add more muscle groups without any spaghetti code or repeating code. 

## Blog

This is how I stopped myself from repeating code!
https://medium.com/@arditkukaj4/how-i-made-my-code-dry-js-phase-1-project-193ab460cab3

## Acknowledgement

https://api-ninjas.com/api/exercises

This is the source of the API I used for this project. Again, you can add more muscle groups if you'd like by reviewing this website.