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