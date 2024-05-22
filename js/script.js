// search 

let searchInput =document.getElementById('searchInput')
let clearIcon =document.getElementById('clearIcon')



searchInput.addEventListener('input', function() {
    if (this.value.length > 0) {
        clearIcon.style.display = 'block';
    } else {
        clearIcon.style.display = 'none';
    }
});

clearIcon.addEventListener('click', function() {
    searchInput.value = '';
    this.style.display = 'none';
    searchInput.focus();
});


let seeMore = document.getElementById('more');
let seeLess = document.getElementById('less');


seeMore.addEventListener('click', function() {
    seeMore.style.display= "none"
    seeLess.style.display= "block "
});

seeLess.addEventListener('click', function() {
    let content = document.getElementById('collapseContent');
    seeMore.style.display= "block"
    seeLess.style.display= "none "
    content.classList.remove("show")


});




