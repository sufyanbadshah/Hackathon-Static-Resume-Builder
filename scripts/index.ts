const toggleSkillsButton = document.getElementById('skills');
const skillsList = document.getElementById('skills-list');

if (toggleSkillsButton && skillsList) {
    toggleSkillsButton.addEventListener('click', () => {
        skillsList.classList.toggle('hidden');
        skillsList.classList.toggle('visible');
    });
} else {
    console.error('Hehe');
}
