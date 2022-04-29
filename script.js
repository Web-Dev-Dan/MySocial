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
        htmlSkillSelected = true;
    } else if (button.classList.contains('btn-css')) {
        button.classList.toggle('skills-btn-selected');
        skillCSS.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
        cssSkillSelected = true;
    } else if (button.classList.contains('btn-bootstrap')) {
        button.classList.toggle('skills-btn-selected');
        skillBootstrap.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
        bootstrapSkillSelected = true;
    } else if (button.classList.contains('btn-scss')) {
        button.classList.toggle('skills-btn-selected');
        skillSCSS.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
        scssSkillSelected = true;
    } else if (button.classList.contains('btn-javascript')) {
        button.classList.toggle('skills-btn-selected');
        skillJavaScript.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
        javascriptSkillSelected = true;
    } else if (button.classList.contains('btn-react')) {
        button.classList.toggle('skills-btn-selected');
        skillReact.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
        reactSkillSelected = true;
    } else if (button.classList.contains('btn-vue')) {
        button.classList.toggle('skills-btn-selected');
        skillVue.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
        vueSkillSelected = true;
    } else if (button.classList.contains('btn-angular')) {
        button.classList.toggle('skills-btn-selected');
        skillAngular.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
        angularSkillSelected = true;
    } else if (button.classList.contains('btn-node-js')) {
        button.classList.toggle('skills-btn-selected');
        skillNodeJS.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
        nodeSkillSelected = true;
    } else if (button.classList.contains('btn-python')) {
        button.classList.toggle('skills-btn-selected');
        skillPython.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
        pythonSkillSelected = true;
    } else if (button.classList.contains('btn-php')) {
        button.classList.toggle('skills-btn-selected');
        skillPHP.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
        phpSkillSelected = true;
    } else if (button.classList.contains('btn-java')) {
        button.classList.toggle('skills-btn-selected');
        skillJava.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
        javaSkillSelected = true;
    } else if (button.classList.contains('btn-figma')) {
        button.classList.toggle('skills-btn-selected');
        skillFigma.classList.toggle('skills-box-shown');
        updateNumberOfSkillsSelected(button);
        figmaSkillSelected = true;
    } else {
        return;
    }
    updateMarkupSkills();
    updateBoilerPlate();
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
            portfolioLinkSelected = true;
        } else {
            linkProfile.classList.add('element-hidden');
            portfolioLinkSelected = false;
        }
    }
    if (button.classList.contains('link-btn-github')) {
        if (button.classList.contains('link-btn-selected')) {
            linkGitHub.classList.remove('element-hidden');
            githubLinkSelected = true;
        } else {
            linkGitHub.classList.add('element-hidden');
            githubLinkSelected = true;
        }
    }
    if (button.classList.contains('link-btn-linkedin')) {
        if (button.classList.contains('link-btn-selected')) {
            linkLinkedIn.classList.remove('element-hidden');
            linkedinLinkSelected = true;
        } else {
            linkLinkedIn.classList.add('element-hidden');
            linkedinLinkSelected = false;
        }
    }
    if (button.classList.contains('link-btn-twitter')) {
        if (button.classList.contains('link-btn-selected')) {
            linkTwitter.classList.remove('element-hidden');
            twitterLinkSelected = true;
        } else {
            linkTwitter.classList.add('element-hidden');
            twitterLinkSelected = false;
        }
    }
    if (button.classList.contains('link-btn-hashnode')) {
        if (button.classList.contains('link-btn-selected')) {
            linkHashnode.classList.remove('element-hidden');
            hashnodeLinkSelected = true;
        } else {
            linkHashnode.classList.add('element-hidden');
            hashnodeLinkSelected = false;
        }
    }
    if (button.classList.contains('link-btn-youtube')) {
        if (button.classList.contains('link-btn-selected')) {
            linkYouTube.classList.remove('element-hidden');
            youtubeLinkSelected = true;
        } else {
            linkYouTube.classList.add('element-hidden');
            youtubeLinkSelected = false;
        }
    }
    if (button.classList.contains('link-btn-facebook')) {
        if (button.classList.contains('link-btn-selected')) {
            linkFacebook.classList.remove('element-hidden');
            facebookLinkSelected = true;
        } else {
            linkFacebook.classList.add('element-hidden');
            facebookLinkSelected = false;
        }
    }
    if (button.classList.contains('link-btn-instagram')) {
        if (button.classList.contains('link-btn-selected')) {
            linkInstagram.classList.remove('element-hidden');
            instagramLinkSelected = true;
        } else {
            linkInstagram.classList.add('element-hidden');
            instagramLinkSelected = false;
        }
    }
    if (button.classList.contains('link-btn-email')) {
        if (button.classList.contains('link-btn-selected')) {
            linkEmail.classList.remove('element-hidden');
            emailLinkSelected = true;
        } else {
            linkEmail.classList.add('element-hidden');
            emailLinkSelected = false;
        }
    }
    updateMarkupLinks();
    updateBoilerPlate();
}


// Detect Link Inputs Active and Update Card Button URL
const linkBtnInputs = document.querySelectorAll('.link-btn-input');

document.addEventListener('keyup', function () {
    linkBtnInputs.forEach(input => {
        if (input === document.activeElement) {
            if (input.value !== '') {
                // Add hyperlink, target, and rel attributes to each button when input field has value !== '':
                if (input.classList.contains('link-input-profile')) {
                    linkProfile.href = `${input.value}`;
                    linkProfile.target = "_blank";
                    linkProfile.rel = "noopener noreferrer";
                } else if (input.classList.contains('link-input-github')) {
                    linkGitHub.href = `${input.value}`;
                    linkGitHub.target = "_blank";
                    linkGitHub.rel = "noopener noreferrer";
                } else if (input.classList.contains('link-input-linkedin')) {
                    linkLinkedIn.href = `${input.value}`;
                    linkLinkedIn.target = "_blank";
                    linkLinkedIn.rel = "noopener noreferrer";
                } else if (input.classList.contains('link-input-twitter')) {
                    linkTwitter.href = `${input.value}`;
                    linkTwitter.target = "_blank";
                    linkTwitter.rel = "noopener noreferrer";
                } else if (input.classList.contains('link-input-hashnode')) {
                    linkHashnode.href = `${input.value}`;
                    linkHashnode.target = "_blank";
                    linkHashnode.rel = "noopener noreferrer";
                } else if (input.classList.contains('link-input-youtube')) {
                    linkYouTube.href = `${input.value}`;
                    linkYouTube.target = "_blank";
                    linkYouTube.rel = "noopener noreferrer";
                } else if (input.classList.contains('link-input-facebook')) {
                    linkFacebook.href = `${input.value}`;
                    linkFacebook.target = "_blank";
                    linkFacebook.rel = "noopener noreferrer";
                } else if (input.classList.contains('link-input-instagram')) {
                    linkInstagram.href = `${input.value}`;
                    linkInstagram.target = "_blank";
                    linkInstagram.rel = "noopener noreferrer";
                } else if (input.classList.contains('link-input-email')) {
                    linkEmail.href = `${input.value}`;
                    linkEmail.target = "_blank";
                    linkEmail.rel = "noopener noreferrer";
                }
            } else {
                // Remove hyperlink, target, and rel attributes from each button when input field is empty:
                if (input.classList.contains('link-input-profile')) {
                    linkProfile.removeAttribute('href');
                    linkProfile.removeAttribute('target');
                    linkProfile.removeAttribute('rel');
                } else if (input.classList.contains('link-input-github')) {
                    linkGitHub.removeAttribute('href');
                    linkGitHub.removeAttribute('target');
                    linkGitHub.removeAttribute('rel');
                } else if (input.classList.contains('link-input-linkedin')) {
                    linkLinkedIn.removeAttribute('href');
                    linkLinkedIn.removeAttribute('target');
                    linkLinkedIn.removeAttribute('rel');
                } else if (input.classList.contains('link-input-twitter')) {
                    linkTwitter.removeAttribute('href');
                    linkTwitter.removeAttribute('target');
                    linkTwitter.removeAttribute('rel');
                } else if (input.classList.contains('link-input-hashnode')) {
                    linkHashnode.removeAttribute('href');
                    linkHashnode.removeAttribute('target');
                    linkHashnode.removeAttribute('rel');
                } else if (input.classList.contains('link-input-youtube')) {
                    linkYouTube.removeAttribute('href');
                    linkYouTube.removeAttribute('target');
                    linkYouTube.removeAttribute('rel');
                } else if (input.classList.contains('link-input-facebook')) {
                    linkFacebook.removeAttribute('href');
                    linkFacebook.removeAttribute('target');
                    linkFacebook.removeAttribute('rel');
                } else if (input.classList.contains('link-input-instagram')) {
                    linkInstagram.removeAttribute('href');
                    linkInstagram.removeAttribute('target');
                    linkInstagram.removeAttribute('rel');
                } else if (input.classList.contains('link-input-email')) {
                    linkEmail.removeAttribute('href');
                    linkEmail.removeAttribute('target');
                    linkEmail.removeAttribute('rel');
                }
            }
            updateMySocial();
        } else {
            return;
        }
    });
});


// Upload and Delete Image
const uploadImageInput = document.querySelector('.choose-profile-img-btn');
const deleteProfileImgBtn = document.getElementById('deleteProfileImgBtn');
let uploadedImage = '';
const profileImgPreviewContainer = document.querySelector('.profile-img-preview-container');
const profileImgPreviewCircle = document.querySelector('.profile-img-preview-circle');
const cardProfileImgCircle = document.getElementById('cardProfileImgCircle');
const cardProfileImgPlaceholder = document.getElementById('cardProfileImgPlaceholder');
const addProfileImgButton = document.querySelector('.choose-file-btn');

uploadImageInput.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        profileImgPreviewContainer.classList.remove('element-hidden');
        uploadedImage = reader.result;
        profileImgPreviewCircle.style.backgroundImage = `url(${uploadedImage})`;
        cardProfileImgCircle.style.backgroundImage = `url(${uploadedImage})`;
        cardProfileImgPlaceholder.classList.add('element-hidden');
        addProfileImgButton.classList.add('element-hidden');
    });
    reader.readAsDataURL(this.files[0]);
});

deleteProfileImgBtn.addEventListener('click', function () {
    profileImgPreviewCircle.style.backgroundImage = 'none';
    cardProfileImgCircle.style.backgroundImage = 'none';
    cardProfileImgPlaceholder.classList.remove('element-hidden');
    profileImgPreviewContainer.classList.add('element-hidden');
    addProfileImgButton.classList.remove('element-hidden');
    uploadImageInput.value = '';
    uploadedImage = '';
});





// Update MySocial
function updateMySocial() {
    const cardName = document.getElementById('cardName');
    const cardLocation = document.getElementById('cardLocation');
    const cardAbout = document.getElementById('cardAbout');

    // Update Name
    if (updateNameInput.value === '') {
        cardName.textContent = 'John Smith';
        updateMarkupName('John Smith');
        updateBoilerPlate();
    } else {
        cardName.textContent = updateNameInput.value;
        updateMarkupName(updateNameInput.value);
        updateBoilerPlate();
    }

    // Update Location
    if (updateLocationInput.value === '') {
        cardLocation.textContent = 'London, UK';
        updateMarkupLocation('London, UK');
        updateBoilerPlate();
    } else {
        cardLocation.textContent = updateLocationInput.value;
        updateMarkupLocation(updateLocationInput.value);
        updateBoilerPlate();
    }

    // Update About (remove if field is empty)
    if (updateAboutTextarea.value === '') {
        cardAbout.classList.add('element-hidden');
        hasBoilerPlateAbout = false;
        updateMarkupAbout('');
        updateBoilerPlate();
    } else {
        cardAbout.classList.remove('element-hidden');
        cardAbout.textContent = updateAboutTextarea.value;
        hasBoilerPlateAbout = true;
        updateMarkupAbout(updateAboutTextarea.value);
        updateBoilerPlate();
    }
}



// Close Export Button Modal
const closeExportBubbleBtn = document.getElementById('closeExportBubbleBtn');
const exportBubble = document.getElementById('exportBubble');

closeExportBubbleBtn.addEventListener('click', closeExportBubble);

function closeExportBubble() {
    exportBubble.classList.add('element-hidden');
}


// ----- ✨ MARKUP ✨ -----
// HTML / CSS / JavaScript Template
const markupTextArea = document.getElementById('markupTextArea');
let hasBoilerPlateAbout = false;
let hasBoilerPlateSkills = false;
let hasBoilerPlateLinks = false;

let boilerPlateName = 'John Smith';
let boilerPlateLocation = 'London, UK';
let boilerPlateAbout = '';
let boilerPlateAboutText = 'Front-End Web Developer';
let boilerPlateSkills = '';
let boilerPlateLinks = '';


function updateMarkupName(name) {
    boilerPlateName = name;
}

function updateMarkupLocation(location) {
    boilerPlateLocation = location;
}

function updateMarkupAbout(about) {
    if (hasBoilerPlateAbout) {
        boilerPlateAboutText = about;

        boilerPlateAbout = `
            <!-- About -->
            <p class="card-about">${boilerPlateAboutText}</p>
        `;
    } else {
        boilerPlateAbout = '';
    }
}

let htmlSkillSelected = false;
let cssSkillSelected = false;
let bootstrapSkillSelected = false;
let scssSkillSelected = false;
let javascriptSkillSelected = false;
let reactSkillSelected = false;
let vueSkillSelected = false;
let angularSkillSelected = false;
let nodeSkillSelected = false;
let pythonSkillSelected = false;
let phpSkillSelected = false;
let javaSkillSelected = false;
let figmaSkillSelected = false;

function updateMarkupSkills() {
    if (skillBtnsSelected !== 0) {
        console.log('Number of Skills: ' + skillBtnsSelected);
        console.log('Skills will be displayed!');
        boilerPlateSkills = `
        <!-- Skills -->
        <div class="card-skills">
            ${htmlSkillSelected ? `<p class="card-skills--box">HTML</p>` : ''}
            ${cssSkillSelected ? `<p class="card-skills--box">CSS</p>` : ''}
            ${bootstrapSkillSelected ? `<p class="card-skills--box">Bootstrap</p>` : ''}
            ${scssSkillSelected ? `<p class="card-skills--box">SCSS</p>` : ''}
            ${javaSkillSelected ? `<p class="card-skills--box">JavaScript</p>` : ''}
            ${reactSkillSelected ? `<p class="card-skills--box">React</p>` : ''}
            ${vueSkillSelected ? `<p class="card-skills--box">Vue</p>` : ''}
            ${angularSkillSelected ? `<p class="card-skills--box">Angular</p>` : ''}
            ${nodeSkillSelected ? `<p class="card-skills--box">Node JS</p>` : ''}
            ${pythonSkillSelected ? `<p class="card-skills--box">Python</p>` : ''}
            ${phpSkillSelected ? `<p class="card-skills--box">PHP</p>` : ''}
            ${javaSkillSelected ? `<p class="card-skills--box">Java</p>` : ''}
            ${figmaSkillSelected ? `<p class="card-skills--box">Figma</p>` : ''}
        </div>
        `;
    } else {
        boilerPlateSkills = '';
    }
}

portfolioLinkSelected = false;
githubLinkSelected = false;
linkedinLinkSelected = false;
twitterLinkSelected = false;
hashnodeLinkSelected = false;
youtubeLinkSelected = false;
facebookLinkSelected = false;
instagramLinkSelected = false;
emailLinkSelected = false;

function updateMarkupLinks() {
    if (linkBtnsSelected !== 0) {
        boilerPlateLinks = `
        <!-- Links -->
        <div class="card-links">
            ${portfolioLinkSelected ? `<a class="card-links--btn link-profile" href="https://www.google.com" target="_blank"
                rel="noopener noreferrer">
                <i class="card-links--btn-icon fa-solid fa-circle-user"></i>
            </a>` : ''}
            ${githubLinkSelected ? `<a class="card-links--btn link-github">
                <i class="card-links--btn-icon fa-brands fa-github"></i>
            </a>` : ''}
            ${linkedinLinkSelected ? `<a class="card-links--btn link-linkedin">
                <i class="card-links--btn-icon fa-brands fa-linkedin"></i>
            </a>` : ''}
            ${twitterLinkSelected ? `<a class="card-links--btn link-twitter">
                <i class="card-links--btn-icon fa-brands fa-twitter"></i>
            </a>` : ''}
            ${hashnodeLinkSelected ? `<a class="card-links--btn link-hashnode">
                <i class="card-links--btn-icon fa-brands fa-hashnode"></i>
            </a>` : ''}
            ${youtubeLinkSelected ? `<a class="card-links--btn link-youtube">
                <i class="card-links--btn-icon fa-brands fa-youtube"></i>
            </a>` : ''}
            ${facebookLinkSelected ? `<a class="card-links--btn link-facebook">
                <i class="card-links--btn-icon fa-brands fa-facebook-f"></i>
            </a>` : ''}
            ${instagramLinkSelected ? `<a class="card-links--btn link-instagram">
                <i class="card-links--btn-icon fa-brands fa-instagram-square"></i>
            </a>` : ''}
            ${emailLinkSelected ? `<a class="card-links--btn link-email">
                <i class="card-links--btn-icon fa-regular fa-envelope"></i>
            </a>` : ''}
        </div>
        `;
    } else {
        boilerPlateLinks = '';
    }
}



// let skillBtnsSelected = 0;
// let linkBtnsSelected = 0;





let boilerPlate = `
<!-- 
Thank you for using MySocial 😊 
Created by Daniel Healy, 2022.
(Twitter: @web_dev_dan).
-->

<!DOCTYPE html>
<html lang="en">

<head>
<!-- Meta Data -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Google Fonts (Raleway) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet">
<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
<!-- Title -->
<title>MySocial | ${boilerPlateName}</title>
<!-- CSS Styling -->
<style>
    /* Universal */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        font-size: 62.5%;
        font-family: 'Raleway', sans-serif;
        background-color: rgb(235, 235, 235);
    }

    /* Background */
    .container {
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    /* MySocial Card */
    .card {
        background-color: white;
        margin: 10rem auto;
        padding: 5rem 10rem;
        border-radius: .5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    /* Profile Image */
    .card-pic {
        background-color: lightgray;
        /* background: url('/PROFILE-PICTURE.jpg'); (INSERT PICTURE HERE)*/
        background-position: center;
        background-size: cover;
        width: 16rem;
        height: 16rem;
        border-radius: 50%;
        overflow: hidden;
    }

    /* Name */
    .card-name {
        font-size: 3rem;
        text-align: center;
        max-width: 30rem;
        margin-top: 2rem;
    }

    /* Location */
    .card-location {
        max-width: 30rem;
        margin-top: 1rem;
        font-size: 1.6rem;
        display: flex;
        align-items: center;
    }

    .card-location--icon {
        margin-right: .8rem;
        color: gray;
    }

    .card-location--text {
        color: gray;
        text-align: center;
        line-height: 1.5;
    }

    /* About */
    .card-about {
        color: #333;
        max-width: 30rem;
        margin-top: 2rem;
        font-size: 1.6rem;
        line-height: 1.5;
        text-align: center;
    }

    /* Skills */
    .card-skills {
        max-width: 30rem;
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .card-skills--box {
        font-size: 1.2rem;
        margin: .2rem .2rem;
        padding: .5rem 1rem;
        background-color: gray;
        color: white;
    }

    /* Links */
    .card-links {
        width: 100%;
        min-width: 30rem;
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .card-links--btn {
        width: 100%;
        height: 6rem;
        margin-top: .5rem;
        border: .5rem solid white;
        transition: all .5s;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }

    .card-links--btn:first-child {
        margin-top: 0;
    }

    .card-links--btn:hover {
        transform: scale(110%);
    }

    .card-links--btn-icon {
        font-size: 3rem;
        color: white;
    }

    .link-profile {
        background-color: #878787;
    }

    .link-github {
        background-color: #171515;
    }

    .link-linkedin {
        background-color: #0e76a8;
    }

    .link-twitter {
        background-color: #00acee;
    }

    .link-hashnode {
        background-color: #3961F5;
    }

    .link-youtube {
        background-color: #ff0000;
    }

    .link-facebook {
        background-color: #3b5998;
    }

    .link-instagram {
        background-color: #833AB4;
    }

    .link-email {
        background-color: #878787;
    }

    /* Media Queries */
    @media only screen and (max-width: 550px) {
        .card {
            width: 100vw;
            min-height: 100vh;
            margin: 0 0;
            padding: 5rem 5rem;
            border-radius: 0;
            box-shadow: none;
        }
    }
</style>
</head>

<body>
<div class="container">
    <div class="card">
        <!-- Profile Image -->
        <div class="card-pic"></div>
        <!-- Name -->
        <h2 class="card-name">${boilerPlateName}</h2>
        <!-- Location -->
        <div class="card-location">
            <i class="card-location--icon fa-solid fa-location-dot"></i>
            <div class="card-location--text">${boilerPlateLocation}</div>
        </div>
    </div>
</div>
</body>

</html>
`;

function updateBoilerPlate() {
    boilerPlate = `
<!-- 
Thank you for using MySocial 😊 
Created by Daniel Healy, 2022.
(Twitter: @web_dev_dan).
-->

<!DOCTYPE html>
<html lang="en">

<head>
<!-- Meta Data -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Google Fonts (Raleway) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet">
<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
<!-- Title -->
<title>MySocial | ${boilerPlateName}</title>
<!-- CSS Styling -->
<style>
    /* Universal */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        font-size: 62.5%;
        font-family: 'Raleway', sans-serif;
        background-color: rgb(235, 235, 235);
    }

    /* Background */
    .container {
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    /* MySocial Card */
    .card {
        background-color: white;
        margin: 10rem auto;
        padding: 5rem 10rem;
        border-radius: .5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    /* Profile Image */
    .card-pic {
        background-color: lightgray;
        /* background: url('/PROFILE-PICTURE.jpg'); (INSERT PICTURE HERE)*/
        background-position: center;
        background-size: cover;
        width: 16rem;
        height: 16rem;
        border-radius: 50%;
        overflow: hidden;
    }

    /* Name */
    .card-name {
        font-size: 3rem;
        text-align: center;
        max-width: 30rem;
        margin-top: 2rem;
    }

    /* Location */
    .card-location {
        max-width: 30rem;
        margin-top: 1rem;
        font-size: 1.6rem;
        display: flex;
        align-items: center;
    }

    .card-location--icon {
        margin-right: .8rem;
        color: gray;
    }

    .card-location--text {
        color: gray;
        text-align: center;
        line-height: 1.5;
    }

    /* About */
    .card-about {
        color: #333;
        max-width: 30rem;
        margin-top: 2rem;
        font-size: 1.6rem;
        line-height: 1.5;
        text-align: center;
    }

    /* Skills */
    .card-skills {
        max-width: 30rem;
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .card-skills--box {
        font-size: 1.2rem;
        margin: .2rem .2rem;
        padding: .5rem 1rem;
        background-color: gray;
        color: white;
    }

    /* Links */
    .card-links {
        width: 100%;
        min-width: 30rem;
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .card-links--btn {
        width: 100%;
        height: 6rem;
        margin-top: .5rem;
        border: .5rem solid white;
        transition: all .5s;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }

    .card-links--btn:first-child {
        margin-top: 0;
    }

    .card-links--btn:hover {
        transform: scale(110%);
    }

    .card-links--btn-icon {
        font-size: 3rem;
        color: white;
    }

    .link-profile {
        background-color: #878787;
    }

    .link-github {
        background-color: #171515;
    }

    .link-linkedin {
        background-color: #0e76a8;
    }

    .link-twitter {
        background-color: #00acee;
    }

    .link-hashnode {
        background-color: #3961F5;
    }

    .link-youtube {
        background-color: #ff0000;
    }

    .link-facebook {
        background-color: #3b5998;
    }

    .link-instagram {
        background-color: #833AB4;
    }

    .link-email {
        background-color: #878787;
    }

    /* Media Queries */
    @media only screen and (max-width: 550px) {
        .card {
            width: 100vw;
            min-height: 100vh;
            margin: 0 0;
            padding: 5rem 5rem;
            border-radius: 0;
            box-shadow: none;
        }
    }
</style>
</head>

<body>
<div class="container">
    <div class="card">
        <!-- Profile Image -->
        <div class="card-pic"></div>
        <!-- Name -->
        <h2 class="card-name">${boilerPlateName}</h2>
        <!-- Location -->
        <div class="card-location">
            <i class="card-location--icon fa-solid fa-location-dot"></i>
            <div class="card-location--text">${boilerPlateLocation}</div>
        </div>
        ${boilerPlateAbout}
        ${boilerPlateSkills}
        ${boilerPlateLinks}
        
    </div>
</div>
</body>

</html>
`;

    updateMarkupTextArea();
}

markupTextArea.value = `
    ${boilerPlate}
`;

function updateMarkupTextArea() {
    markupTextArea.value = `
    ${boilerPlate}
`;
}



// Download All Button
const exportBtn = document.getElementById('exportBtn');

exportBtn.addEventListener('click', exportClicked);

function exportClicked() {
    if (exportBubble.classList.contains('element-hidden')) {
        // Nothing
    } else {
        exportBubble.classList.add('element-hidden');
    }
    console.log('Export clicked!');

    // Copy to Clipboard:
    markupTextArea.select();
    document.execCommand('copy');
}
