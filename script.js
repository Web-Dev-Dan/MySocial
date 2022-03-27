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
    console.log(e.target);
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



// Update MySocial
function updateMySocial() {

}
