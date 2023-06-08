const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn-img');
const dropDownMenu = document.querySelector('.dropDown-menu');
const backDrop = document.querySelector('.back-drop');


toggleBtn.addEventListener('click', () => {
    dropDownMenu.style.display = 'block';
    backDrop.style.display = 'block';
});

backDrop.addEventListener('click' , () => {
    backDrop.style.display = 'none'
    dropDownMenu.style.display = 'none'
})
