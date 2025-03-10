
const posgradoDropdown = document.getElementById('navbarDropdown');
const maestriasDropdown = document.getElementById('maestriasDropdown');

posgradoDropdown.addEventListener('click', function (event) {
    event.stopPropagation();
});

maestriasDropdown.addEventListener('click', function (event) {
    event.stopPropagation();
});
