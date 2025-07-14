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

const hiddenListReveal = () =>{
    const moreContents = document.getElementById('hiddenList');

    if(moreContents.classList.contains('d-none')){
        moreContents.classList.remove('d-none');
        moreContents.scrollIntoView({behavior: 'smooth',block: 'start'})
    }

}

document.getElementById('projectBtn').addEventListener('click',()=>{
    hiddenListReveal();
})
// スキル生成はDjangoテンプレートで処理するため、JavaScriptでの生成は無効化
// const listItemGenerator = () => {
//     const listItems = document.getElementById('mySkillsItems');
    
//     // データベースからスキルが既に生成されている場合はスキップ
//     if (listItems.children.length > 0) {
//         return;
//     }
    
//     const skills = [
//         { name: 'HTML', file: 'htmlIcon.svg' },
//         { name: 'CSS', file: 'cssIcon.svg' },
//         { name: 'JavaScript', file: 'JavaScriptIcon.svg' },
//         { name: 'Python', file: 'pythonIcon.svg' },
//         { name: 'Django', file: 'djangoIcon.svg' },
//         { name: 'PHP', file: 'phpIcon (2).svg' },
//         { name: 'MySQL', file: 'mysqlIcon.svg' },
//         { name: 'Git', file: 'gitIcon.svg' },
//         { name: 'Vue.js', file: 'vuejsIcon.svg' },
//         { name: 'React', file: 'reactIcon.svg' }
//     ];
    
//     skills.forEach(skill => {
//         const listItem = document.createElement('li');
//         listItem.className = 'skillItem';
//         listItem.innerHTML = `
//             <img src="static/assets/Icons/${skill.file}" alt="${skill.name}" title="${skill.name}">
//         `;
//         listItems.appendChild(listItem);
//     });
// };

document.addEventListener('DOMContentLoaded', function() {
    // listItemGenerator(); // スキル生成を無効化
});
