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