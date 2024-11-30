document.addEventListener('DOMContentLoaded', loadTallies);

function showCreateTallyPopup() {
    const popup = document.getElementById('createTallyPopup');
    popup.style.display = 'flex';
}

function closeCreateTallyPopup() {
    const popup = document.getElementById('createTallyPopup');
    popup.style.display = 'none';
    clearTallyNameInput();
}

function createTally() {
    const tallyNameInput = document.getElementById('tallyName');

    // Generate a unique ID for each tally
    const tallyId = Date.now().toString();

    // Get the custom tally name from the input field or use a default name
    const tallyName = tallyNameInput.value.trim() || 'Tally';

    // Close the popup
    closeCreateTallyPopup();

    // Create a new tally element
    const tallyElement = document.createElement('div');
    tallyElement.classList.add('tally');
    tallyElement.setAttribute('data-tally-id', tallyId);
    tallyElement.textContent = tallyName;

    // Create a delete icon
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash-alt', 'delete-icon');
    deleteIcon.addEventListener('click', () => deleteTally(tallyId));

    // Append the delete icon to the tally element
    tallyElement.appendChild(deleteIcon);

    // Add the tally element to the container
    const tallyContainer = document.getElementById('tallies');
    tallyContainer.appendChild(tallyElement);

    // Save the tally ID to local storage
    saveTallyId(tallyId);
}

function clearTallyNameInput() {
    const tallyNameInput = document.getElementById('tallyName');
    tallyNameInput.value = '';
}

function createTally() {
    const tallyNameInput = document.getElementById('tallyName');

    // Generate a unique ID for each tally
    const tallyId = Date.now().toString();

    // Get the custom tally name from the input field or use a default name
    const tallyName = tallyNameInput.value.trim() || 'Tally';

    // Close the popup
    closeCreateTallyPopup();

    // Create a new tally element
    const tallyElement = document.createElement('div');
    tallyElement.classList.add('tally');
    tallyElement.setAttribute('data-tally-id', tallyId);
    tallyElement.textContent = tallyName;

    // Create a delete icon
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash-alt', 'delete-icon');
    deleteIcon.addEventListener('click', () => deleteTally(tallyId));

    // Append the delete icon to the tally element
    tallyElement.appendChild(deleteIcon);

    // Add the tally element to the container
    const tallyContainer = document.getElementById('tallies');
    tallyContainer.appendChild(tallyElement);

    // Save the tally ID to local storage
    saveTallyId(tallyId);

    // Clear the input field
    clearTallyNameInput();
}


function deleteTally(tallyId) {
    // Remove the tally element from the UI
    const tallyElement = document.querySelector(`.tally[data-tally-id="${tallyId}"]`);
    tallyElement.remove();

    // Remove the tally ID from local storage
    removeTallyId(tallyId);
}

function saveTallyId(tallyId) {
    // Retrieve existing tallies from local storage
    const existingTallies = getTallies();

    // Add the new tally ID to the list
    existingTallies.push(tallyId);

    // Save the updated list to local storage
    localStorage.setItem('tallies', JSON.stringify(existingTallies));
}

function removeTallyId(tallyId) {
    // Retrieve existing tallies from local storage
    const existingTallies = getTallies();

    // Remove the specified tally ID from the list
    const updatedTallies = existingTallies.filter(id => id !== tallyId);

    // Save the updated list to local storage
    localStorage.setItem('tallies', JSON.stringify(updatedTallies));
}

function getTallies() {
    // Retrieve tallies from local storage
    const talliesJson = localStorage.getItem('tallies');
    return talliesJson ? JSON.parse(talliesJson) : [];
}

function loadTallies() {
    // Retrieve existing tallies from local storage
    const existingTallies = getTallies();

    // Display each tally on the UI
    existingTallies.forEach(tallyId => {
        const tallyContainer = document.getElementById('tallies');

        // Create a new tally element
        const tallyElement = document.createElement('div');
        tallyElement.classList.add('tally');
        tallyElement.setAttribute('data-tally-id', tallyId);
        tallyElement.textContent = getTallyName(tallyId);

        // Create a delete icon
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-trash-alt', 'delete-icon');
        deleteIcon.addEventListener('click', () => deleteTally(tallyId));

        // Append the delete icon to the tally element
        tallyElement.appendChild(deleteIcon);

        // Add the tally element to the container
        tallyContainer.appendChild(tallyElement);
    });
}

function getTallyName(tallyId) {
    // You can implement your logic to retrieve a custom name for the tally based on the ID
    // For simplicity, this example returns a default name
    return 'Tally';
}
