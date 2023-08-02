let search = document.querySelector(".search");
 
 search.onclick = function() {
    document.querySelector(".container").classList.toggle('active');
}

function openNav() {
    document.getElementById("myNav")
    .style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav")
    .style.width = "0%";
}