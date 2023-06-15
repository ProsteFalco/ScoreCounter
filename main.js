// script.js

// Initial score values for each person
let scores = {
    falco: 0,
    active: 0,
    adramus: 0,
    darkreaver: 0
  };
  
  // Function to update the score for a person
  function updateScore(person, value) {
    scores[person] += value;
    document.getElementById(`${person}-score`).textContent = scores[person];
  }
  
  // Function to add score
  function addScore(person, value) {
    updateScore(person, value);
    saveScores();
  }
  
  // Function to subtract score
  function subtractScore(person, value) {
    updateScore(person, -value);
    saveScores();
  }
  
  // Function to save scores to a JSON file
  function saveScores() {
    const json = JSON.stringify(scores);
    // Use the appropriate method to save the JSON data to a file or storage (e.g., fetch() with a server-side endpoint)
    // Example using fetch():
    fetch('save-scores.php', {
      method: 'POST',
      body: json,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      // Handle the response if needed
    })
    .catch(error => {
      // Handle any errors
      console.error('Error:', error);
    });
  }
  
  // Function to load scores from a JSON file
  function loadScores() {
    // Use the appropriate method to load the JSON data from the file or storage (e.g., fetch() with a server-side endpoint)
    // Example using fetch():
    fetch('load-scores.php')
    .then(response => response.json())
    .then(data => {
      scores = data;
      // Update the score display on the webpage
      for (const person in scores) {
        document.getElementById(`${person}-score`).textContent = scores[person];
      }
    })
    .catch(error => {
      // Handle any errors
      console.error('Error:', error);
    });
  }
  
  // Call the loadScores function to load the scores when the page is loaded
  window.addEventListener('DOMContentLoaded', loadScores);