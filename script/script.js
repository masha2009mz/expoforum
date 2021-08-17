const searchInput = document.getElementById("search-input");
const searchIcon = document.getElementById("search-icon");
document.documentElement.addEventListener("click", (e) => {
    if (e.target == searchInput || e.target == searchIcon) {
        searchIcon.style.display = "none";
        searchInput.style.display = "block";
        searchInput.focus();
    }else{
        searchIcon.style.display = "block";
        searchInput.style.display = "none";
    }
})
/* let x = 0;
x = 1;
console.log(x)
const y=1;
console.log(document) */