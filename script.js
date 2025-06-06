const addProjectForm = document.getElementById('add-project-form');
const projectNameInput = document.getElementById('project-name');
const projectDescriptionInput = document.getElementById('project-description');
const projectsContainer = document.getElementById('projects-container');

// In-memory storage for projects (for frontend-only demo)
let projects = [];

// Function to render projects on the page
function renderProjects() {
    projectsContainer.innerHTML = ''; // Clear current projects

    if (projects.length === 0) {
        projectsContainer.innerHTML = '<p>No projects added yet.</p>';
        return;
    }

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-item');
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

// Handle form submission to add a new project
addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual form submission

    const name = projectNameInput.value.trim();
    const description = projectDescriptionInput.value.trim();

    if (name) { // Ensure project name is not empty
        const newProject = {
            id: Date.now(), // Simple unique ID
            name: name,
            description: description,
            tasks: [] // Projects can have tasks (placeholder)
        };

        projects.push(newProject); // Add new project to the array
        renderProjects(); // Update the display

        // Clear the form
        addProjectForm.reset();
    }
});

// Initial render of projects (when the page loads)
renderProjects(); 