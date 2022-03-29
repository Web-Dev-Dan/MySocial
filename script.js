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


// Detect Skills Button Change
let skillBtnsSelected = 0;
const skillsBtns = document.querySelectorAll('.info-box--skills-btn');
const cardSkills = document.getElementById('cardSkills');

const skillHTML = document.getElementById('skillHTML');
const skillCSS = document.getElementById('skillCSS');
const skillBootstrap = document.getElementById('skillBootstrap');
const skillSCSS = document.getElementById('skillSCSS');
const skillJavaScript = document.getElementById('skillJavaScript');
const skillReact = document.getElementById('skillReact');
const skillVue = document.getElementById('skillVue');
const skillAngular = document.getElementById('skillAngular');
const skillNodeJS = document.getElementById('skillNodeJS');
const skillPython = document.getElementById('skillPython');
const skillPHP = document.getElementById('skillPHP');
const skillJava = document.getElementById('skillJava');
const skillFigma = document.getElementById('skillFigma');

skillsBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        if (e.target.classList.contains('info-box--skills-btn')) {
            // console.log(e.target);
            updateSkills(e.target);
        } else if (e.target.classList.contains('skills-btn-icon')) {
            // console.log(e.target.parentElement);
            updateSkills(e.target.parentElement);
        }
    });
});

function updateSkills(button) {
    if (button.classList.contains('btn-html')) {
        button.classList.toggle('skills-btn-selected');
        skillHTML.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
    } else if (button.classList.contains('btn-css')) {
        button.classList.toggle('skills-btn-selected');
        skillCSS.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
    } else if (button.classList.contains('btn-bootstrap')) {
        button.classList.toggle('skills-btn-selected');
        skillBootstrap.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
    } else if (button.classList.contains('btn-scss')) {
        button.classList.toggle('skills-btn-selected');
        skillSCSS.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
    } else if (button.classList.contains('btn-javascript')) {
        button.classList.toggle('skills-btn-selected');
        skillJavaScript.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
    } else if (button.classList.contains('btn-react')) {
        button.classList.toggle('skills-btn-selected');
        skillReact.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
    } else if (button.classList.contains('btn-vue')) {
        button.classList.toggle('skills-btn-selected');
        skillVue.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
    } else if (button.classList.contains('btn-angular')) {
        button.classList.toggle('skills-btn-selected');
        skillAngular.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
    } else if (button.classList.contains('btn-node-js')) {
        button.classList.toggle('skills-btn-selected');
        skillNodeJS.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
    } else if (button.classList.contains('btn-python')) {
        button.classList.toggle('skills-btn-selected');
        skillPython.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
    } else if (button.classList.contains('btn-php')) {
        button.classList.toggle('skills-btn-selected');
        skillPHP.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
    } else if (button.classList.contains('btn-java')) {
        button.classList.toggle('skills-btn-selected');
        skillJava.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
    } else if (button.classList.contains('btn-figma')) {
        button.classList.toggle('skills-btn-selected');
        skillFigma.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
    } else {
        return;
    }
}

function updateNumberOfSkillsSelected(btn) {
    // Update Number of Skills Buttons Selected:
    if (btn.classList.contains('skills-btn-selected')) {
        skillBtnsSelected += 1;
    } else {
        skillBtnsSelected -= 1;
    }
    // Display or Hide Skills Container:
    if (skillBtnsSelected === 0) {
        cardSkills.classList.add('element-hidden');
    } else {
        cardSkills.classList.remove('element-hidden');
    }
}


// Adding Links
let linkBtnsSelected = 0;
const addLinkBtns = document.querySelectorAll('.link-btn');
const cardLinks = document.getElementById('cardLinks');

const linkProfile = document.getElementById('linkProfile');
const linkGitHub = document.getElementById('linkGitHub');
const linkLinkedIn = document.getElementById('linkLinkedIn');
const linkTwitter = document.getElementById('linkTwitter');
const linkHashnode = document.getElementById('linkHashnode');
const linkYouTube = document.getElementById('linkYouTube');
const linkFacebook = document.getElementById('linkFacebook');
const linkInstagram = document.getElementById('linkInstagram');
const linkEmail = document.getElementById('linkEmail');


addLinkBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        if (e.target.classList.contains('link-btn')) {
            toggleURLInputs(e.target);
            updateLinks(e.target);
        } else if (e.target.classList.contains('link-btn-icon')) {
            toggleURLInputs(e.target.parentElement);
            updateLinks(e.target.parentElement);
        }
    });
});

function toggleURLInputs(button) {
    let urlInputField = button.nextElementSibling;

    if (button.classList.contains('link-btn-selected')) {
        button.classList.toggle('link-btn-selected');
        urlInputField.classList.add('element-hidden');
        updateNumberOfLinksSelected(button);
    } else {
        button.classList.toggle('link-btn-selected');
        urlInputField.classList.remove('element-hidden');
        updateNumberOfLinksSelected(button);
    }
}

function updateNumberOfLinksSelected(btn) {
    // Update Number of Links Buttons Selected:
    if (btn.classList.contains('link-btn-selected')) {
        linkBtnsSelected += 1;
        // console.log(linkBtnsSelected);
    } else {
        linkBtnsSelected -= 1;
        // console.log(linkBtnsSelected);
    }
    // Display or Hide Links Container:
    if (linkBtnsSelected === 0) {
        cardLinks.classList.add('element-hidden');
    } else {
        cardLinks.classList.remove('element-hidden');
    }
}

function updateLinks(button) {
    if (button.classList.contains('link-btn-profile')) {
        if (button.classList.contains('link-btn-selected')) {
            linkProfile.classList.remove('element-hidden');
        } else {
            linkProfile.classList.add('element-hidden');
        }
    }
    if (button.classList.contains('link-btn-github')) {
        if (button.classList.contains('link-btn-selected')) {
            linkGitHub.classList.remove('element-hidden');
        } else {
            linkGitHub.classList.add('element-hidden');
        }
    }
    if (button.classList.contains('link-btn-linkedin')) {
        if (button.classList.contains('link-btn-selected')) {
            linkLinkedIn.classList.remove('element-hidden');
        } else {
            linkLinkedIn.classList.add('element-hidden');
        }
    }
    if (button.classList.contains('link-btn-twitter')) {
        if (button.classList.contains('link-btn-selected')) {
            linkTwitter.classList.remove('element-hidden');
        } else {
            linkTwitter.classList.add('element-hidden');
        }
    }
    if (button.classList.contains('link-btn-hashnode')) {
        if (button.classList.contains('link-btn-selected')) {
            linkHashnode.classList.remove('element-hidden');
        } else {
            linkHashnode.classList.add('element-hidden');
        }
    }
    if (button.classList.contains('link-btn-youtube')) {
        if (button.classList.contains('link-btn-selected')) {
            linkYouTube.classList.remove('element-hidden');
        } else {
            linkYouTube.classList.add('element-hidden');
        }
    }
    if (button.classList.contains('link-btn-facebook')) {
        if (button.classList.contains('link-btn-selected')) {
            linkFacebook.classList.remove('element-hidden');
        } else {
            linkFacebook.classList.add('element-hidden');
        }
    }
    if (button.classList.contains('link-btn-instagram')) {
        if (button.classList.contains('link-btn-selected')) {
            linkInstagram.classList.remove('element-hidden');
        } else {
            linkInstagram.classList.add('element-hidden');
        }
    }
    if (button.classList.contains('link-btn-email')) {
        if (button.classList.contains('link-btn-selected')) {
            linkEmail.classList.remove('element-hidden');
        } else {
            linkEmail.classList.add('element-hidden');
        }
    }
}



// Update MySocial
function updateMySocial() {
    const cardName = document.getElementById('cardName');
    const cardLocation = document.getElementById('cardLocation');
    const cardAbout = document.getElementById('cardAbout');
    const cardSkills = document.getElementById('cardSkills');

    // Update Name
    if (updateNameInput.value === '') {
        cardName.textContent = 'John Smith';
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
}
