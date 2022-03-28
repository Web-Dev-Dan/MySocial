// 🔆 Toggle Light/Dark Mode 🌙
const toggleLightModeBtn = document.getElementById('toggleLightModeBtn');
const toggleLightModeBtnIcon = document.getElementById('toggleLightModeBtnIcon');
const root = document.querySelector(':root');

toggleLightModeBtn.addEventListener('click', function () {
    if (toggleLightModeBtnIcon.classList.contains('fa-moon')) {
        toggleLightModeBtnIcon.classList.remove('fa-moon');
        toggleLightModeBtnIcon.classList.add('fa-sun');
        darkMode();
    } else {
        toggleLightModeBtnIcon.classList.add('fa-moon');
        toggleLightModeBtnIcon.classList.remove('fa-sun');
        lightMode();
    }
});

function darkMode() {
    root.style.setProperty('--background-color', '#333333');
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--gray', 'rgb(65, 65, 65)');
}

function lightMode() {
    root.style.setProperty('--background-color', '#ffffff');
    root.style.setProperty('--text-color', '#333333');
    root.style.setProperty('--gray', 'rgb(235, 235, 235)');
}


// Toggle Sidebar (button clicked)
const sidebar = document.querySelector('.sidebar');
const toggleSidebarBtn = document.querySelector('.toggle-sidebar');
const toggleSidebarIcon = document.querySelector('.toggle-sidebar-icon');

toggleSidebarBtn.addEventListener('click', toggleSidebar);

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('sidebar')) {
        toggleSidebar();
    }
});

function toggleSidebar() {
    sidebar.classList.toggle('sidebar-closed');
    toggleSidebarIcon.classList.toggle('toggle-sidebar-icon-closed');
}


// Toggle Sidebar Options
const toggleInformationBtn = document.getElementById('toggleInformationBtn');
const toggleTemplatesBtn = document.getElementById('toggleTemplatesBtn');
const toggleCustomisationBtn = document.getElementById('toggleCustomisationBtn');

const toggleInformationBtnIcon = document.getElementById('toggleInformationBtnIcon');
const toggleTemplatesBtnIcon = document.getElementById('toggleTemplatesBtnIcon');
const toggleCustomisationBtnIcon = document.getElementById('toggleCustomisationBtnIcon');

const informationContainer = document.querySelector('.information-container');
const templatesContainer = document.querySelector('.templates-container');
const customisationContainer = document.querySelector('.customisation-container');

const informationHeader = document.getElementById('sidebarInformationHeader');
const templatesHeader = document.getElementById('sidebarTemplatesHeader');
const customisationHeader = document.getElementById('sidebarCustomisationHeader');

toggleInformationBtn.addEventListener('click', toggleInformation);
toggleTemplatesBtn.addEventListener('click', toggleTemplates);
toggleCustomisationBtn.addEventListener('click', toggleCustomisation);

document.addEventListener('click', (e) => {
    // Open Sidebar Sections:
    if (e.target.classList.contains('sidebar-content--header') || e.target.classList.contains('sidebar-content-h3')) {
        if (e.target.id === 'sidebarInformationHeader' || e.target.id === 'sidebarInformationHeaderText') {
            toggleInformation();
        } else if (e.target.id === 'sidebarTemplatesHeader' || e.target.id === 'sidebarTemplatesHeaderText') {
            toggleTemplates();
        } else if (e.target.id === 'sidebarCustomisationHeader' || e.target.id === 'sidebarCustomisationHeaderText') {
            toggleCustomisation();
        }
    }
})

function toggleInformation() {
    informationContainer.classList.toggle('container-hidden');
    if (toggleInformationBtnIcon.classList.contains('fa-plus')) {
        toggleInformationBtnIcon.classList.remove('fa-plus');
        toggleInformationBtnIcon.classList.add('fa-minus');
    } else {
        toggleInformationBtnIcon.classList.add('fa-plus');
        toggleInformationBtnIcon.classList.remove('fa-minus');
    }
}

function toggleTemplates() {
    templatesContainer.classList.toggle('container-hidden');
    if (toggleTemplatesBtnIcon.classList.contains('fa-plus')) {
        toggleTemplatesBtnIcon.classList.remove('fa-plus');
        toggleTemplatesBtnIcon.classList.add('fa-minus');
    } else {
        toggleTemplatesBtnIcon.classList.add('fa-plus');
        toggleTemplatesBtnIcon.classList.remove('fa-minus');
    }
}

function toggleCustomisation() {
    customisationContainer.classList.toggle('container-hidden');
    if (toggleCustomisationBtnIcon.classList.contains('fa-plus')) {
        toggleCustomisationBtnIcon.classList.remove('fa-plus');
        toggleCustomisationBtnIcon.classList.add('fa-minus');
    } else {
        toggleCustomisationBtnIcon.classList.add('fa-plus');
        toggleCustomisationBtnIcon.classList.remove('fa-minus');
    }
}




// Detect Input Focus
const updateNameInput = document.getElementById('updateNameInput');
const updateLocationInput = document.getElementById('updateLocationInput');
const updateAboutTextarea = document.getElementById('updateAboutTextarea');

document.addEventListener('keyup', function () {
    if (updateNameInput === document.activeElement || updateLocationInput === document.activeElement || updateAboutTextarea === document.activeElement) {
        updateMySocial();
    } else {
        return;
    }
});





// Update MySocial
function updateMySocial() {
    const cardName = document.getElementById('cardName');
    const cardLocation = document.getElementById('cardLocation');
    const cardAbout = document.getElementById('cardAbout');
    const cardSkills = document.getElementById('cardSkills');

    // Update Name
    if (updateNameInput.value === '') {
        cardName.textContent = 'Daniel Healy';
    } else {
        cardName.textContent = updateNameInput.value;
    }

    // Update Location
    if (updateLocationInput.value === '') {
        cardLocation.textContent = 'London, UK';
    } else {
        cardLocation.textContent = updateLocationInput.value;
    }

    // Update About (remove if field is empty)
    if (updateAboutTextarea.value === '') {
        cardAbout.classList.add('element-hidden');
    } else {
        cardAbout.classList.remove('element-hidden');
        cardAbout.textContent = updateAboutTextarea.value;
    }

    // Update Skills (remove if none selected)
    let skillBtnSelected = false;
}
