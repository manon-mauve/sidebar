let btn = document.getElementById('btn');
let sidebar = document.getElementById('side-bar');

btn.addEventListener('click', showHideSidebar);

function showHideSidebar() {
    sidebar.classList.toggle('sidebarshow');
}

const content = document.querySelector('.content');

content.addEventListener('click', hideSidebar)
function hideSidebar() {
    sidebar.classList.remove('sidebarshow');
}
