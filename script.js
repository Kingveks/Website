// Comment functionality
const commentForm = document.getElementById("commentForm");
const commentsContainer = document.getElementById("commentsContainer");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  if (name && comment) {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = `<h4>${name}</h4><p>${comment}</p>`;
    commentsContainer.appendChild(commentElement);

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  }
});

// Hours Developed functionality
const hoursDisplay = document.getElementById("hoursDisplay");

function displayHoursDeveloped() {
  const hours = 1000; // Replace with your actual hours developed value
  hoursDisplay.textContent = `Total hours developed: ${hours}+`;
}

displayHoursDeveloped();
// Set your total number of projects here
const totalProjects = 50;

// Get the projects counter element
const projectsCounter = document.getElementById('projects-counter');

// Function to update the projects counter
function updateProjectsCounter() {
  const completedProjects = 30; // Replace with your completed projects count
  projectsCounter.textContent = `Projects Completed: ${completedProjects}/${totalProjects}`;
}
//progress bar
// Call the update function initially
document.addEventListener("DOMContentLoaded", function() {
  const skillsData = [
    { name: "HTML", progress: "80%" },
    { name: "CSS", progress: "70%" },
    { name: "JavaScript", progress: "60%" },
  ];

  const skillsContainer = document.querySelector(".skills");

  skillsData.forEach(function(skill) {
    const skillElement = document.createElement("div");
    skillElement.classList.add("skill");

    const skillName = document.createElement("div");
    skillName.classList.add("skill-name");
    skillName.textContent = skill.name;

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");

    const progress = document.createElement("div");
    progress.classList.add("progress");
    progress.style.width = skill.progress;

    progressBar.appendChild(progress);
    skillElement.appendChild(skillName);
    skillElement.appendChild(progressBar);

    skillsContainer.appendChild(skillElement);
  });
});

