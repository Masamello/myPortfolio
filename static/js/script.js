document.getElementById('toggleBtn').addEventListener('click', function() {
    const moreText = document.getElementById('moretext');
    const button = this;
    if(moreText.classList.contains('d-none')){
        moreText.classList.remove('d-none');
        button.textContent = 'Read Less';
        moreText.scrollIntoView({behavior: 'smooth',block: 'start'});
    }else{
        moreText.classList.add('d-none');
        button.textContent = 'Read More'
        moreText.scrollIntoView({behavior: 'smooth',block: 'start'});
    }
});

const listItemGenerator = () => {
    const listItems = document.getElementById('mySkillsItems');
    
    const skills = [
        { name: 'HTML', file: 'htmlIcon.svg' },
        { name: 'CSS', file: 'cssIcon.svg' },
        { name: 'JavaScript', file: 'JavaScriptIcon.svg' },
        { name: 'Python', file: 'pythonIcon.svg' },
        { name: 'Django', file: 'djangoIcon.svg' },
        { name: 'PHP', file: 'phpIcon (2).svg' },
        { name: 'MySQL', file: 'mysqlIcon.svg' },
        { name: 'Git', file: 'gitIcon.svg' },
        { name: 'Vue.js', file: 'vuejsIcon.svg' },
        { name: 'React', file: 'reactIcon.svg' }
    ];
    
    skills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.className = 'skillItem';
        listItem.innerHTML = `
            <img src="assets/Icons/${skill.file}" alt="${skill.name}" title="${skill.name}">
        `;
        listItems.appendChild(listItem);
    });
};

document.addEventListener('DOMContentLoaded', function() {
    listItemGenerator();
});
