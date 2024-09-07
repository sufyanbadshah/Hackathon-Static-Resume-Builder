var toggleSkillsButton = document.getElementById('skills');
var skillsList = document.getElementById('skills-list');
if (toggleSkillsButton && skillsList) {
    toggleSkillsButton.addEventListener('click', function () {
        // Toggle visibility of skills list
        skillsList.classList.toggle('hidden');
        skillsList.classList.toggle('visible');
    });
}
else {
    console.error('Skills button or skills list not found.');
}
