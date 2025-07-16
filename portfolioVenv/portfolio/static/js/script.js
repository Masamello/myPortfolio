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


const loadPictures = (resolve,reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.onload=()=>{
        if(xhr.status === 200 && xhr.responseText !== ""){
            resolve(JSON.parse(xhr.responseText));
        }else{
            reject(xhr.statusText);
        }
    }
    xhr.open("GET","assets/Json/ImageJson.json");
    xhr.send();
}

const imgBlockCreator = (imgObj,idx,total) =>{
    const mySlidesDiv = $('<div></div>');
    mySlidesDiv.addClass("mySlides");
    const numbertext = $(`<div class="numbertext">${idx+1}/${total}</div>`);
    const img = $("<img style='width:100%'/>");
    img.attr("src",imgObj.img);
    const caption = $(`<div class="text">${imgObj.img_caption}</div>`);
    mySlidesDiv.append(numbertext,img,caption);
    return mySlidesDiv;
    // <div class="mySlides fade">
    //     <div class="numbertext">1 / 3</div>
    //     <img src="./data/1.jpg" style="width: 100%" />
    //     <div class="text">Caption Text</div>
    // </div>
  }
  const dotCreator = (idx)=>{
    const dot = $('<span class="dot"></span>');
    dot.click((e)=>{
      movementBt("",idx);
    });
    return dot;
    // <span class="dot"></span>
  }
  const imgPromise = new Promise(loadPictures).then(
    (data)=>{
      data.forEach((imgObj,idx)=>{
        $("#container").append(imgBlockCreator(imgObj,idx,data.length));
        $("#dot_container").append(dotCreator(idx));
      });
      $(".mySlides").first().addClass('display').fadeIn('slow');
      $(".dot").first().addClass("active");
    },
    (err)=>{
      console.log(`Error:${err}`);
    }
  )
  const movementBt = (direction,idx=false)=>{
    let nextEl = null;
    if(direction!==""){ // directionが空でなかったら…=>ドットボタンを押して操作しなかった=>矢印ボタンを押したら…ってこと！
      switch(direction){ //もし矢印ボタンが押されたらスウィッチ構文発動！
        case "prev":
          nextEl = ($('.display').prev().length === 0) ? $('.mySlides').last():$('.display').prev();
          // let nextEl;
          //   if ($('.display').prev().length === 0) {
          //       nextEl = $('.mySlides').last();
          //   } else {
          //       nextEl = $('.display').prev();
          //   }
          break;
        case "next":
          nextEl = ($('.display').next().length === 0) ? $('.mySlides').first():$('.display').next();
          break;
      }
    }else{ //ドットボタンを押して画像を変更したら…else発動！
      nextEl = $(".mySlides").eq(idx);
    }
    $('.display').removeClass('display').fadeOut('slow',()=>{
            nextEl.fadeIn('slow').addClass('display');
            $(".dot").removeClass("active");
            $(".dot").eq($('.display').index()).addClass('active');
    });
    
   
}
$('.next').click((event)=>movementBt('next')); //
$('.prev').click((event)=>movementBt('prev'));

// const listItemGenerator = () => {
//     const listItems = document.getElementById('mySkillsItems');
    

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
