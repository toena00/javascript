 
// Variables to track clicks, points, and timer state
let clickCount = 0;
let points = 0;
let startTime = Date.now();
let timerRunning = false;
let timerInterval;

// Function to generate a random color in hex format
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to move the circle to a random point within the screen bounds
function moveCircle() {
  if (!timerRunning) return; // Do nothing if the timer hasn't started yet

  const circleSize = 100;  // The size of the circle (100px by 100px)

  // Calculate random x and y coordinates, ensuring the circle stays within the screen bounds
  const randomX = Math.floor(Math.random() * (window.innerWidth - circleSize));
  const randomY = Math.floor(Math.random() * (window.innerHeight - circleSize));

  // Get random color
  const randomColor = getRandomColor();

  // Get the circle element and apply the new styles
  const circle = document.getElementById('circle');
  circle.style.transform = `translate(${randomX}px, ${randomY}px)`; // Move circle to random position
  circle.style.backgroundColor = randomColor; // Change circle color

  // Update the position display with the new coordinates
  const positionElement = document.getElementById('position');
  positionElement.textContent = `Position: (${randomX}, ${randomY})`; // Show the new position

  // Increment the click count
  clickCount++;

  // Check if 10 clicks have been made within 10 seconds
  if (clickCount >= 10) {
    addPoint();
    resetClickCount();
  }
}

// Timer functionality
function startTimer() {
  if (timerRunning) return; // Prevent starting the timer again if it's already running
  timerRunning = true;
  startTime = Date.now(); // Reset the timer start time

  // Update the timer every 10ms
  timerInterval = setInterval(updateTimer, 10);
}

function updateTimer() {
  const currentTime = Date.now();
  const elapsedTime = (currentTime - startTime) / 1000; // Time in seconds
  const timerElement = document.getElementById('timer');
  timerElement.textContent = `Time: ${elapsedTime.toFixed(2)}s`; // Display elapsed time with 2 decimal places
}

// Add a point when the user clicks 10 times in 10 seconds
function addPoint() {
  points++;
  const pointsElement = document.getElementById('points');
  pointsElement.textContent = `Points: ${points}`; // Update points display
}

// Reset click count every 10 seconds
function resetClickCount() {
  clickCount = 0;
  startTime = Date.now(); // Reset the start time
}

// Add the click event to the circle to move it when clicked
document.getElementById('circle').addEventListener('click', moveCircle);

// Add the start button click event
document.getElementById('startButton').addEventListener('click', startTimer);
